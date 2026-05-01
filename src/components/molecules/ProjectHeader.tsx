import type { Project } from "@/src/data/projects";

type ProjectHeaderProps = {
  project: Project;
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="p-header">
      <div className="p-meta">
        <span>PROJECT / {project.number}</span>
        <span className="divider" />
        <span>{project.year}</span>
        <span className="divider" />
        <span className="accent-text">● {project.status}</span>
      </div>
      <h1 className="p-title">
        {project.heading.before} <em>{project.heading.emphasis}</em>
        <br />- {project.heading.after}
      </h1>
      <p className="p-lede">{project.lede}</p>
      <div className="p-actions">
        {project.actions.map((action, index) => (
          <a className={index === 0 ? "p-btn primary" : "p-btn"} href="#" key={action}>
            {action}
            {index === 0 ? " ->" : ""}
          </a>
        ))}
      </div>
    </header>
  );
}
