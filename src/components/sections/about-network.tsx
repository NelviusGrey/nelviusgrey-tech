"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const territories = [
  { key: "People", title: "Human context first", copy: "We begin with the people doing the work, the decisions they face and the realities the system must respect.", tag: "Discovery" },
  { key: "Products", title: "Useful by design", copy: "We turn complex requirements into products that feel clear, capable and natural in everyday use.", tag: "Experience" },
  { key: "Data", title: "Evidence people can trust", copy: "We structure information so teams can understand performance, act confidently and explain what changed.", tag: "Intelligence" },
  { key: "Climate", title: "Context-rich intelligence", copy: "We connect climate signals with finance, place, exposure and institutional decision-making.", tag: "ClimateTech" },
  { key: "Systems", title: "Built to remain useful", copy: "Architecture, workflows and handover are designed for life after launch—not only the launch itself.", tag: "Engineering" },
] as const;

export function AboutNetwork() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const selected = territories[active];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden border border-white/10 bg-[#050806]/86 px-5 py-8 shadow-[0_40px_140px_rgba(0,0,0,.45)] sm:p-10 lg:p-14">
        <div className="topographic-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--brand-green)]/5 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--brand-green)]">Living network / how we think</p>
            <h2 className="mt-5 font-display text-5xl font-light leading-[.96] tracking-[-.035em] text-white sm:text-6xl">Connected thinking.<br /><span className="italic text-white/52">Useful outcomes.</span></h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/56">NelviusGrey works where people, products, data, climate and durable technology meet. Select a territory to explore the relationship.</p>
            <AnimatePresence mode="wait">
              <motion.div key={selected.key} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduced ? 0 : .4 }} className="mt-8 border-l border-[color:var(--brand-green)] pl-5">
                <span className="font-mono text-[0.62rem] uppercase tracking-[.24em] text-[color:var(--champagne)]">{selected.tag}</span>
                <h3 className="mt-2 text-xl font-semibold text-white">{selected.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-7 text-white/55">{selected.copy}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative min-h-[34rem]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 520" fill="none" aria-hidden="true">
              {[[350,260,110,90],[350,260,575,110],[350,260,590,390],[350,260,170,430],[350,260,85,235]].map((line, index) => (
                <motion.line key={index} x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke={active === index ? "#00a438" : "rgba(245,242,234,.14)"} strokeWidth={active === index ? 2 : 1} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1.1, delay: index * .08 }} />
              ))}
              <circle cx="350" cy="260" r="84" stroke="rgba(0,164,56,.25)" />
              <circle cx="350" cy="260" r="108" stroke="rgba(0,164,56,.10)" strokeDasharray="3 8" />
            </svg>
            <div className="pulse-node absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color:var(--brand-green)]/50 bg-[#07140b] shadow-[0_0_70px_rgba(0,164,56,.25)]">
              <span className="font-display text-2xl text-[color:var(--brand-green)]">NG</span>
            </div>
            {territories.map((item, index) => {
              const positions = ["left-[8%] top-[7%]", "right-[1%] top-[12%]", "right-0 bottom-[5%]", "left-[14%] bottom-0", "left-0 top-[40%]"];
              return <button key={item.key} type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`absolute ${positions[index]} min-w-32 border px-4 py-4 text-left backdrop-blur-md transition duration-300 ${active === index ? "scale-105 border-[color:var(--brand-green)] bg-[rgba(0,164,56,.13)] shadow-[0_0_35px_rgba(0,164,56,.14)]" : "border-white/12 bg-black/45 hover:border-white/30"}`}>
                <span className="block font-mono text-[.58rem] text-[color:var(--champagne)]">0{index + 1}</span><span className="mt-2 block text-sm font-semibold text-white">{item.key}</span>
              </button>;
            })}
          </div>
        </div>
        <div className="relative mt-8 flex justify-end border-t border-white/10 pt-6"><Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-green)]">See the systems in practice <ArrowUpRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}
