import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Spotlight } from "@/src/components/atoms/Spotlight";
import { ProjectFooter } from "@/src/components/molecules/ProjectFooter";
import { ProjectHeader } from "@/src/components/molecules/ProjectHeader";
import { ProjectNav } from "@/src/components/molecules/ProjectNav";
import { ProjectNext } from "@/src/components/molecules/ProjectNext";
import { ProjectPreview } from "@/src/components/molecules/ProjectPreview";
import { ProjectSections } from "@/src/components/molecules/ProjectSections";
import { getNextProject, getProject, projects } from "@/src/data/projects";

export type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateProjectStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateProjectMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
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

export async function ProjectScreen({ params }: ProjectRouteProps) {
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
        <ProjectNav />
        <ProjectHeader project={project} />
        <ProjectPreview project={project} />
        <ProjectSections project={project} />
        {nextProject ? <ProjectNext current={project} next={nextProject} /> : null}
        <ProjectFooter number={project.number} />
      </div>
    </>
  );
}
