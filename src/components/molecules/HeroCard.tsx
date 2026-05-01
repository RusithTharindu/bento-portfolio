import { MotionCard } from "@/src/components/atoms/MotionCard";
import { getCurrentYear } from "@/src/lib/date";

export function HeroCard() {
  const currentYear = getCurrentYear();

  return (
    <MotionCard className="cell c-hero">
      <div className="hero">
        <div className="hero-top">
          <div className="hero-meta">- PORTFOLIO / {currentYear}</div>
          <div className="hero-meta">INDEX &middot; 01</div>
        </div>
        <div>
          <h1 className="hero-title">
            Rusith Tharindu
            <br />
            Thushan.
            <br />
            <em>Software engineer</em>
            <br />
            building resilient systems.
          </h1>
          <p className="hero-sub">
            I design and ship full-stack products end-to-end - from <b>TypeScript</b>{" "}
            front-ends to <b>Spring Boot</b> services. Currently focused on
            composable architectures, clean APIs, and fast teams.
          </p>
        </div>
      </div>
    </MotionCard>
  );
}
