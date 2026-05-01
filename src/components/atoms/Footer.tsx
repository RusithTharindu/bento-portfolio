type FooterProps = {
  right: React.ReactNode;
};

export function Footer({ right }: FooterProps) {
  return (
    <footer className="foot">
      <span>© 2026 RUSITH · CRAFTED WITH INTENT</span>
      <span>{right}</span>
    </footer>
  );
}
