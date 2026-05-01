"use client";

import { useMemo } from "react";

const palette = ["#18181b", "#2a1a1c", "#4a1f22", "#7a2a2e", "oklch(0.72 0.18 20)"];

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
        delay: `${(week * 7 + day) * 6}ms`,
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
        <span
          className="gh-cell"
          key={cell.id}
          style={{
            background: cell.background,
            animationDelay: cell.delay,
            gridColumn: cell.gridColumn,
            gridRow: cell.gridRow,
          }}
        />
      ))}
    </div>
  );
}
