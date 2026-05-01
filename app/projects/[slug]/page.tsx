import {
  generateProjectMetadata,
  generateProjectStaticParams,
  ProjectScreen,
  type ProjectRouteProps,
} from "@/src/components/organisms/ProjectScreen";

export const generateStaticParams = generateProjectStaticParams;
export const generateMetadata = generateProjectMetadata;

export default function ProjectPage(props: ProjectRouteProps) {
  return <ProjectScreen {...props} />;
}
