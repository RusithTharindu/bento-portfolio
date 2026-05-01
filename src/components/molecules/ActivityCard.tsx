import { ActivityGrid } from "@/src/components/atoms/ActivityGrid";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";

const scaleColors = ["#18181b", "#2a1a1c", "#4a1f22", "#7a2a2e", "oklch(0.72 0.18 20)"];

export function ActivityCard() {
  return (
    <section className="cell c-github">
      <div className="gh">
        <SectionLabel>Activity</SectionLabel>
        <div className="gh-head">
          <div className="gh-count">
            1,284 <small>CONTRIBUTIONS</small>
          </div>
          <div className="gh-year">past 12 months</div>
        </div>
        <ActivityGrid />
        <div className="gh-legend">
          <span>Apr &apos;25</span>
          <span className="gh-scale">
            less
            {scaleColors.map((color) => (
              <i style={{ background: color }} key={color} />
            ))}
            more
          </span>
          <span>Apr &apos;26</span>
        </div>
      </div>
    </section>
  );
}
