"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || !ref.current) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(current) {
        if (ref.current) {
          ref.current.textContent = `${Math.round(current).toLocaleString()}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, suffix, value]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
