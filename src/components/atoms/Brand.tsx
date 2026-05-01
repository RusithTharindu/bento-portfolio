import Link from "next/link";

type BrandProps = {
  href?: string;
};

export function Brand({ href }: BrandProps) {
  const content = (
    <>
      <span className="dot" />
      rusith.dev
    </>
  );

  if (href) {
    return (
      <Link href={href} className="brand">
        {content}
      </Link>
    );
  }

  return <div className="brand">{content}</div>;
}
