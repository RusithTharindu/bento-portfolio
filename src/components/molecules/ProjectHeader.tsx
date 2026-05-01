import type { Project } from "@/src/data/projects";

type ProjectHeaderProps = {
  project: Project;
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const headingPrefix = project.heading.before
    ? `${project.heading.before} `
    : "";

  return (
    <header className="p-header">
      <div className="p-meta">
        <span>PROJECT / {project.number}</span>
        <span className="divider" />
        <span>{project.year}</span>
        <span className="divider" />
        <span className="accent-text">o {project.status}</span>
      </div>
      <h1 className="p-title">
        {headingPrefix}
        <em>{project.heading.emphasis}</em>
        <br />- {project.heading.after}
      </h1>
      <p className="p-lede">{project.lede}</p>
      <div className="p-actions">
        {project.actions.map((action, index) => (
          <a
            className={index === 0 ? "p-btn primary" : "p-btn"}
            href={action.href}
            key={action.href}
            rel="noreferrer"
            target="_blank"
          >
            {action.label}
            {index === 0 ? " ->" : ""}
          </a>
        ))}
      </div>
    </header>
  );
}
