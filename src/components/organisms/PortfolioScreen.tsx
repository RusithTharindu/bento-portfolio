import { Spotlight } from "@/src/components/atoms/Spotlight";
import { AboutCard } from "@/src/components/molecules/AboutCard";
import { ActivityCard } from "@/src/components/molecules/ActivityCard";
import { ContactCard } from "@/src/components/molecules/ContactCard";
import { HeroCard } from "@/src/components/molecules/HeroCard";
import { PortfolioFooter } from "@/src/components/molecules/PortfolioFooter";
import { PortfolioNav } from "@/src/components/molecules/PortfolioNav";
import { ProjectsCard } from "@/src/components/molecules/ProjectsCard";
import { StackCard } from "@/src/components/molecules/StackCard";
import { StatsCard } from "@/src/components/molecules/StatsCard";
import { StatusCard } from "@/src/components/molecules/StatusCard";
import { TerminalCard } from "@/src/components/molecules/TerminalCard";
import { TimelineCard } from "@/src/components/molecules/TimelineCard";

export function PortfolioScreen() {
  return (
    <>
      <Spotlight />
      <div className="shell">
        <PortfolioNav />
        <main className="bento">
          <HeroCard />
          <StatusCard />
          <AboutCard />
          <StackCard />
          <StatsCard />
          <ProjectsCard />
          <ActivityCard />
          <TerminalCard />
          <TimelineCard />
          <ContactCard />
        </main>
        <PortfolioFooter />
      </div>
    </>
  );
}
