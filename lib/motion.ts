import type { Transition, Variants } from "motion/react";

/**
 * Motion Tokens System for 20/10 Celebration Website
 * Crafted according to Motion best practices
 * Designed & Created by Hàn Nhật Ninh
 */

// Spring physics configurations
export const springs = {
  /** Soft, elegant spring for cards, dialogs and text */
  gentle: {
    type: "spring",
    stiffness: 120,
    damping: 14,
    mass: 0.9,
  } as Transition,

  /** Bouncy spring for micro-interactions, buttons and petals pop */
  bouncy: {
    type: "spring",
    stiffness: 260,
    damping: 16,
    mass: 0.8,
  } as Transition,

  /** Flower bloom spring: lively petal opening with natural elasticity */
  bloom: {
    type: "spring",
    stiffness: 180,
    damping: 12,
    mass: 0.7,
  } as Transition,

  /** Smooth spring for swipe gestures and dragged cards */
  swipe: {
    type: "spring",
    stiffness: 280,
    damping: 24,
    mass: 1.0,
  } as Transition,

  /** Floating ambient drift */
  float: {
    type: "spring",
    stiffness: 40,
    damping: 10,
  } as Transition,
};

// Durations (in seconds)
export const durations = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.4,
  slow: 0.7,
  deliberate: 1.2,
};

// Easing curves (hardware accelerated cubic-bezier)
export const easings = {
  outCubic: [0.33, 1, 0.68, 1] as [number, number, number, number],
  inOutCubic: [0.65, 0, 0.35, 1] as [number, number, number, number],
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  softBounce: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};

// Stagger timing tokens
export const staggers = {
  letters: 0.03,
  words: 0.06,
  cards: 0.1,
  petals: 0.05,
};

// Reusable standard variants
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: durations.fast, ease: easings.outCubic },
  },
};

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springs.bloom,
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: durations.fast },
  },
};

export const envelopeFlapVariants: Variants = {
  closed: {
    rotateX: 0,
    transition: { duration: durations.slow, ease: easings.inOutCubic },
  },
  open: {
    rotateX: 180,
    transition: { duration: durations.slow, ease: easings.outCubic },
  },
};

export const letterSlideVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.gentle,
      delay: 0.25,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.cards,
      delayChildren: 0.1,
    },
  },
};
