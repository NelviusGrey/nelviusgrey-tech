"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

import { LogoOrganism } from "@/components/sections/logo-organism";

export function HomeHero() {
  const lines = ["Technology for Change.", "Systems for the Future."];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(0,164,56,0.14),transparent_28%)]" />
      <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-[88rem] items-start gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]"
          >
            NELVIUSGREY TECH - LAGOS / GLOBAL
          </motion.p>
          <h1 className="mt-6 font-display text-[clamp(3.6rem,9vw,8.8rem)] font-light leading-[0.9] tracking-[-0.085em] text-white/95">
            {lines.map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0.18, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.1, duration: 0.7, ease: "easeOut" }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            Digital products, data platforms and intelligent infrastructure for
            organisations building a better future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.75 }}
            className="mt-10 flex flex-col items-start gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_var(--brand-glow)]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/14 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="hidden lg:flex lg:justify-end"
        >
          <LogoOrganism />
        </motion.div>
      </div>

      <motion.a
        href="#brand-statement"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-white/42 transition hover:text-white md:flex"
      >
        Scroll to explore
        <ArrowDown className="h-4 w-4 text-[color:var(--brand-green)]" />
      </motion.a>
    </section>
  );
}
