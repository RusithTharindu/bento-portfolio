type SocialLinkProps = {
  href?: string;
  label: string;
  variant?: "primary" | "icon";
  children?: React.ReactNode;
};

export function SocialLink({
  href = "#",
  label,
  variant,
  children,
}: SocialLinkProps) {
  const className = variant ? `social ${variant}` : "social";

  return (
    <a href={href} className={className} aria-label={label} title={variant === "icon" ? label : undefined}>
      {children ?? label.slice(0, 1)}
    </a>
  );
}
