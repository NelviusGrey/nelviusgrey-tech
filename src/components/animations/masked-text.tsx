"use client";

import { motion, useReducedMotion } from "framer-motion";

import { wordContainer, wordReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function MaskedText({
  text,
  className,
  wordClassName,
  as = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: "span" | "h1" | "h2" | "p";
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];
  const words = text.split(" ");

  return (
    <MotionTag
      className={cn("inline-flex flex-wrap", className)}
      initial={prefersReducedMotion ? false : "hidden"}
      animate="visible"
      variants={wordContainer}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.24em] inline-block overflow-hidden pb-[0.08em]">
          <motion.span variants={wordReveal} className={cn("inline-block", wordClassName)}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
