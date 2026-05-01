import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { projects } from "@/src/data/projects";
import { ProjectCard } from "@/src/components/molecules/ProjectCard";

export function ProjectsCard() {
  return (
    <section className="cell c-projects" id="work">
      <div className="projects">
        <div className="projects-head">
          <SectionLabel>Selected work</SectionLabel>
          <a href="#work" className="view">
            view all -&gt;
          </a>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
