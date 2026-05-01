"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

const palette = ["#18181b", "#2a1a1c", "#4a1f22", "#7a2a2e", "#f06a5f"];

function createActivityCells() {
  const cells = [];
  let seed = 42;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let day = 0; day < 7; day += 1) {
    for (let week = 0; week < 26; week += 1) {
      const random = rnd();
      let level = 0;
      if (random > 0.35) level = 1;
      if (random > 0.55) level = 2;
      if (random > 0.78) level = 3;
      if (random > 0.92) level = 4;
      if ((day === 0 || day === 6) && random < 0.7) {
        level = Math.max(0, level - 1);
      }

      cells.push({
        id: `${week}-${day}`,
        background: palette[level],
        gridColumn: week + 1,
        gridRow: day + 1,
      });
    }
  }

  return cells;
}

export function ActivityGrid() {
  const cells = useMemo(() => createActivityCells(), []);

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
            background: cell.background,
            gridColumn: cell.gridColumn,
            gridRow: cell.gridRow,
          }}
        />
      ))}
    </div>
  );
}
