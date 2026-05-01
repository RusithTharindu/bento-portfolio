"use client";

import { Brand } from "@/src/components/atoms/Brand";
import { useEffect, useState } from "react";

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

function MenuIcon({ isOpen }: { isOpen: boolean }) {
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
      {isOpen ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

const navItems = [
  ["work", "#work"],
  ["about", "#about"],
  ["stack", "#stack"],
  ["education", "#education"],
  ["contact", "#contact"],
] as const;

export function PortfolioNav({
  isTerminalMode = false,
  onTerminalToggle,
  showTerminalToggle = false,
}: PortfolioNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 720px)");

    function closeWhenLeavingMobile() {
      if (!mobileQuery.matches) {
        setIsMobileMenuOpen(false);
      }
    }

    closeWhenLeavingMobile();
    mobileQuery.addEventListener("change", closeWhenLeavingMobile);

    return () => mobileQuery.removeEventListener("change", closeWhenLeavingMobile);
  }, []);

  return (
    <nav className="nav portfolio-nav" aria-label="Primary navigation">
      <div className="nav-main">
        <Brand />
        <div className="nav-actions">
          <div
            aria-hidden={isTerminalMode}
            className={isTerminalMode ? "navlinks is-hidden" : "navlinks"}
          >
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
          <button
            aria-controls="mobile-nav-panel"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="nav-menu-toggle"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            type="button"
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
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
      </div>
      <div
        className={
          isMobileMenuOpen ? "mobile-nav-panel is-open" : "mobile-nav-panel"
        }
        id="mobile-nav-panel"
      >
        {navItems.map(([label, href]) => (
          <a
            href={href}
            key={href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
