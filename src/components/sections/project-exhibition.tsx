"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { workCases, workFilters, type WorkFilter } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProjectExhibition({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<WorkFilter>("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? workCases
        : workCases.filter((item) => item.filters.some((itemFilter) => itemFilter === filter)),
    [filter],
  );
  const [activeSlug, setActiveSlug] = useState(visible[0]?.slug ?? workCases[0].slug);
  const active = visible.find((item) => item.slug === activeSlug) ?? visible[0] ?? workCases[0];
  const activeIndex = workCases.findIndex((item) => item.slug === active.slug);

  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {workFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setFilter(item);
              const next =
                item === "All"
                  ? workCases[0]
                  : workCases.find((workCase) => workCase.filters.some((itemFilter) => itemFilter === item));
              setActiveSlug(next?.slug ?? workCases[0].slug);
            }}
            className={cn(
              "shrink-0 rounded-md border px-4 py-2 text-sm font-medium transition",
              filter === item
                ? "border-[color:var(--brand-green)] bg-[color:var(--brand-green-soft)] text-white"
                : "border-white/10 bg-white/[0.03] text-white/58 hover:text-white",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="grid gap-2">
            {visible.map((item) => {
              const selected = item.slug === active.slug;
              const originalIndex = workCases.findIndex((workCase) => workCase.slug === item.slug);

              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveSlug(item.slug)}
                  onMouseEnter={() => setActiveSlug(item.slug)}
                  className={cn(
                    "group grid grid-cols-[3rem_1fr] gap-4 border px-4 py-4 text-left transition duration-300",
                    selected
                      ? "border-[color:var(--line-green)] bg-[color:var(--brand-green-soft)]"
                      : "border-white/10 bg-white/[0.025] hover:border-white/24",
                  )}
                  aria-pressed={selected}
                >
                  <span className="font-mono text-xs text-[color:var(--brand-green)]">
                    {String(originalIndex + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-light leading-tight tracking-normal text-white">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-white/38">
                      {item.category}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={active.slug}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="technical-frame overflow-hidden border border-white/10 bg-[color:var(--carbon)]/82"
          >
            <div className="relative min-h-[25rem] overflow-hidden sm:min-h-[34rem]">
              <Image
                src={active.image}
                alt={`${active.title} conceptual visual`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                unoptimized
                className="object-cover opacity-[0.48]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--obsidian)] via-[rgba(3,5,4,0.72)] to-transparent" />
              <div className="absolute left-5 top-5 rounded-sm border border-white/10 bg-black/40 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/58">
                Concept / Direction
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-[color:var(--brand-green)]">
                  Case {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 max-w-4xl font-display text-4xl font-light leading-tight tracking-normal text-white sm:text-6xl">
                  {active.title}
                </h3>
              </div>
            </div>

            <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-base leading-8 text-white/68">{active.summary}</p>
                {!compact && <p className="mt-5 text-sm leading-7 text-white/54">{active.challenge}</p>}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Capabilities involved</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.capabilities.map((capability) => (
                    <span key={capability} className="border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-white/54">
                      {capability}
                    </span>
                  ))}
                </div>
                <Link
                  prefetch={false}
                  href={`/work/${active.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-green)]"
                >
                  Open case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
