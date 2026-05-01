import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { timeline } from "@/src/data/portfolio";

export function TimelineCard() {
  return (
    <section className="cell c-timeline">
      <SectionLabel>Experience</SectionLabel>
      <div className="tl-list">
        {timeline.map(([year, role, company, description], index) => (
          <div className={index === 0 ? "tl-item current" : "tl-item"} key={role}>
            <div className="tl-year">{year}</div>
            <div className="tl-role">
              {role} <span className="tl-co">· {company}</span>
            </div>
            <div className="tl-desc">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
