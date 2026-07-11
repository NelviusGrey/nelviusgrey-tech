import type { NewsArticle, NewsCategory } from "@/lib/news/types";

const fallbackBase: Omit<NewsArticle, "category">[] = [
  {
    id: "fallback-techcabal",
    title: "Follow African technology reporting at the source",
    publisher: "TechCabal",
    url: "https://techcabal.com",
    publishedAt: "2026-07-01T08:00:00.000Z",
    description:
      "A publisher source for reporting on African innovation, startups, policy, fintech and digital infrastructure.",
    region: "Africa",
    sourceUrl: "https://techcabal.com",
    sourceFavicon: "https://www.google.com/s2/favicons?domain=techcabal.com&sz=64",
    isFallback: true,
  },
  {
    id: "fallback-techpoint",
    title: "Track Nigerian and African technology coverage",
    publisher: "Techpoint Africa",
    url: "https://techpoint.africa",
    publishedAt: "2026-07-01T08:00:00.000Z",
    description:
      "A publisher source for technology, startups, fintech, policy, energy and African digital economy coverage.",
    region: "Nigeria",
    sourceUrl: "https://techpoint.africa",
    sourceFavicon: "https://www.google.com/s2/favicons?domain=techpoint.africa&sz=64",
    isFallback: true,
  },
  {
    id: "fallback-disrupt",
    title: "Browse Africa startup and investment ecosystem news",
    publisher: "Disrupt Africa",
    url: "https://disruptafrica.com",
    publishedAt: "2026-07-01T08:00:00.000Z",
    description:
      "A publisher source for African startup, entrepreneur, investment and ecosystem news across regional markets.",
    region: "Africa",
    sourceUrl: "https://disruptafrica.com",
    sourceFavicon: "https://www.google.com/s2/favicons?domain=disruptafrica.com&sz=64",
    isFallback: true,
  },
  {
    id: "fallback-itnewsafrica",
    title: "Read African business technology coverage",
    publisher: "IT News Africa",
    url: "https://www.itnewsafrica.com",
    publishedAt: "2026-07-01T08:00:00.000Z",
    description:
      "A publisher source for digital transformation, cybersecurity, fintech, AI and enterprise technology across Africa.",
    region: "Africa",
    sourceUrl: "https://www.itnewsafrica.com",
    sourceFavicon: "https://www.google.com/s2/favicons?domain=itnewsafrica.com&sz=64",
    isFallback: true,
  },
];

export function fallbackNews(category: NewsCategory): NewsArticle[] {
  return fallbackBase.map((article) => ({
    ...article,
    id: `${article.id}-${category.toLowerCase().replaceAll(" ", "-")}`,
    category,
  }));
}
