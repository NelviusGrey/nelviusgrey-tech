"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
} & Omit<HTMLMotionProps<"a">, "href" | "children">;

export function MagneticLink({
  href,
  children,
  className,
  external = false,
  ...props
}: MagneticLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.28 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.28 });

  const events = prefersReducedMotion
    ? {}
    : {
        onPointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
          y.set((event.clientY - rect.top - rect.height / 2) * 0.26);
        },
        onPointerLeave() {
          x.set(0);
          y.set(0);
        },
      };

  const sharedClassName = cn(
    "will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-green)]",
    className,
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ x: springX, y: springY }}
        className={sharedClassName}
        {...events}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-flex">
      <Link prefetch={false} href={href} className={sharedClassName} {...events}>
        {children}
      </Link>
    </motion.div>
  );
}
