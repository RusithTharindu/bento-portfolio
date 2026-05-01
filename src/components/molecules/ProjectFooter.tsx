import { Footer } from "@/src/components/atoms/Footer";
import { projects } from "@/src/data/projects";

type ProjectFooterProps = {
  number: string;
};

export function ProjectFooter({ number }: ProjectFooterProps) {
  return <Footer right={`${number} / ${projects.length.toString().padStart(2, "0")}`} />;
}
