"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { sectorSolutions, type SectorSolution } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SectorSwitcher() {
  const [activeSlug, setActiveSlug] = useState<SectorSolution["slug"]>(sectorSolutions[0].slug);
  const active = sectorSolutions.find((sector) => sector.slug === activeSlug) ?? sectorSolutions[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <div className="grid gap-2">
        {sectorSolutions.map((sector, index) => {
          const selected = sector.slug === activeSlug;

          return (
            <button
              key={sector.slug}
              type="button"
              onClick={() => setActiveSlug(sector.slug)}
              className={cn(
                "group flex items-center justify-between border border-white/10 bg-white/[0.025] px-4 py-4 text-left transition hover:border-white/24",
                selected && "border-[color:var(--brand-green)]/45 bg-[color:var(--brand-green-soft)]",
              )}
              aria-pressed={selected}
            >
              <span className="font-display text-xl font-light tracking-[-0.04em] text-white">
                {sector.title}
              </span>
              <span className="font-mono text-xs text-white/38">{String(index + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={active.slug}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden border border-white/10 bg-[#070908]/78 p-6 sm:p-8"
      >
        <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-[color:var(--brand-green)]/10 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-green)]">
          Sector intelligence
        </p>
        <h3 className="mt-5 font-display text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
          {active.title}
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">{active.challenge}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">Pain points</p>
            <ul className="mt-4 grid gap-2 text-sm text-white/56">
              {active.painPoints.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Solution types</p>
            <ul className="mt-4 grid gap-2 text-sm text-white/56">
              {active.solutionTypes.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Example workflow</p>
            <p className="mt-4 text-sm leading-7 text-white/56">{active.workflow}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/42">{active.visual}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-green)]">
            Discuss this sector
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
