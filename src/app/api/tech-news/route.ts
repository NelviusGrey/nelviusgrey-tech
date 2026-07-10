import { NextResponse } from "next/server";

import { insightCategories, type InsightCategory } from "@/lib/constants";
import { fetchTechArticles } from "@/lib/news";

function toInsightCategory(value: string | null): InsightCategory {
  const fallback: InsightCategory = "All";

  if (!value) {
    return fallback;
  }

  return insightCategories.includes(value as InsightCategory)
    ? (value as InsightCategory)
    : fallback;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = toInsightCategory(searchParams.get("category"));
  const result = await fetchTechArticles(category);

  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "s-maxage=1800, stale-while-revalidate=3600",
    },
  });
}
