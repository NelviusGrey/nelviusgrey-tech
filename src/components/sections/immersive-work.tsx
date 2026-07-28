"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Fingerprint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const proof = [
  ["FINZ / FINT", "Climate intelligence platform"],
  ["ShapBill", "Invoicing and billing product"],
  ["Nelvius Bank", "Digital banking platform"],
  ["Exports Royale", "Trade and export experience"],
  ["Excel Expert", "Service business experience"],
] as const;

const showcases = [
  { name: "FINZ / FINT", type: "Platform", copy: "Climate intelligence for a resilient future.", image: "/images/work/finz-fint/portfolio-overview-dark.png", href: "/work/finz-fint-climate-finance-platform" },
  { name: "ShapBill", type: "Product", copy: "Modern invoicing made effortless.", image: "/images/work/shapbill/desktop-dashboard.png", href: "/work/shapbill" },
  { name: "Nelvius Bank", type: "Product", copy: "Digital banking, reimagined.", image: "/images/work/nelvius-bank/mobile-features.png", href: "/work/nelvius-bank" },
] as const;

export function ImmersiveWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(1);
  const pointerX = useMotionValue(68);
  const pointerY = useMotionValue(34);
  const x = useSpring(pointerX, { stiffness: 100, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 100, damping: 24 });
  const glow = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(circle at ${latestX}% ${latestY}%, rgba(0,164,56,.16), transparent 26rem)`,
  );
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const cardDrift = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [70, -54]);

  return (
    <section
      ref={sectionRef}
      id="featured-work"
      onPointerMove={(event) => {
        if (reduced || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
      }}
      className="relative overflow-hidden bg-[#020504] px-4 pb-28 pt-12 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,164,56,.12),transparent_32rem)]" />
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0 mix-blend-screen" />
      <div className="relative mx-auto max-w-[88rem]">
        <div className="grid border border-white/10 bg-[#07100b]/75 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1.15fr_repeat(5,1fr)]">
          <div className="flex min-h-24 items-center gap-4 border-b border-r border-white/10 px-6 sm:col-span-2 lg:col-span-1 lg:border-b-0">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#00a438]/30 text-[#00a438]">
              <Fingerprint className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="font-mono text-[.62rem] uppercase leading-5 tracking-[.22em] text-white/58">Trusted to build<br />what matters</p>
          </div>
          {proof.map(([name, detail], index) => (
            <motion.div
              key={name}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="border-b border-r border-white/10 px-5 py-5 last:border-r-0 sm:border-b-0"
            >
              <p className="font-display text-lg text-[#e9dfc2]">{name}</p>
              <p className="mt-1 text-xs leading-5 text-white/40">{detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[.24fr_.76fr] lg:items-start">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="pt-5"
          >
            <p className="font-mono text-[.64rem] uppercase tracking-[.25em] text-[#00a438]">Featured work</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.02] text-[#f3f0e8] sm:text-5xl">Digital products.<br />Real impact.</h2>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/48">A selection of systems we have designed and built for forward-thinking organisations.</p>
            <Link href="/work" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#00a438]">Explore all projects <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>

          <motion.div
            style={{ y: cardDrift }}
            className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-8 pt-6 lg:-mr-20 lg:overflow-visible"
          >
            {showcases.map((item, index) => (
              <motion.article
                key={item.name}
                initial={reduced ? false : { opacity: 0, y: 48, rotateY: -4 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                whileHover={reduced ? undefined : { y: -14, scale: 1.015 }}
                onPointerEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                transition={{ delay: index * 0.08, duration: .58, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative min-h-[34rem] min-w-[82%] snap-center overflow-hidden border bg-[#07130d] shadow-[0_34px_90px_rgba(0,0,0,.46)] sm:min-w-[48%] lg:min-w-0 lg:flex-1 ${index === 1 ? "lg:-mt-8 lg:z-10" : ""} ${active === index ? "border-[color:var(--brand-green)]/42" : "border-white/10"}`}
              >
                <div className="p-5 sm:p-7"><p className="font-mono text-[.58rem] uppercase tracking-[.22em] text-white/38">{item.type}</p><h3 className="mt-4 font-display text-3xl font-light text-[#f3f0e8]">{item.name}</h3><p className="mt-2 text-sm text-white/48">{item.copy}</p></div>
                <div className="absolute inset-x-5 bottom-5 top-[10.5rem] overflow-hidden border border-white/8 bg-black/40">
                  <Image src={item.image} alt={`${item.name} product interface`} fill unoptimized sizes="(max-width: 1024px) 75vw, 24vw" className="object-cover object-left-top opacity-72 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041008] via-transparent to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[color:var(--brand-green)] transition-transform duration-500 group-hover:scale-x-100" />
                <Link data-cursor="View" href={item.href} aria-label={`View ${item.name} case study`} className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[color:var(--brand-green)]" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
