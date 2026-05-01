import { SectionLabel } from "@/src/components/atoms/SectionLabel";

export function AboutCard() {
  return (
    <section className="cell c-about">
      <div className="about">
        <SectionLabel>About</SectionLabel>
        <p>
          <strong>I ship software that lasts.</strong> Six years deep in
          product engineering - mostly the quiet middle layer where data meets
          UI and decisions compound. I care about boring correctness, fast
          feedback loops, and teammates who argue well.
        </p>
        <p>Off-hours: reading type systems, running long, and tuning small interfaces.</p>
      </div>
    </section>
  );
}
