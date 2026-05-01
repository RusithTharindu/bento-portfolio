import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/src/components/atoms/Brand";
import { Footer } from "@/src/components/atoms/Footer";
import { Spotlight } from "@/src/components/atoms/Spotlight";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Projects - Rusith",
  description:
    "A complete project archive for Rusith Tharindu Thushan, spanning web platforms, mobile apps, event products, and full-stack systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <Spotlight />
      <div className="shell projects-shell">
        <nav className="nav project-nav">
          <Brand href="/" />
          <Link href="/#work" className="back">
            &lt;- back to portfolio
          </Link>
        </nav>

        <header className="projects-page-header">
          <div className="p-meta">
            <span>PROJECT ARCHIVE</span>
            <span className="divider" />
            <span>{projects.length.toString().padStart(2, "0")} SELECTED BUILDS</span>
          </div>
          <h1 className="projects-page-title">
            Selected <em>projects</em>
            <br />- shipped, shaped, and studied.
          </h1>
          <p className="projects-page-lede">
            A focused archive of full-stack platforms, mobile apps, event
            experiences, and product interfaces. Each card opens into a deeper
            project note with stack, role, highlights, and source links.
          </p>
        </header>

        <section className="projects-grid" aria-label="All projects">
          {projects.map((project) => (
            <Link
              className="projects-grid-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="projects-grid-card-top">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="projects-grid-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="projects-grid-card-bottom">
                <span>{project.year}</span>
                <span>View project -&gt;</span>
              </div>
            </Link>
          ))}
        </section>

        <Footer right={`01 / ${projects.length.toString().padStart(2, "0")}`} />
      </div>
    </>
  );
}
