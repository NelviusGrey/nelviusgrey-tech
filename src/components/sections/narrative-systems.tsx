"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import { BrandPhoto } from "@/components/media/brand-photo";
import { processSteps } from "@/lib/constants";

export function BrandStatementSystem() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [70, -70]);
  const words = ["engineering", "data", "design"];
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} id="brand-statement" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
      <motion.div style={{ y: drift }} aria-hidden className="pointer-events-none absolute inset-x-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-green)]/60 to-transparent" />
      <div className="relative mx-auto max-w-[88rem]">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">A connected practice</p>
        <h2 className="mt-8 max-w-6xl font-display text-5xl font-light leading-[0.98] text-white sm:text-7xl lg:text-8xl">
          We turn complex problems into systems people can actually use.
        </h2>
        <div className="mt-14 grid gap-3 sm:grid-cols-3" role="list" aria-label="Our connected disciplines">
          {words.map((word, index) => (
            <button key={word} type="button" role="listitem" onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className="group relative min-h-24 overflow-hidden border border-white/10 px-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-green)]">
              <motion.span animate={{ x: active === index ? 12 : 0 }} className="relative z-10 font-display text-2xl capitalize text-white">{word}</motion.span>
              <motion.span aria-hidden animate={{ scaleX: active === index ? 1 : 0 }} className="absolute inset-y-0 left-0 w-full origin-left bg-[color:var(--brand-green)]/12" />
              <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/35">0{index + 1}</span>
            </button>
          ))}
        </div>
        <BrandPhoto
          mediaKey="engineeringWorkstation"
          className="mt-8 min-h-[28rem] sm:min-h-[36rem] lg:min-h-[42rem]"
          sizes="(max-width: 1024px) 100vw, 88rem"
        />
      </div>
    </section>
  );
}

export function ProcessJourney() {
  const [active, setActive] = useState(0);
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">Operating philosophy</p>
          <h2 className="mt-6 font-display text-5xl font-light leading-none text-white sm:text-7xl">A system assembled with intent.</h2>
          <p className="mt-6 max-w-xl leading-7 text-white/60">Move through the path from uncertainty to a working system. Each stage resolves a different kind of risk.</p>
        </div>
        <div className="relative border-l border-white/10 pl-6 sm:pl-10">
          <motion.div aria-hidden animate={{ height: `${((active + 1) / processSteps.length) * 100}%` }} className="absolute -left-px top-0 w-px bg-[color:var(--brand-green)]" />
          {processSteps.map((step, index) => (
            <button key={step.title} type="button" onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className="relative block w-full border-b border-white/10 py-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-green)]">
              <span aria-hidden className={`absolute -left-[2.7rem] top-10 h-3 w-3 rounded-full border sm:-left-[3.15rem] ${index <= active ? "border-[color:var(--brand-green)] bg-[color:var(--brand-green)]" : "border-white/25 bg-[color:var(--obsidian)]"}`} />
              <span className="font-mono text-xs text-[color:var(--brand-green)]">0{index + 1}</span>
              <span className="mt-3 block font-display text-3xl text-white sm:text-4xl">{step.title}</span>
              <motion.span initial={false} animate={{ height: active === index ? "auto" : 0, opacity: active === index ? 1 : 0 }} className="block overflow-hidden">
                <span className="block max-w-2xl pt-4 leading-7 text-white/60">{step.text}</span>
              </motion.span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
