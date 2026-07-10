"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { siteConfig, trustPoints } from "@/lib/constants";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden pt-28">
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=85"
        alt="Technology team collaborating around laptops and digital systems"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover opacity-[0.34]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030604_0%,rgba(3,6,4,0.88)_35%,rgba(3,6,4,0.54)_72%,#030604_100%)]" />
      <div className="absolute inset-0 site-grid opacity-[0.55]" />
      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] top-[22%] hidden h-72 w-72 rotate-45 border border-[color:var(--brand-green)]/20 lg:block"
        animate={{ y: [0, -16, 0], rotate: [45, 48, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[18%] right-[18%] hidden h-36 w-56 -rotate-12 border border-white/12 lg:block"
        animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-14 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <BrandMark className="mb-8" />
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-green)]">
            {siteConfig.tagline}
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building Intelligent Digital Systems for a Better Future.
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/72 sm:text-xl">
            NelviusGrey Tech designs websites, platforms, dashboards, automation tools,
            and custom IT infrastructure for businesses, NGOs, SMEs, government agencies,
            and impact-driven organizations.
          </p>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_var(--brand-glow)]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/14 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50 hover:bg-[color:var(--brand-green-soft)]"
            >
              Explore Our Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-md border border-white/10 bg-black/24 px-4 py-3 text-sm text-white/68 backdrop-blur"
            >
              <CircleCheck className="h-4 w-4 shrink-0 text-[color:var(--brand-green)]" />
              {point}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
