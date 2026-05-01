"use client";

import { motion } from "motion/react";

export function MotionPulse() {
  return (
    <motion.span
      className="pulse"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(78, 211, 122, 0.6)",
          "0 0 0 10px rgba(78, 211, 122, 0)",
          "0 0 0 0 rgba(78, 211, 122, 0)",
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
