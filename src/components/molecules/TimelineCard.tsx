import { MotionCard } from "@/src/components/atoms/MotionCard";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { timeline } from "@/src/data/portfolio";

export function TimelineCard() {
  return (
    <MotionCard className="cell c-timeline" delay={0.4}>
      <SectionLabel>Experience</SectionLabel>
      <div className="tl-list">
        {timeline.map(([year, role, company, description], index) => (
          <div className={index === 0 ? "tl-item current" : "tl-item"} key={`${year}-${company}`}>
            <div className="tl-year">{year}</div>
            <div className="tl-role">
              {role} <span className="tl-co">&middot; {company}</span>
            </div>
            <div className="tl-desc">{description}</div>
          </div>
        ))}
      </div>
    </MotionCard>
  );
}
