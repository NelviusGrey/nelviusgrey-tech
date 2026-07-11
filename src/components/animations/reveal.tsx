"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

import { cardReveal, sectionReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  variant?: "section" | "card";
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "section",
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = variant === "card" ? cardReveal : sectionReveal;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};
