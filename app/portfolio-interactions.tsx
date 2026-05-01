"use client";

import { useEffect, useMemo, useState } from "react";

type TerminalLine = {
  prefix?: string;
  command?: string;
  output?: string;
  cursor?: boolean;
};

const terminalScript: TerminalLine[] = [
  {
    prefix:
      '<span class="u">rusith</span><span class="k">@</span>dev <span class="k">~/portfolio</span> $ ',
    command: "whoami --verbose",
  },
  { output: '<span class="c">-> Rusith Tharindu Thushan - Software Engineer</span>' },
  { output: '<span class="c">-> Based remote - GMT+5:30</span>' },
  { output: "&nbsp;" },
  {
    prefix:
      '<span class="u">rusith</span><span class="k">@</span>dev <span class="k">~/portfolio</span> $ ',
    command: "cat skills.json",
  },
  { output: '<span class="c">{ "languages": ["TypeScript", "Java"],</span>' },
  { output: '<span class="c">&nbsp;&nbsp;"backend":&nbsp;&nbsp; ["Node", "NestJS", "Spring"],</span>' },
  { output: '<span class="c">&nbsp;&nbsp;"frontend":&nbsp; ["React", "Next.js"] }</span>' },
  { output: "&nbsp;" },
  {
    prefix:
      '<span class="u">rusith</span><span class="k">@</span>dev <span class="k">~/portfolio</span> $ ',
    command: "./hire.sh",
    cursor: true,
  },
];

const palette = ["#18181b", "#2a1a1c", "#4a1f22", "#7a2a2e", "oklch(0.72 0.18 20)"];

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

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

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const timers = new Set<number>();
    let lineIndex = 0;

    const sleep = (milliseconds: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(() => {
          timers.delete(timer);
          resolve();
        }, milliseconds);
        timers.add(timer);
      });

    const setLine = (index: number, html: string) => {
      setLines((current) => {
        const next = [...current];
        next[index] = html;
        return next;
      });
    };

    async function run() {
      await sleep(400);

      for (const line of terminalScript) {
        if (cancelled) return;

        const index = lineIndex;
        lineIndex += 1;
        setLines((current) => [...current, line.prefix ?? line.output ?? ""]);

        if (line.command && line.prefix) {
          let typed = "";
          for (const char of line.command) {
            if (cancelled) return;
            typed += char;
            setLine(index, `${line.prefix}${escapeHtml(typed)}`);
            await sleep(30 + Math.random() * 30);
          }
          if (line.cursor) {
            setLine(index, `${line.prefix}${escapeHtml(typed)}<span class="term-cursor"></span>`);
          }
        }

        await sleep(line.command ? 120 : 220);
      }
    }

    run();

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div className="term-body" aria-label="Terminal output">
      {lines.map((line, index) => (
        <div key={`${index}-${line}`} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
    </div>
  );
}
