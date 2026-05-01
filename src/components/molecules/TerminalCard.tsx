import { MotionCard } from "@/src/components/atoms/MotionCard";
import { TerminalOutput } from "@/src/components/atoms/TerminalOutput";

export function TerminalCard() {
  return (
    <MotionCard className="cell c-terminal" delay={0.35}>
      <div className="term">
        <div className="term-bar">
          <span className="term-dot r" />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="term-title">rusith@dev ~ /portfolio</span>
        </div>
        <TerminalOutput />
      </div>
    </MotionCard>
  );
}
