import { fallbackArticles, type InsightCategory } from "@/lib/constants";

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
  AI: "artificial intelligence OR machine learning",
  Startups: "technology startups OR venture technology",
  "Climate-Tech": "climate tech OR sustainability technology OR carbon data",
  FinTech: "fintech OR digital banking OR payments technology",
  Cybersecurity: "cybersecurity OR data security OR cyber risk",
  Software: "software development OR developer tools OR SaaS",
  "Digital Transformation": "digital transformation OR business automation OR enterprise technology",
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
  status?: string;
  articles?: NewsApiArticle[];
  message?: string;
};

export function fallbackForCategory(category: InsightCategory): TechArticle[] {
  if (category === "All") {
    return [...fallbackArticles];
  }

  const filtered = fallbackArticles.filter((article) => article.category === category);
  return filtered.length > 0 ? [...filtered] : [...fallbackArticles];
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
      message: "Insights Coming Soon",
    };
  }

  const query = queryByCategory[category] ?? queryByCategory.All;
  const url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.set("q", query);
  url.searchParams.set("language", "en");
  url.searchParams.set("sortBy", "publishedAt");
  url.searchParams.set("pageSize", "12");

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": apiKey,
    },
    next: {
      revalidate: 1800,
    },
  });

  if (!response.ok) {
    return {
      source: "fallback",
      articles: fallbackForCategory(category),
      message: "News service unavailable. Showing curated placeholders.",
    };
  }

  const payload = (await response.json()) as NewsApiResponse;
  const articles =
    payload.articles
      ?.filter((article) => article.title && article.url)
      .map((article): TechArticle => {
        return {
          title: article.title ?? "Untitled article",
          source: article.source?.name ?? "Technology News",
          publishedAt: article.publishedAt ?? new Date().toISOString(),
          description:
            article.description ??
            "A current technology article selected for business and innovation readers.",
          url: article.url ?? "#",
          imageUrl:
            article.urlToImage ??
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
          category,
        };
      }) ?? [];

  if (articles.length === 0) {
    return {
      source: "fallback",
      articles: fallbackForCategory(category),
      message: "Insights Coming Soon",
    };
  }

  return {
    source: "newsapi",
    articles,
  };
}
