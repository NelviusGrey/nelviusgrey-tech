"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type HoneycombNetworkProps = {
  activeIndex?: number;
  className?: string;
  compact?: boolean;
};

function hexPoints(cx: number, cy: number, radius: number) {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 3) * index + Math.PI / 6;
    return `${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`;
  }).join(" ");
}

export function HoneycombNetwork({
  activeIndex = 0,
  className,
  compact = false,
}: HoneycombNetworkProps) {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const cells = useMemo(() => {
    const rows = compact ? 4 : 6;
    const cols = compact ? 5 : 8;
    const radius = compact ? 37 : 42;

    return Array.from({ length: rows }).flatMap((_, row) =>
      Array.from({ length: cols }).map((__, col) => {
        const x = 70 + col * radius * 1.52 + (row % 2 ? radius * 0.76 : 0);
        const y = 58 + row * radius * 1.32;
        const index = row * cols + col;

        return {
          index,
          x,
          y,
          points: hexPoints(x, y, radius),
          active: (index + activeIndex) % 7 === 0 || index === activeIndex + 3,
        };
      }),
    );
  }, [activeIndex, compact]);

  return (
    <div
      className={cn(
        "relative min-h-[22rem] overflow-hidden border border-white/10 bg-[color:var(--carbon)]/72",
        className,
      )}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(0, 164, 56, 0.16), transparent 24rem)`,
        }}
      />
      <svg
        viewBox={compact ? "0 0 520 340" : "0 0 880 460"}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Decorative honeycomb intelligence network"
      >
        <defs>
          <linearGradient id="honey-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(0,164,56,0)" />
            <stop offset="48%" stopColor="rgba(0,164,56,0.76)" />
            <stop offset="100%" stopColor="rgba(0,164,56,0)" />
          </linearGradient>
        </defs>
        <g>
          {cells.map((cell) => (
            <motion.polygon
              key={cell.index}
              points={cell.points}
              fill={cell.active ? "rgba(0,164,56,0.055)" : "rgba(255,255,255,0.012)"}
              stroke={cell.active ? "rgba(0,164,56,0.45)" : "rgba(245,242,234,0.09)"}
              strokeWidth={cell.active ? 1.25 : 0.75}
              initial={false}
              animate={{
                opacity: cell.active ? 1 : 0.46,
                scale: cell.active ? 1.01 : 1,
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </g>
        <motion.path
          d={compact ? "M44 244 C140 152 236 286 332 136 S474 118 506 56" : "M58 342 C200 210 320 406 482 190 S736 146 828 58"}
          fill="none"
          stroke="url(#honey-line)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.82 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.8,
            ease: [0.22, 1, 0.36, 1],
            repeat: prefersReducedMotion ? 0 : Infinity,
            repeatType: "reverse",
            repeatDelay: 2.2,
          }}
        />
        {cells
          .filter((cell) => cell.active)
          .slice(0, 9)
          .map((cell, index) => (
            <motion.circle
              key={`node-${cell.index}`}
              cx={cell.x}
              cy={cell.y}
              r={index % 3 === 0 ? 4.2 : 3}
              fill={index % 4 === 0 ? "var(--champagne)" : "var(--brand-green)"}
              initial={false}
              animate={{ opacity: [0.24, 1, 0.24], scale: [0.86, 1.18, 0.86] }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3.2 + index * 0.15,
                repeat: prefersReducedMotion ? 0 : Infinity,
                delay: index * 0.08,
              }}
            />
          ))}
      </svg>
      <div className="absolute left-5 top-5 font-mono text-[0.62rem] uppercase tracking-[0.26em] text-white/28">
        NGX / intelligence lattice
      </div>
      <div className="absolute bottom-5 right-5 font-mono text-[0.62rem] uppercase tracking-[0.26em] text-[color:var(--champagne)]/34">
        Active node {String(activeIndex + 1).padStart(2, "0")}
      </div>
    </div>
  );
}
