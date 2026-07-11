export const newsCategories = [
  "Latest",
  "Nigeria Tech",
  "Africa Tech",
  "Artificial Intelligence",
  "FinTech",
  "ClimateTech",
  "Cybersecurity",
] as const;

export type NewsCategory = (typeof newsCategories)[number];

export type NewsArticle = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishedAt: string;
  description: string;
  imageUrl?: string;
  category: NewsCategory;
  region: "Nigeria" | "Africa" | "Global";
  sourceUrl: string;
  sourceFavicon?: string;
  isFallback?: boolean;
};

export type NewsResponse = {
  source: "rss" | "rss-gdelt" | "fallback";
  category: NewsCategory;
  generatedAt: string;
  message?: string;
  articles: NewsArticle[];
};
