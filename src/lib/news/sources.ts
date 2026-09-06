import type { NewsCategory } from "@/lib/news/types";

export type NewsSource = {
  name: string;
  feedUrl: string;
  homepage: string;
  region: "Nigeria" | "Africa";
  categories: NewsCategory[];
};

export const rssSources: NewsSource[] = [
  {
    name: "TechCabal",
    feedUrl: "https://techcabal.com/feed/",
    homepage: "https://techcabal.com",
    region: "Africa",
    categories: ["Latest", "Nigeria Tech", "Africa Tech", "Artificial Intelligence", "FinTech"],
  },
  {
    name: "Techpoint Africa",
    feedUrl: "https://techpoint.africa/feed/",
    homepage: "https://techpoint.africa",
    region: "Nigeria",
    categories: ["Latest", "Nigeria Tech", "Africa Tech", "FinTech", "Artificial Intelligence"],
  },
  {
    name: "Disrupt Africa",
    feedUrl: "https://disruptafrica.com/feed/",
    homepage: "https://disruptafrica.com",
    region: "Africa",
    categories: ["Latest", "Africa Tech", "FinTech"],
  },
  {
    name: "IT News Africa",
    feedUrl: "https://www.itnewsafrica.com/feed/",
    homepage: "https://www.itnewsafrica.com",
    region: "Africa",
    categories: ["Latest", "Africa Tech", "Artificial Intelligence", "Cybersecurity", "FinTech"],
  },
];

export const gdeltQueries: Record<NewsCategory, string> = {
  Latest:
    "(Nigeria technology OR Africa technology OR African startups OR African fintech OR African artificial intelligence)",
  "Nigeria Tech": "(Nigeria technology OR Nigerian startups OR software development Nigeria OR Nigeria fintech)",
  "Africa Tech": "(Africa technology OR African startups OR telecommunications Africa OR digital transformation Africa)",
  "Artificial Intelligence": "(African artificial intelligence OR AI Africa OR AI Nigeria)",
  FinTech: "(Nigeria fintech OR African fintech OR digital finance Africa)",
  Cybersecurity: "(African cybersecurity OR cybersecurity Nigeria OR cyber security Africa)",
};
