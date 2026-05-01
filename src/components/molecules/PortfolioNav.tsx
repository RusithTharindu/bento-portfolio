import { Brand } from "@/src/components/atoms/Brand";

type PortfolioNavProps = {
  isTerminalMode?: boolean;
  onTerminalToggle?: () => void;
  showTerminalToggle?: boolean;
};

function TerminalIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width="18"
    >
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </svg>
  );
}

export function PortfolioNav({
  isTerminalMode = false,
  onTerminalToggle,
  showTerminalToggle = false,
}: PortfolioNavProps) {
  return (
    <nav className="nav">
      <Brand />
      <div className="nav-actions">
        <div
          aria-hidden={isTerminalMode}
          className={isTerminalMode ? "navlinks is-hidden" : "navlinks"}
        >
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#stack">stack</a>
          <a href="#education">education</a>
          <a href="#contact">contact</a>
        </div>
        {showTerminalToggle ? (
          <button
            aria-label={
              isTerminalMode ? "Return to bento mode" : "Open terminal mode"
            }
            aria-pressed={isTerminalMode}
            className="nav-terminal"
            onClick={onTerminalToggle}
            title={isTerminalMode ? "Bento mode" : "Terminal mode"}
            type="button"
          >
            <TerminalIcon />
          </button>
        ) : null}
      </div>
    </nav>
  );
}
