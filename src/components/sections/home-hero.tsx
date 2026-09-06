"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { MagneticLink } from "@/components/animations/magnetic-link";
import { MaskedText } from "@/components/animations/masked-text";
import { LogoOrganism } from "@/components/sections/logo-organism";

const HeroSculpture = dynamic(
  () => import("@/components/visual/hero-sculpture").then((module) => module.HeroSculpture),
  { ssr: false },
);

const proof = [
  { name: "ShapBill", detail: "Business productivity", href: "/work/shapbill" },
  { name: "ShapBill", detail: "Invoicing product", href: "/work/shapbill" },
  { name: "Nelvius Bank", detail: "Digital banking", href: "/work/nelvius-bank" },
  { name: "Exports Royale", detail: "Trade enablement", href: "/work/exports-royale" },
  { name: "Excel Expert", detail: "Service experience", href: "/work/excel-expert-cleaning-services" },
] as const;

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [showSculpture, setShowSculpture] = useState(false);
  const pointerX = useMotionValue(64);
  const pointerY = useMotionValue(30);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.5 });
  const light = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(28,236,98,.22), transparent 25rem)`,
  );
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.15]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 115]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (min-height: 620px)");
    const update = () => setShowSculpture(media.matches && !reduced);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#020504] px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pt-28"
      onPointerMove={(event) => {
        if (reduced || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
      }}
    >
      <div className="royal-canopy nature-drift absolute inset-0 -z-30 opacity-[0.34]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#020504_0%,rgba(2,5,4,.96)_34%,rgba(2,5,4,.34)_72%,#020504_100%),linear-gradient(180deg,rgba(2,5,4,.1),#020504_92%)]" />
      <div className="site-grid absolute inset-0 -z-20 opacity-[0.22]" />
      <motion.div className="absolute inset-0 -z-10" style={{ background: light }} />
      <div className="pointer-events-none absolute inset-x-0 top-[18%] -z-10 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-green)]/20 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[88rem] flex-col">
        <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.04fr_.96fr] lg:py-4">
          <motion.div className="relative z-10" style={{ y: copyY, opacity: copyOpacity }}>
            <motion.p
              initial={reduced ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--brand-green)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-green)] shadow-[0_0_18px_var(--emerald-bloom)]" />
              African rooted. Globally minded.
            </motion.p>

            <h1 className="hero-headline mt-6 max-w-[49rem] font-display text-[clamp(3.35rem,6.3vw,7rem)] font-light leading-[0.91] tracking-[-0.052em] text-[#f3f0e8]">
              <MaskedText text="We build" as="span" className="flex flex-wrap" />
              <MaskedText
                text="intelligent"
                as="span"
                className="flex flex-wrap italic text-[color:var(--brand-green)]"
              />
              <MaskedText text="digital systems for" as="span" className="flex flex-wrap" />
              <MaskedText
                text="ambitious organisations."
                as="span"
                className="flex flex-wrap text-white/82"
              />
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-base leading-8 text-white/58 sm:text-lg"
            >
              We design and engineer secure digital products, data systems and intelligent workflows
              platforms and operational systems that turn complexity into clarity—and
              strategy into measurable impact.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <MagneticLink
                href="/contact"
                data-cursor="Start"
                className="premium-button group inline-flex h-13 items-center justify-center gap-3 rounded-md bg-[color:var(--brand-green)] px-7 text-sm font-semibold text-[#021008]"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticLink>
              <Link
                href="/work"
                data-cursor="Explore"
                className="button-outline-sweep group inline-flex h-13 items-center justify-center gap-3 rounded-md border border-white/16 px-7 text-sm font-semibold text-white/82"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82, duration: 0.6 }}
              className="mt-5 flex items-center gap-3 text-xs text-white/42"
            >
              <Link
                href="#selected-work"
                className="group inline-flex items-center gap-2 text-[color:var(--brand-green)]"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full border border-[color:var(--brand-green)]/50 transition group-hover:bg-[color:var(--brand-green)] group-hover:text-[#021008]">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                See how we work
              </Link>
              <span>2 min overview</span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={reduced ? false : { opacity: 0, scale: 0.94, rotate: -1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[27rem] lg:min-h-[39rem]"
          >
            <div className="absolute inset-[8%] rounded-full bg-[color:var(--brand-green)]/12 blur-3xl" />
            <div className="absolute inset-0">
              {showSculpture ? (
                <HeroSculpture />
              ) : (
                <div className="grid h-full min-h-[27rem] place-items-center">
                  <LogoOrganism />
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute -right-10 top-[16%] hidden h-px w-[72%] rotate-[-8deg] bg-gradient-to-r from-transparent via-[color:var(--champagne)]/38 to-transparent lg:block" />
            <p className="absolute bottom-[8%] right-[2%] hidden border-l border-[color:var(--champagne)]/30 pl-4 font-mono text-[0.6rem] uppercase leading-5 tracking-[0.24em] text-[color:var(--champagne)]/54 lg:block">
              Intelligence by design.
              <br />
              Impact by nature.
            </p>
          </motion.div>
        </div>

        <motion.div
          id="selected-work"
          initial={reduced ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 grid overflow-hidden rounded-xl border border-white/10 bg-[#06100b]/82 shadow-[0_28px_90px_rgba(0,0,0,.42)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1.1fr_repeat(5,1fr)]"
        >
          <div className="flex min-h-20 items-center gap-4 border-b border-r border-white/10 px-5 sm:col-span-2 lg:col-span-1 lg:border-b-0">
            <span className="h-9 w-9 rounded-full border border-[color:var(--brand-green)]/24 bg-[radial-gradient(circle,var(--brand-green)_0_2px,transparent_3px)] opacity-70" />
            <span className="font-mono text-[0.58rem] uppercase leading-5 tracking-[0.23em] text-white/48">
              Trusted to build
              <br />
              what matters
            </span>
          </div>
          {proof.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              data-cursor="View"
              className="proof-link group border-b border-r border-white/10 px-5 py-4 transition-colors hover:bg-[color:var(--brand-green)]/[0.07] sm:border-b-0"
            >
              <span className="block font-display text-base text-[#e9dfc2] transition-transform duration-300 group-hover:translate-x-1">
                {item.name}
              </span>
              <span className="mt-1 block text-[0.68rem] text-white/38">{item.detail}</span>
            </Link>
          ))}
        </motion.div>

        <a
          href="#featured-work"
          className="mx-auto mt-5 hidden items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-white/30 transition hover:text-white md:flex"
        >
          Scroll to explore
          <ArrowDown className="h-3.5 w-3.5 text-[color:var(--brand-green)]" />
        </a>
      </div>
    </section>
  );
}
