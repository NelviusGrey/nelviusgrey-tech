"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { publicInsights as insights, siteConfig } from "@/lib/constants";

const disciplines = ["Digital products", "Data systems", "AI automation", "Social-impact technology"];

export function FounderSignal() {
  const [active, setActive] = useState(0);
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[88rem] overflow-hidden border-y border-white/10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[34rem] overflow-hidden bg-[#070908] lg:min-h-[44rem]">
          <Image src={siteConfig.brand.founderPhoto} alt="Ighere G. Nelson, Founder and Chief Innovation Technologist of NelviusGrey Tech" fill sizes="(max-width: 1024px) 100vw, 45vw" unoptimized className="object-contain object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">Profile signal / Lagos</p>
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">Founder / disciplines</p>
          <h2 className="mt-6 font-display text-5xl font-light text-white sm:text-7xl">Ighere G. Nelson</h2>
          <p className="mt-3 text-white/54">{siteConfig.founder.title}</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">A Computer Science graduate and technology builder working where product, data, automation and social impact meet.</p>
          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2">
            {disciplines.map((item, index) => (
              <button key={item} onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`min-h-20 bg-[#050705] p-4 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[color:var(--brand-green)] ${active === index ? "text-white" : "text-white/48"}`}>
                <span className="font-mono text-[10px] text-[color:var(--brand-green)]">0{index + 1}</span><span className="mt-2 block">{item}</span>
              </button>
            ))}
          </div>
          <Link prefetch={false} href="/about" className="mt-8 inline-flex w-fit border-b border-[color:var(--brand-green)] pb-1 text-sm font-semibold text-white">Read the founder story</Link>
        </div>
      </div>
    </section>
  );
}

export function InsightSignalRail() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const article = insights[active];
  return (
    <section className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[88rem]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">Editorial signal</p><h2 className="mt-5 max-w-3xl font-display text-5xl font-light leading-none text-white sm:text-7xl">Ideas for systems that survive beyond launch.</h2></div><Link href="/insights" className="w-fit border-b border-white/25 pb-1 text-sm text-white/70">Enter the newsroom</Link></div>
        <div className="mt-12 grid border border-white/10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="order-2 bg-[#050705] lg:order-1">
            {insights.slice(0, 3).map((item, index) => <button key={item.slug} onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`block w-full border-b border-white/10 p-6 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[color:var(--brand-green)] ${active === index ? "bg-white/[0.055]" : "bg-transparent"}`}><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--brand-green)]">{item.category} / {item.readingTime}</span><span className="mt-3 block font-display text-2xl text-white">{item.title}</span></button>)}
          </div>
          <Link href={`/insights/${article.slug}`} className="group relative order-1 min-h-[28rem] overflow-hidden lg:order-2">
            <motion.div key={article.slug} initial={reduced ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="absolute inset-0"><Image src={article.cover} alt={article.title} fill unoptimized sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover opacity-60 transition duration-700 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent" /></motion.div>
            <span className="absolute bottom-7 left-7 right-7 font-display text-3xl text-white sm:text-4xl">Read the full signal →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
