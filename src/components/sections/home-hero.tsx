"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MagneticLink } from "@/components/animations/magnetic-link";
import { MaskedText } from "@/components/animations/masked-text";
import { LogoOrganism } from "@/components/sections/logo-organism";
import { capabilityTicker } from "@/lib/constants";

const DynamicHeroSculpture = dynamic(
  () => import("@/components/visual/hero-sculpture").then((module) => module.HeroSculpture),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-[34rem] place-items-center border border-[color:var(--line-green)] bg-[color:var(--carbon)]/70">
        <LogoOrganism />
      </div>
    ),
  },
);

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const [light, setLight] = useState({ x: 72, y: 28 });
  const [showDesktopSculpture, setShowDesktopSculpture] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowDesktopSculpture(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8"
      onPointerMove={(event) => {
        if (prefersReducedMotion) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        setLight({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <div className="royal-canopy nature-drift absolute inset-0 -z-20 opacity-[0.32]" />
      <div className="topographic-lines absolute inset-0 -z-20 opacity-50" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(0,164,56,0.18), transparent 32rem), linear-gradient(180deg, rgba(3,5,4,0.2), #030504 74%)`,
        }}
      />
      <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-[88rem] items-start gap-10 pt-12 sm:pt-16 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:pt-0">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]"
          >
            The Royal Intelligence Network - Lagos / Global
          </motion.p>
          <h1 className="mt-6 max-w-6xl font-display text-6xl font-light leading-[0.93] tracking-normal text-white/95 sm:text-7xl lg:text-8xl xl:text-9xl">
            <MaskedText text="Technology for Change." as="span" className="flex flex-wrap" />
            <MaskedText text="Systems for the Future." as="span" className="mt-1 flex flex-wrap text-white/82" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
          >
            Digital products, data platforms and intelligent infrastructure for
            organisations building a better future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.64, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl overflow-hidden border-y border-white/10 py-3"
          >
            <div className="marquee-track flex w-max gap-8">
              {[...capabilityTicker, ...capabilityTicker].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="font-mono text-xs uppercase tracking-[0.26em] text-white/44"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-start gap-3 sm:flex-row"
          >
            <MagneticLink
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:shadow-[0_0_34px_var(--brand-glow)]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </MagneticLink>
            <Link
              prefetch={false}
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/14 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50"
            >
              Explore Our Work
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.86, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex justify-center lg:hidden"
            aria-hidden="true"
          >
            <LogoOrganism />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex lg:justify-end"
        >
          {showDesktopSculpture && <DynamicHeroSculpture />}
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
