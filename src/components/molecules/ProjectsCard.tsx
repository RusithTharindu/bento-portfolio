import Link from "next/link";
import { MotionCard } from "@/src/components/atoms/MotionCard";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { projects } from "@/src/data/projects";
import { ProjectCard } from "@/src/components/molecules/ProjectCard";

export function ProjectsCard() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <MotionCard className="cell c-projects" id="work" delay={0.25}>
      <div className="projects">
        <div className="projects-head">
          <SectionLabel>Selected work</SectionLabel>
          <span className="view">{projects.length} projects</span>
        </div>
        <div className="project-list">
          {selectedProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <Link href="/projects" className="projects-view-all">
          View all projects -&gt;
        </Link>
      </div>
    </MotionCard>
  );
}
