"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { fallbackNews } from "@/lib/news/fallback";
import { newsCategories, type NewsArticle, type NewsCategory, type NewsResponse } from "@/lib/news/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

function ArticleImage({ article }: { article: NewsArticle }) {
  if (!article.imageUrl) {
    return (
      <div className="grid h-full place-items-center bg-[color:var(--carbon)]">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
          {article.publisher}
        </span>
      </div>
    );
  }

  return (
    <img
      src={article.imageUrl}
      alt=""
      loading="lazy"
      className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-85"
    />
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="min-h-[28rem] animate-pulse border border-white/10 bg-white/[0.035]" />
      <div className="grid gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-32 animate-pulse border border-white/10 bg-white/[0.035]" />
        ))}
      </div>
    </div>
  );
}

export function NewsExperience() {
  const [category, setCategory] = useState<NewsCategory>("Latest");
  const [payload, setPayload] = useState<NewsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/news?category=${encodeURIComponent(category)}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("News route unavailable");
        }

        const data = (await response.json()) as NewsResponse;
        setPayload(data);
      } catch {
        if (controller.signal.aborted) {
          return;
        }

        setError("Live publisher feeds are unavailable here. Showing curated source links.");
        setPayload({
          source: "fallback",
          category,
          generatedAt: new Date().toISOString(),
          message: "Showing curated source links.",
          articles: fallbackNews(category),
        });
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadNews();

    return () => controller.abort();
  }, [category]);

  const articles = useMemo(() => payload?.articles ?? [], [payload]);
  const lead = articles[0];
  const rest = articles.slice(1, 7);
  const ticker = useMemo(() => [...articles.slice(0, 8), ...articles.slice(0, 8)], [articles]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
              African technology radar
            </p>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-normal text-white sm:text-6xl">
              Live signals from African and Nigerian technology publishers.
            </h2>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-white/56 lg:justify-self-end">
            Headlines link directly to the original publishers. NelviusGrey Tech only displays feed metadata,
            short publisher-provided descriptions, dates and outbound source links.
          </p>
        </div>

        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {newsCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "relative shrink-0 rounded-md border px-4 py-2 text-sm font-medium transition",
                category === item
                  ? "border-[color:var(--brand-green)] text-white"
                  : "border-white/10 bg-white/[0.03] text-white/58 hover:text-white",
              )}
            >
              {category === item && (
                <motion.span
                  layoutId="news-tab"
                  className="absolute inset-0 -z-10 rounded-md bg-[color:var(--brand-green-soft)]"
                />
              )}
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden border-y border-white/10 py-3">
          <div className="marquee-track flex w-max gap-10">
            {ticker.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.22em] text-white/42 transition hover:text-[color:var(--brand-green)]"
              >
                {item.publisher}: {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {isLoading && <LoadingSkeleton />}

          {!isLoading && lead && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category}-${lead.id}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
              >
                <a
                  href={lead.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group technical-frame block overflow-hidden border border-white/10 bg-[color:var(--carbon)]"
                >
                  <div className="relative min-h-[30rem] overflow-hidden">
                    <ArticleImage article={lead} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--obsidian)] via-[rgba(3,5,4,0.72)] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--brand-green)]">
                        <span>{lead.publisher}</span>
                        <span className="text-white/28">/</span>
                        <span>{formatDate(lead.publishedAt)}</span>
                      </div>
                      <h3 className="mt-4 max-w-4xl font-display text-4xl font-light leading-tight tracking-normal text-white sm:text-6xl">
                        {lead.title}
                      </h3>
                      <p className="mt-5 max-w-3xl text-sm leading-7 text-white/64">{lead.description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-green)]">
                        Read at source
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>

                <div className="grid gap-4">
                  {rest.map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid gap-4 border border-white/10 bg-white/[0.025] p-4 transition hover:border-[color:var(--line-green)] sm:grid-cols-[8rem_1fr]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--carbon)]">
                        <ArticleImage article={article} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/38">
                          <span>{article.publisher}</span>
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <h4 className="mt-3 font-display text-xl font-light leading-tight tracking-normal text-white">
                          {article.title}
                        </h4>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-green)]">
                          Read at source
                          <ExternalLink className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {!isLoading && error && (
            <div className="mt-5 flex items-start gap-3 border border-[color:var(--champagne)]/18 bg-[color:var(--champagne)]/5 p-4 text-sm leading-7 text-white/62">
              <RefreshCw className="mt-1 h-4 w-4 shrink-0 text-[color:var(--champagne)]" />
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
