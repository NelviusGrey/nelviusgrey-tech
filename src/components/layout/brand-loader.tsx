"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LOADER_KEY = "nelviusgrey-intro-seen";

export function BrandLoader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced || sessionStorage.getItem(LOADER_KEY)) return;

    sessionStorage.setItem(LOADER_KEY, "true");
    const revealFrame = window.requestAnimationFrame(() => setVisible(true));
    const timer = window.setTimeout(() => setVisible(false), 1050);

    return () => {
      window.cancelAnimationFrame(revealFrame);
      window.clearTimeout(timer);
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-[#020504]"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="site-grid absolute inset-0 opacity-30" />
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid place-items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="absolute h-32 w-32 rounded-full border border-dashed border-[color:var(--brand-green)]/28"
            />
            <Image src="/brand/logo-mark.png" alt="" width={70} height={70} priority />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-white/52"
            >
              Intelligence by design
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-[color:var(--brand-green)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
