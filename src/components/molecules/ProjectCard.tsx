import Link from "next/link";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className="project" href={`/projects/${project.slug}`}>
      <div className="proj-num">{project.number}</div>
      <div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-desc">{project.description}</div>
      </div>
      <div className="proj-tags">
        {project.tags.map((tag) => (
          <span className="proj-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="proj-arrow">-&gt;</div>
    </Link>
  );
}
