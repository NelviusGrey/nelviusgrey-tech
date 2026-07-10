import { insights, type InsightCategory } from "@/lib/constants";

export type TechArticle = {
  title: string;
  source: string;
  publishedAt: string;
  description: string;
  url: string;
  imageUrl: string;
  category: string;
  isPlaceholder?: boolean;
};

const queryByCategory: Record<InsightCategory, string> = {
  All: "technology OR AI OR startups OR software OR climate-tech OR fintech OR cybersecurity OR digital transformation",
  "Social Impact": "social impact technology OR nonprofit technology OR humanitarian data systems",
  Data: "data systems OR dashboards OR decision intelligence",
  "Climate Intelligence": "climate tech OR sustainability technology OR carbon data OR climate risk",
  "AI Automation": "artificial intelligence automation OR business automation",
  "Digital Systems": "digital transformation OR software platforms OR enterprise technology",
};

type NewsApiArticle = {
  title?: string;
  source?: { name?: string };
  publishedAt?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
};

type NewsApiResponse = {
  articles?: NewsApiArticle[];
};

export function fallbackForCategory(category: InsightCategory): TechArticle[] {
  const filtered =
    category === "All" ? insights : insights.filter((article) => article.category === category);

  return (filtered.length > 0 ? filtered : insights).slice(0, 6).map((article) => ({
    title: article.title,
    source: article.author,
    publishedAt: article.date,
    description: article.description,
    url: `/insights/${article.slug}`,
    imageUrl: article.cover,
    category: article.category,
    isPlaceholder: true,
  }));
}

export async function fetchTechArticles(category: InsightCategory): Promise<{
  source: "newsapi" | "fallback";
  articles: TechArticle[];
  message?: string;
}> {
  const apiKey = process.env.NEWS_API_KEY ?? process.env.NEWSAPI_KEY;

  if (!apiKey) {
    return {
      source: "fallback",
      articles: fallbackForCategory(category),
      message: "Internal insights shown. Add NEWS_API_KEY for curated external headlines.",
    };
  }

  const query = queryByCategory[category] ?? queryByCategory.All;
  const url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.set("q", query);
  url.searchParams.set("language", "en");
  url.searchParams.set("sortBy", "publishedAt");
  url.searchParams.set("pageSize", "8");

  const response = await fetch(url, {
    headers: { "X-Api-Key": apiKey },
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    return {
      source: "fallback",
      articles: fallbackForCategory(category),
      message: "External news unavailable. Showing internal insights.",
    };
  }

  const payload = (await response.json()) as NewsApiResponse;
  const articles =
    payload.articles
      ?.filter((article) => article.title && article.url)
      .map((article): TechArticle => ({
        title: article.title ?? "Untitled article",
        source: article.source?.name ?? "Technology News",
        publishedAt: article.publishedAt ?? new Date().toISOString(),
        description:
          article.description ??
          "A current technology article selected for business and innovation readers.",
        url: article.url ?? "#",
        imageUrl: article.urlToImage ?? insights[0].cover,
        category,
      })) ?? [];

  if (articles.length === 0) {
    return {
      source: "fallback",
      articles: fallbackForCategory(category),
      message: "Internal insights shown.",
    };
  }

  return { source: "newsapi", articles };
}
