"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[85] origin-top bg-[#031008]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.58, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
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
