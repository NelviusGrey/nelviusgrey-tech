import { NextResponse, type NextRequest } from "next/server";

import { getNews, newsCategories, type NewsCategory } from "@/lib/news";

export const revalidate = 1800;

function parseCategory(value: string | null): NewsCategory {
  return newsCategories.find((category) => category === value) ?? "Latest";
}

export async function GET(request: NextRequest) {
  const category = parseCategory(request.nextUrl.searchParams.get("category"));
  const payload = await getNews(category);

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "s-maxage=1800, stale-while-revalidate=1800",
    },
  });
}
