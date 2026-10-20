"use client";

import React from "react";
import { LazyMotion, MotionConfig, domMax } from "motion/react";

interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * Root Motion Provider
 * Configures reduced-motion user preference and domMax bundle chunk for drag & layout animations.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax} strict={false}>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
