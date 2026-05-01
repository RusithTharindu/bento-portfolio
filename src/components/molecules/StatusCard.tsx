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
            Available &middot; {currentMonthYear}
          </div>
        </div>
        <div className="status-msg">
          Open to <em>full-time</em> and select <em>contract</em> work on product
          teams that value craft.
        </div>
        <div className="status-meta">
          <div className="row">
            <b>Location</b>
            <span>Remote &middot; GMT+5:30</span>
          </div>
          <div className="row">
            <b>Response</b>
            <span>Within 24 hours</span>
          </div>
          <div className="row">
            <b>Stack pref</b>
            <span>TS &middot; Node &middot; JVM</span>
          </div>
        </div>
      </div>
    </MotionCard>
  );
}
