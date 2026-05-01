import { Chip } from "@/src/components/atoms/Chip";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { stackGroups } from "@/src/data/portfolio";

export function StackCard() {
  return (
    <section className="cell c-stack" id="stack">
      <SectionLabel>Stack</SectionLabel>
      <div className="stack-list">
        {stackGroups.map(([category, items]) => (
          <div className="stack-row" key={category}>
            <div className="stack-cat">{category}</div>
            <div className="stack-chips">
              {items.map((item, index) => (
                <Chip isPrimary={category === "Languages" && index < 2} key={item}>
                  {item}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
