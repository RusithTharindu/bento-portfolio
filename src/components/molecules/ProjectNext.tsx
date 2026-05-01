import Link from "next/link";
import type { Project } from "@/src/data/projects";
import { projects } from "@/src/data/projects";

type ProjectNextProps = {
  current: Project;
  next: Project;
};

export function ProjectNext({ current, next }: ProjectNextProps) {
  const isLastProject = current.slug === projects.at(-1)?.slug;

  return (
    <div className="p-next">
      <span className="sm">
        {isLastProject ? "<- BACK TO" : "NEXT PROJECT"} - {next.number}
      </span>
      <Link href={`/projects/${next.slug}`} className="nx">
        {next.title} <span className="arr">-&gt;</span>
      </Link>
    </div>
  );
}
