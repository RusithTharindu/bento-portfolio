import { Footer } from "@/src/components/atoms/Footer";

type ProjectFooterProps = {
  number: string;
};

export function ProjectFooter({ number }: ProjectFooterProps) {
  return <Footer right={`${number} / 04`} />;
}
