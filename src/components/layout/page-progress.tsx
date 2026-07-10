"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-px w-full origin-left bg-[color:var(--brand-green)]"
      style={{ scaleX }}
    />
  );
}
