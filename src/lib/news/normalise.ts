import type { NewsArticle, NewsCategory } from "@/lib/news/types";

const categorySignals: Array<[NewsCategory, RegExp]> = [
  ["Artificial Intelligence", /\b(ai|artificial intelligence|machine learning|genai|generative ai)\b/i],
  ["FinTech", /\b(fintech|bank|payment|payments|digital finance|insurtech|crypto)\b/i],
  ["ClimateTech", /\b(climate|carbon|energy|solar|renewable|sustainability|emissions)\b/i],
  ["Cybersecurity", /\b(cybersecurity|cyber security|security breach|malware|fraud|phishing)\b/i],
  ["Nigeria Tech", /\b(nigeria|lagos|abuja|nigerian)\b/i],
  ["Africa Tech", /\b(africa|african|kenya|ghana|south africa|egypt|senegal|rwanda)\b/i],
];

const entityMap: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

export function stripHtml(value?: string) {
  if (!value) {
    return "";
  }

  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#?\w+);/g, (match, entity: string) => {
      if (entity.startsWith("#x")) {
        return String.fromCharCode(Number.parseInt(entity.slice(2), 16));
      }

      if (entity.startsWith("#")) {
        return String.fromCharCode(Number.parseInt(entity.slice(1), 10));
      }

      return entityMap[entity] ?? match;
    })
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 220);
}

export function safeUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  try {
    const parsed = new URL(value);

    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return undefined;
    }

    parsed.hash = "";
    return parsed.toString();
  } catch {
    return undefined;
  }
}

export function inferCategory(title: string, description: string, requested: NewsCategory): NewsCategory {
  if (requested !== "Latest") {
    return requested;
  }

  const text = `${title} ${description}`;
  const match = categorySignals.find(([, pattern]) => pattern.test(text));

  return match?.[0] ?? "Africa Tech";
}

export function titleKey(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .slice(0, 12)
    .join(" ");
}

export function dedupeArticles(articles: NewsArticle[]) {
  const seenUrls = new Set<string>();
  const seenTitles = new Set<string>();
  const output: NewsArticle[] = [];

  for (const article of articles) {
    const parsed = new URL(article.url);
    parsed.search = "";
    parsed.hash = "";

    const urlKey = parsed.toString();
    const headlineKey = titleKey(article.title);

    if (seenUrls.has(urlKey) || seenTitles.has(headlineKey)) {
      continue;
    }

    seenUrls.add(urlKey);
    seenTitles.add(headlineKey);
    output.push(article);
  }

  return output;
}
