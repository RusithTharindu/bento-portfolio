import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { StatCard } from "@/src/components/atoms/StatCard";
import { stats } from "@/src/data/portfolio";

export function StatsCard() {
  return (
    <section className="cell c-stats">
      <SectionLabel>By the numbers</SectionLabel>
      <div className="stats-grid">
        {stats.map(([value, suffix, label]) => (
          <StatCard value={value} suffix={suffix} label={label} key={label} />
        ))}
      </div>
    </section>
  );
}
