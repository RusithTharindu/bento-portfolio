type ChipProps = {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
};

export function Chip({ children, className = "chip", isPrimary = false }: ChipProps) {
  return (
    <span className={isPrimary ? `${className} primary` : className}>
      <span className="sq" />
      {children}
    </span>
  );
}
