"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { workCases, workFilters, type WorkFilter } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WorkFilter() {
  const [filter, setFilter] = useState<WorkFilter>("All");
  const visible =
    filter === "All" ? workCases : workCases.filter((item) => item.filters.some((itemFilter) => itemFilter === filter));

  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {workFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
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

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item, index) => (
          <Link
            prefetch={false}
            key={item.slug}
            href={`/work/${item.slug}`}
            className={cn(
              "group relative min-h-[28rem] overflow-hidden border border-white/10 bg-[#070908] p-5 transition duration-500 hover:-translate-y-1 hover:border-[color:var(--brand-green)]/45",
              index === 0 && "md:col-span-2",
            )}
          >
            <Image
              src={item.image}
              alt={`${item.title} conceptual visual`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              className="object-cover opacity-[0.42] transition duration-700 group-hover:scale-105 group-hover:opacity-[0.58]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-[#030504]/70 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-green)]">
                  {item.category}
                </p>
                <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/52">
                  Concept / Direction
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl font-light tracking-[-0.06em] text-white sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/64">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.capabilities.map((capability) => (
                    <span key={capability} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/54">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
