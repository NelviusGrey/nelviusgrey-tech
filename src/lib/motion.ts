import type { Variants } from "framer-motion";

export const motionTokens = {
  ease: [0.22, 1, 0.36, 1],
  precise: [0.16, 1, 0.3, 1],
  duration: {
    fast: 0.28,
    base: 0.58,
    slow: 0.92,
    scene: 1.18,
  },
  stagger: {
    word: 0.045,
    card: 0.08,
    line: 0.12,
  },
  spring: {
    responsive: { stiffness: 260, damping: 28, mass: 0.7 },
    gentle: { stiffness: 120, damping: 24, mass: 0.9 },
  },
  depth: { hover: 8, parallax: 72 },
  glow: { quiet: 0.18, active: 0.42 },
} as const;

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.ease,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.ease,
    },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease,
    },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.precise,
    },
  },
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    clipPath: "inset(16% 0% 16% 0%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: motionTokens.duration.scene,
      ease: motionTokens.ease,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.card,
      delayChildren: 0.08,
    },
  },
};

export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.word,
      delayChildren: 0.04,
    },
  },
};

export const wordReveal: Variants = {
  hidden: { y: "112%", opacity: 0.2 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease,
    },
  },
};

export const menuPanel: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.ease,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.precise,
    },
  },
};

export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: motionTokens.duration.scene,
        ease: motionTokens.ease,
      },
      opacity: {
        duration: motionTokens.duration.fast,
      },
    },
  },
};
