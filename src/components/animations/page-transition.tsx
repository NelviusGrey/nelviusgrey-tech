"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { pageVariants } from "@/lib/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div initial={prefersReducedMotion ? false : "hidden"} animate="visible" variants={pageVariants}>
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[70] h-px w-full origin-left bg-[color:var(--brand-green)] shadow-[0_0_24px_var(--emerald-bloom)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      {children}
    </motion.div>
  );
}
