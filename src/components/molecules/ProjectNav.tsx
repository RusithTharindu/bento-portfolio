import Link from "next/link";
import { Brand } from "@/src/components/atoms/Brand";

export function ProjectNav() {
  return (
    <nav className="nav project-nav">
      <Brand href="/" />
      <Link href="/#work" className="back">
        &lt;- back to portfolio
      </Link>
    </nav>
  );
}
