"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    const spotlight = document.querySelector<HTMLElement>(".spotlight");

    const updatePointer = (event: PointerEvent) => {
      spotlight?.style.setProperty("--mx", `${event.clientX}px`);
      spotlight?.style.setProperty("--my", `${event.clientY}px`);
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
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
