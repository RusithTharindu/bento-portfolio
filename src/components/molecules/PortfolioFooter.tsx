import { Footer } from "@/src/components/atoms/Footer";

export function PortfolioFooter() {
  return (
    <Footer
      right={
        <>
          v1.0 · <span className="live-dot">●</span> LIVE
        </>
      }
    />
  );
}
