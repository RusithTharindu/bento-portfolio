import { Footer } from "@/src/components/atoms/Footer";

export function PortfolioFooter() {
  return (
    <Footer
      right={
        <>
          v1.0 &middot; <span className="live-dot">&bull;</span> LIVE
        </>
      }
    />
  );
}
