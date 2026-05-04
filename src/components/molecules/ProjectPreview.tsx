import Image from "next/image";
import type { Project } from "@/src/data/projects";

type ProjectPreviewProps = {
  project: Project;
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.previewImage) {
    return (
      <figure className="preview preview-media">
        <div className="preview-image-frame">
          <Image
            alt={project.previewAlt ?? `${project.title} application preview`}
            className="preview-image"
            fill
            priority={project.number === "01"}
            sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1180px) calc(100vw - 56px), 1100px"
            src={project.previewImage}
          />
        </div>
        <figcaption>
          {project.number} / {project.shortTitle.toUpperCase()} - PREVIEW
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="preview">
      <span>
        {project.number} / {project.shortTitle.toUpperCase()} - PREVIEW
      </span>
    </div>
  );
}
