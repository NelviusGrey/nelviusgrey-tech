"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { brandMedia, type BrandMediaKey } from "@/lib/brand-media";
import { cn } from "@/lib/utils";

const shapeClasses = {
  portrait: "rounded-[2.75rem_0.75rem_2.75rem_0.75rem]",
  technical: "[clip-path:polygon(0_0,94%_0,100%_14%,100%_100%,6%_100%,0_86%)]",
  editorial: "rounded-[0.75rem_5rem_0.75rem_0.75rem]",
  panorama: "rounded-[0.75rem_0.75rem_4rem_0.75rem]",
  infrastructure: "rounded-[4.5rem_0.75rem_0.75rem_0.75rem]",
} as const;

export function BrandPhoto({
  mediaKey,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  showCaption = true,
}: {
  mediaKey: BrandMediaKey;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  showCaption?: boolean;
}) {
  const media = brandMedia[mediaKey];
  const frameRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(useTransform(pointerY, [0, 100], [2.4, -2.4]), {
    stiffness: 140,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 100], [-3.2, 3.2]), {
    stiffness: 140,
    damping: 24,
  });
  const glare = useTransform(
    [pointerX, pointerY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(78,255,139,.2), transparent 24rem)`,
  );
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-4%", "4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [1.08, 1.025, 1.08]);

  return (
    <motion.figure
      ref={frameRef}
      initial={reduced ? false : { opacity: 0.72, scale: 0.985, y: 18 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: reduced ? 0.25 : 1.08, ease: [0.16, 1, 0.3, 1] }}
      style={
        reduced
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
      }
      onPointerMove={(event) => {
        if (reduced || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
      }}
      onPointerLeave={() => {
        pointerX.set(50);
        pointerY.set(50);
      }}
      className={cn(
        "group relative isolate overflow-hidden border border-white/10 bg-[#050806] shadow-[0_36px_100px_rgba(0,0,0,.46)]",
        shapeClasses[media.shape],
        className,
      )}
    >
      <motion.div
        initial={reduced ? false : { opacity: 0.78, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: reduced ? 0.2 : 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
        className="absolute -inset-y-[7%] inset-x-0"
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          loading={priority ? undefined : "eager"}
          sizes={sizes}
          className={cn(
            "object-cover saturate-[0.92] transition-[filter] duration-700 group-hover:saturate-110",
            imageClassName,
          )}
          style={{ objectPosition: media.objectPosition.desktop }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#020403]/90 via-transparent to-black/15" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,164,56,.14),transparent_34%,transparent_68%,rgba(199,185,138,.08))] opacity-70" />
      {!reduced && (
        <motion.div
          aria-hidden="true"
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 mix-blend-screen"
        />
      )}
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { x: "-120%" }}
        whileInView={reduced ? undefined : { x: "130%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {showCaption && (
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-2 border-t border-white/10 bg-black/38 p-5 backdrop-blur-md sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
            {media.label}
          </span>
          <span className="max-w-xl text-sm leading-6 text-white/68 sm:text-right">
            {media.caption}
          </span>
        </figcaption>
      )}
    </motion.figure>
  );
}
