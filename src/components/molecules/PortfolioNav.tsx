import { Brand } from "@/src/components/atoms/Brand";

export function PortfolioNav() {
  return (
    <nav className="nav">
      <Brand />
      <div className="navlinks">
        <a href="#work">work</a>
        <a href="#about">about</a>
        <a href="#stack">stack</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}
