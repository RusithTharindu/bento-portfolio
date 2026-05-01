"use client";

import { motion } from "motion/react";
import type { GitHubActivityCell } from "@/src/lib/github";

type ActivityGridProps = {
  cells: GitHubActivityCell[];
};

export function ActivityGrid({ cells }: ActivityGridProps) {
  return (
    <div className="gh-grid" aria-hidden="true">
      {cells.map((cell) => (
        <motion.span
          className="gh-cell"
          key={cell.id}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: (cell.gridColumn * 7 + cell.gridRow) * 0.006,
            duration: 0.6,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          style={{
            background: cell.color,
            gridColumn: cell.gridColumn,
            gridRow: cell.gridRow,
          }}
        />
      ))}
    </div>
  );
}
