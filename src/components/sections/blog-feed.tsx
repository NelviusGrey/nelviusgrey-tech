"use client";

import { SearchX } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { insightCategories, publicInsights as insights, type InsightCategory } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

type TechArticle = {
  title: string;
  source: string;
  publishedAt: string;
  description: string;
  url: string;
  imageUrl: string;
  category: string;
  isPlaceholder?: boolean;
};

export function BlogFeed() {
  const [category, setCategory] = useState<InsightCategory>("All");
  const articles = useMemo<TechArticle[]>(() => {
    const filtered =
      category === "All" ? insights : insights.filter((article) => article.category === category);

    return filtered.map((article) => ({
      title: article.title,
      source: article.author,
      publishedAt: article.date,
      description: article.description,
      url: `/insights/${article.slug}`,
      imageUrl: article.cover,
      category: article.category,
      isPlaceholder: true,
    }));
  }, [category]);

  return (
    <div>
      <div className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {insightCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`shrink-0 rounded-md border px-4 py-2 text-sm font-medium transition ${
              item === category
                ? "border-[color:var(--brand-green)] bg-[color:var(--brand-green-soft)] text-white"
                : "border-white/10 bg-white/[0.035] text-white/58 hover:border-white/25 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3">
        <p className="text-sm font-medium text-white/70">NelviusGrey insights</p>
        <p className="text-xs text-[color:var(--brand-green)]">Curated internal notes</p>
      </div>

      {articles.length === 0 && (
        <div className="mt-12 grid min-h-64 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-center">
          <div>
            <SearchX className="mx-auto mb-4 h-8 w-8 text-[color:var(--brand-green)]" />
            <p className="font-medium text-white">No articles found for this category.</p>
            <p className="mt-2 text-sm text-white/55">Try another filter.</p>
          </div>
        </div>
      )}

      {articles.length > 0 && (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={`${article.title}-${article.publishedAt}`}
              className="glass-panel group overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-green)]/35"
            >
              <a href={article.url} target="_blank" rel="noreferrer" className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-[0.76] transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-transparent" />
                  {article.isPlaceholder && (
                    <span className="absolute left-4 top-4 rounded-md border border-[color:var(--brand-green)]/30 bg-black/45 px-3 py-1 text-xs font-medium text-[color:var(--brand-green)] backdrop-blur">
                      Insights Coming Soon
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 text-xs text-white/46">
                    <span>{article.source}</span>
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{article.description}</p>
                  <p className="mt-5 text-sm font-semibold text-[color:var(--brand-green)]">
                    Read original article
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
