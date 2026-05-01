import { getCurrentYear } from "@/src/lib/date";

type FooterProps = {
  right: React.ReactNode;
};

export function Footer({ right }: FooterProps) {
  const currentYear = getCurrentYear();

  return (
    <footer className="foot">
      <span>&copy; {currentYear} RUSITH &middot; CRAFTED WITH INTENT</span>
      <span>{right}</span>
    </footer>
  );
}
