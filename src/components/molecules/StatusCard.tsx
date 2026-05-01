import { MotionCard } from "@/src/components/atoms/MotionCard";
import { MotionPulse } from "@/src/components/atoms/MotionPulse";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { getCurrentMonthYear } from "@/src/lib/date";

export function StatusCard() {
  const currentMonthYear = getCurrentMonthYear();

  return (
    <MotionCard className="cell c-status" id="about" delay={0.05}>
      <div className="status">
        <div>
          <SectionLabel>Status</SectionLabel>
          <div className="status-avail">
            <MotionPulse />
            Software Engineer &middot; {currentMonthYear}
          </div>
        </div>
        <div className="status-msg">
          Shipping production software at <em>Rootcode</em> - and thinking
          seriously about what secure systems actually look like from the inside
          out.
        </div>
        <div className="status-meta">
          <div className="row">
            <b>Company</b>
            <span>Rootcode</span>
          </div>
          <div className="row">
            <b>Location</b>
            <span>Sri Lanka &middot; GMT+5:30</span>
          </div>
          <div className="row">
            <b>Stack</b>
            <span>TS &middot; Node &middot; JVM</span>
          </div>
        </div>
      </div>
    </MotionCard>
  );
}
