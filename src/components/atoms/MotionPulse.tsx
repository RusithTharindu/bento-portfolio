"use client";

import { motion } from "motion/react";

export function MotionPulse() {
  return (
    <motion.span
      className="pulse"
      animate={{
        boxShadow: [
          "0 0 0 0 color-mix(in oklab, var(--ok), transparent 40%)",
          "0 0 0 10px color-mix(in oklab, var(--ok), transparent 100%)",
          "0 0 0 0 color-mix(in oklab, var(--ok), transparent 100%)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}
