"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export function LogoOrganism({ className = "" }: { className?: string }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 22 });
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);

  const ridges = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        id: index,
        offset: index * 34,
        delay: index * 0.08,
      })),
    [],
  );

  return (
    <motion.div
      className={`relative aspect-square w-full max-w-[34rem] ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,164,56,0.26),transparent_48%)] blur-xl" />
      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ridge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00a438" stopOpacity="0.1" />
            <stop offset="48%" stopColor="#00a438" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f5f2ea" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        {ridges.map((ridge) => (
          <motion.path
            key={ridge.id}
            d={`M ${95 + ridge.offset * 0.12} ${410 - ridge.offset * 0.45}
              C ${130 + ridge.offset * 0.3} ${260 - ridge.offset * 0.12},
                ${250 + ridge.offset * 0.18} ${150 - ridge.offset * 0.18},
                ${374 + ridge.offset * 0.06} ${178 + ridge.offset * 0.32}
              C ${500 - ridge.offset * 0.18} ${210 + ridge.offset * 0.5},
                ${485 - ridge.offset * 0.08} ${410 + ridge.offset * 0.16},
                ${332 - ridge.offset * 0.2} ${500 - ridge.offset * 0.03}`}
            fill="none"
            stroke="url(#ridge)"
            strokeWidth="7"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0.92], opacity: [0, 0.92, 0.74] }}
            transition={{
              duration: 3.8,
              delay: ridge.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/brand/logo-mark.png" alt="" fill sizes="112px" className="object-contain opacity-[0.7]" />
      </motion.div>
      <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-2">
        {["DATA", "SYSTEMS", "IMPACT"].map((label) => (
          <div key={label} className="border-t border-white/12 pt-2 font-mono text-[0.62rem] tracking-[0.24em] text-white/44">
            {label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
