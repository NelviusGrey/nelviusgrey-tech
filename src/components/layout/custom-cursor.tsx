"use client";

import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 520, damping: 38, mass: 0.28 });
  const smoothY = useSpring(y, { stiffness: 520, damping: 38, mass: 0.28 });
  const [supported, setSupported] = useState(false);
  const [inside, setInside] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const precise = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!precise || reduced || navigator.hardwareConcurrency < 4) return;

    const move = (event: PointerEvent) => {
      setSupported(true);
      x.set(event.clientX);
      y.set(event.clientY);
      setInside(true);
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor]") : null;
      setLabel(target?.dataset.cursor ?? "");
    };
    const leave = () => setInside(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [reduced, x, y]);

  if (!supported) return null;

  return (
    <AnimatePresence>
      {inside && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[110] grid place-items-center"
          style={{ x: smoothX, y: smoothY }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: label ? 1 : 0.7 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <motion.div
            animate={{ width: label ? 68 : 28, height: label ? 68 : 28 }}
            className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--brand-green)]/70 bg-[#031008]/80 shadow-[0_0_30px_rgba(0,164,56,.28)] backdrop-blur-md"
          />
          {label && (
            <span className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[0.52rem] uppercase tracking-[0.12em] text-white">
              {label}
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
