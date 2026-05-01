import type { Project } from "@/src/data/projects";

type ProjectPreviewProps = {
  project: Project;
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="preview">
      <span>
        {project.number} · {project.shortTitle.toUpperCase()} - PREVIEW
      </span>
    </div>
  );
}
