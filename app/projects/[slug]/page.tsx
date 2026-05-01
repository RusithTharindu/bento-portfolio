import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Spotlight } from "../../portfolio-interactions";
import { getNextProject, getProject, projects } from "../../projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found - Rusith",
    };
  }

  return {
    title: `${project.title} - Rusith`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  return (
    <>
      <Spotlight />
      <div className="shell project-shell">
        <nav className="nav project-nav">
          <Link href="/" className="brand">
            <span className="dot" />
            rusith.dev
          </Link>
          <Link href="/#work" className="back">
            ← back to portfolio
          </Link>
        </nav>

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
                {index === 0 ? " →" : ""}
              </a>
            ))}
          </div>
        </header>

        <div className="preview">
          <span>
            {project.number} · {project.shortTitle.toUpperCase()} - PREVIEW
          </span>
        </div>

        <div className="p-grid">
          <div className="p-label">Overview</div>
          <div className="p-body p-section">
            <h3>The problem</h3>
            <p>{project.overview.problem}</p>
            <h3>The approach</h3>
            <p>{project.overview.approach}</p>
          </div>

          <div className="p-label">Role</div>
          <div className="p-body p-section">
            <p>
              <strong>{project.role.split(".")[0]}.</strong>
              {project.role.includes(".") ? project.role.slice(project.role.indexOf(".") + 1) : ""}
            </p>
          </div>

          <div className="p-label">Highlights</div>
          <div className="p-body p-section">
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="p-label">Stack</div>
          <div className="p-body p-section">
            <div className="p-chips">
              {project.stack.map((item, index) => (
                <span className={index === 0 ? "p-chip primary" : "p-chip"} key={item}>
                  <span className="sq" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-label">At a glance</div>
          <div className="p-body p-section">
            <div className="p-kv">
              {project.glance.map(([key, value]) => (
                <div className="row" key={key}>
                  <b>{key}</b>
                  <span className={key === "Status" ? "accent-text" : undefined}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {nextProject ? (
          <div className="p-next">
            <span className="sm">
              {project.number === "04" ? "← BACK TO" : "NEXT PROJECT"} - {nextProject.number}
            </span>
            <Link href={`/projects/${nextProject.slug}`} className="nx">
              {nextProject.title} <span className="arr">→</span>
            </Link>
          </div>
        ) : null}

        <footer className="foot">
          <span>© 2026 RUSITH · CRAFTED WITH INTENT</span>
          <span>{project.number} / 04</span>
        </footer>
      </div>
    </>
  );
}
