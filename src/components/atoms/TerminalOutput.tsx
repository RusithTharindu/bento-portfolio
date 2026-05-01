"use client";

import { useEffect, useState } from "react";

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

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

export function TerminalOutput() {
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
