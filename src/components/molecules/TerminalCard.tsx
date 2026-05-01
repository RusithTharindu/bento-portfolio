import { TerminalOutput } from "@/src/components/atoms/TerminalOutput";

export function TerminalCard() {
  return (
    <section className="cell c-terminal">
      <div className="term">
        <div className="term-bar">
          <span className="term-dot r" />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="term-title">rusith@dev ~ /portfolio</span>
        </div>
        <TerminalOutput />
      </div>
    </section>
  );
}
