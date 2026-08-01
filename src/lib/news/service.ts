import Parser from "rss-parser";

import { SITE_URL } from "@/lib/constants";
import { fallbackNews } from "@/lib/news/fallback";
import { dedupeArticles, inferCategory, safeUrl, stripHtml } from "@/lib/news/normalise";
import { gdeltQueries, rssSources, type NewsSource } from "@/lib/news/sources";
import type { NewsArticle, NewsCategory, NewsResponse } from "@/lib/news/types";

type FeedItem = {
  title?: string;
  link?: string;
  guid?: string;
  pubDate?: string;
  isoDate?: string;
  contentSnippet?: string;
  content?: string;
  enclosure?: { url?: string; type?: string };
  "media:content"?: { $?: { url?: string } } | Array<{ $?: { url?: string } }>;
  "media:thumbnail"?: { $?: { url?: string } } | Array<{ $?: { url?: string } }>;
};

type GdeltArticle = {
  title?: string;
  url?: string;
  seendate?: string;
  domain?: string;
  sourcecountry?: string;
  socialimage?: string;
};

const parser = new Parser<Record<string, unknown>, FeedItem>({
  customFields: {
    item: ["media:content", "media:thumbnail"],
  },
  timeout: 12000,
});

function sourceFavicon(homepage: string) {
  const domain = new URL(homepage).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function itemImage(item: FeedItem) {
  const mediaContent = Array.isArray(item["media:content"])
    ? item["media:content"][0]?.$?.url
    : item["media:content"]?.$?.url;
  const mediaThumbnail = Array.isArray(item["media:thumbnail"])
    ? item["media:thumbnail"][0]?.$?.url
    : item["media:thumbnail"]?.$?.url;

  return safeUrl(mediaContent ?? mediaThumbnail ?? item.enclosure?.url);
}

function articleFromItem(item: FeedItem, source: NewsSource, requested: NewsCategory): NewsArticle | null {
  const title = stripHtml(item.title);
  const url = safeUrl(item.link ?? item.guid);

  if (!title || !url) {
    return null;
  }

  const description = stripHtml(item.contentSnippet ?? item.content);
  const publishedAt = new Date(item.isoDate ?? item.pubDate ?? Date.now()).toISOString();

  return {
    id: `${source.name}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 96),
    title,
    publisher: source.name,
    url,
    publishedAt,
    description: description || "Open the publisher source for the full story.",
    imageUrl: itemImage(item),
    category: inferCategory(title, description, requested),
    region: source.region,
    sourceUrl: source.homepage,
    sourceFavicon: sourceFavicon(source.homepage),
  };
}

async function fetchSource(source: NewsSource, requested: NewsCategory) {
  if (!source.categories.includes(requested) && requested !== "Latest") {
    return [];
  }

  try {
    const feed = await parser.parseURL(source.feedUrl);
    const articles = feed.items
      .map((item) => articleFromItem(item, source, requested))
      .filter((article): article is NewsArticle => Boolean(article))
      .slice(0, 5);

    return articles;
  } catch (error) {
    console.warn(`News feed unavailable: ${source.name}`, error instanceof Error ? error.message : error);
    return [];
  }
}

function gdeltDate(value?: string) {
  if (!value) {
    return new Date().toISOString();
  }

  const cleaned = value.replace(/[^0-9]/g, "");
  const year = cleaned.slice(0, 4);
  const month = cleaned.slice(4, 6);
  const day = cleaned.slice(6, 8);
  const hour = cleaned.slice(8, 10) || "00";
  const minute = cleaned.slice(10, 12) || "00";

  return new Date(`${year}-${month}-${day}T${hour}:${minute}:00.000Z`).toISOString();
}

async function fetchGdelt(requested: NewsCategory): Promise<NewsArticle[]> {
  if (process.env.ENABLE_GDELT_NEWS === "false") {
    return [];
  }

  try {
    const url = new URL("https://api.gdeltproject.org/api/v2/doc/doc");
    url.searchParams.set("query", gdeltQueries[requested]);
    url.searchParams.set("mode", "ArtList");
    url.searchParams.set("format", "json");
    url.searchParams.set("sort", "datedesc");
    url.searchParams.set("maxrecords", "12");

    const response = await fetch(url, {
      next: { revalidate: 1800 },
      headers: {
        "User-Agent": `NelviusGreyTech/1.0 (+${SITE_URL})`,
      },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as { articles?: GdeltArticle[] };

    return (payload.articles ?? [])
      .map((item): NewsArticle | null => {
        const title = stripHtml(item.title);
        const urlValue = safeUrl(item.url);

        if (!title || !urlValue) {
          return null;
        }

        const domain = item.domain ? `https://${item.domain}` : urlValue;
        const sourceUrl = safeUrl(domain) ?? urlValue;

        return {
          id: `gdelt-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 96),
          title,
          publisher: item.domain ?? "GDELT discovery",
          url: urlValue,
          publishedAt: gdeltDate(item.seendate),
          description: "Discovered through GDELT. Open the publisher source for the full article.",
          imageUrl: safeUrl(item.socialimage),
          category: requested === "Latest" ? inferCategory(title, "", requested) : requested,
          region: /nigeria/i.test(`${title} ${item.sourcecountry}`) ? "Nigeria" : "Africa",
          sourceUrl,
          sourceFavicon: sourceFavicon(sourceUrl),
        };
      })
      .filter((article): article is NewsArticle => Boolean(article));
  } catch (error) {
    console.warn("GDELT news discovery unavailable", error instanceof Error ? error.message : error);
    return [];
  }
}

export async function getNews(category: NewsCategory): Promise<NewsResponse> {
  const requested = category;
  const rssResults = (await Promise.all(rssSources.map((source) => fetchSource(source, requested)))).flat();
  const gdeltResults = rssResults.length >= 8 ? [] : await fetchGdelt(requested);
  const articles = dedupeArticles([...rssResults, ...gdeltResults])
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 18);

  if (articles.length === 0) {
    return {
      source: "fallback",
      category: requested,
      generatedAt: new Date().toISOString(),
      message: "Publisher feeds are temporarily unavailable. Showing curated source links.",
      articles: fallbackNews(requested),
    };
  }

  return {
    source: gdeltResults.length > 0 ? "rss-gdelt" : "rss",
    category: requested,
    generatedAt: new Date().toISOString(),
    articles,
  };
}
