"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect } from "react";

export function Spotlight() {
  const mouseX = useMotionValue("50%");
  const mouseY = useMotionValue("50%");
  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX} ${mouseY}, rgba(255, 255, 255, 0.045), transparent 40%)`;

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      mouseX.set(`${event.clientX}px`);
      mouseY.set(`${event.clientY}px`);
    };

    const updateCellGlow = (event: PointerEvent) => {
      const cell = (event.target as HTMLElement).closest<HTMLElement>(".cell");
      if (!cell) return;

      const rect = cell.getBoundingClientRect();
      cell.style.setProperty("--cx", `${event.clientX - rect.left}px`);
      cell.style.setProperty("--cy", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("pointermove", updatePointer);
    document.addEventListener("pointermove", updateCellGlow);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      document.removeEventListener("pointermove", updateCellGlow);
    };
  }, [mouseX, mouseY]);

  return <motion.div className="spotlight" style={{ background }} aria-hidden="true" />;
}
