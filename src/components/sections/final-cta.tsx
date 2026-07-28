"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

import { MagneticLink } from "@/components/animations/magnetic-link";
import { BrandMark } from "@/components/ui/brand-mark";
import { HoneycombNetwork } from "@/components/visual/honeycomb-network";
import { siteConfig } from "@/lib/constants";
import { motionTokens } from "@/lib/motion";

export function FinalCta() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const x = useSpring(pointerX, motionTokens.spring.gentle);
  const y = useSpring(pointerY, motionTokens.spring.gentle);
  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(circle at ${latestX}% ${latestY}%, rgba(71,255,133,.34) 0, rgba(0,204,72,.22) 9rem, rgba(0,164,56,.12) 20rem, transparent 38rem)`,
  );

  function handlePointer(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section onPointerMove={handlePointer} className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden border border-[color:var(--brand-green)]/24 bg-[#050705] shadow-[var(--shadow-deep)]">
        <motion.div aria-hidden style={{ background }} className="pointer-events-none absolute inset-0 mix-blend-screen" />
        <HoneycombNetwork activeIndex={4} className="absolute inset-0 min-h-0 border-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050705]/50 to-[#050705]" />
        <div className="travelling-line absolute inset-x-0 top-0 h-px" />
        <div className="relative grid min-h-[34rem] p-8 sm:p-12 lg:grid-cols-[1fr_18rem] lg:p-16">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-4"><BrandMark compact /><span className="h-px flex-1 bg-gradient-to-r from-[color:var(--brand-green)]/50 to-transparent" /></div>
            <div className="py-16 lg:py-20">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">Signal received / next system</p>
              <h2 className="mt-5 max-w-4xl font-display text-5xl font-light leading-[0.96] text-white sm:text-7xl lg:text-8xl">Bring us the problem worth solving.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">We will help turn operational pressure, scattered data or an ambitious idea into a practical digital system.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <MagneticLink data-cursor="Start" href="/contact" className="premium-button inline-flex h-13 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-7 text-sm font-semibold text-[#021008]">Start a Project <ArrowRight className="h-4 w-4" /></MagneticLink>
              <MagneticLink data-cursor="Chat" href={siteConfig.links.whatsapp} external className="button-outline-sweep inline-flex h-13 items-center justify-center gap-2 rounded-md border border-white/15 px-7 text-sm font-semibold text-white hover:border-[color:var(--brand-green)]/50">Chat on WhatsApp <MessageCircle className="h-4 w-4" /></MagneticLink>
            </div>
          </div>
          <div aria-hidden className="relative hidden border-l border-white/10 lg:block">
            {[0, 1, 2, 3, 4].map((index) => <motion.span key={index} animate={reduced ? undefined : { opacity: [0.18, 0.8, 0.18], scale: [0.8, 1.15, 0.8] }} transition={{ duration: 3.2, delay: index * 0.38, repeat: Infinity }} className="absolute left-1/2 h-2 w-2 rounded-full bg-[color:var(--brand-green)]" style={{ top: `${12 + index * 18}%`, marginLeft: index % 2 ? 34 : -38 }} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
