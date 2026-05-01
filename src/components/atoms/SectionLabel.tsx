type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="label">
      <span className="bar" />
      {children}
    </div>
  );
}
