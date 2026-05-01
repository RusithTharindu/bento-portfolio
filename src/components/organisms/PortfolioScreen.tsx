import { Spotlight } from "@/src/components/atoms/Spotlight";
import { AboutCard } from "@/src/components/molecules/AboutCard";
import { ActivityCard } from "@/src/components/molecules/ActivityCard";
import { ContactCard } from "@/src/components/molecules/ContactCard";
import { EducationCard } from "@/src/components/molecules/EducationCard";
import { HeroCard } from "@/src/components/molecules/HeroCard";
import { PortfolioFooter } from "@/src/components/molecules/PortfolioFooter";
import { PortfolioNav } from "@/src/components/molecules/PortfolioNav";
import { ProjectsCard } from "@/src/components/molecules/ProjectsCard";
import { StackCard } from "@/src/components/molecules/StackCard";
import { StatsCard } from "@/src/components/molecules/StatsCard";
import { StatusCard } from "@/src/components/molecules/StatusCard";
import { TerminalCard } from "@/src/components/molecules/TerminalCard";
import { TimelineCard } from "@/src/components/molecules/TimelineCard";
import { getGitHubActivity } from "@/src/lib/github";

export async function PortfolioScreen() {
  const activity = await getGitHubActivity();

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
          <ActivityCard activity={activity} />
          <TerminalCard />
          <TimelineCard />
          <EducationCard />
          <ContactCard />
        </main>
        <PortfolioFooter />
      </div>
    </>
  );
}
