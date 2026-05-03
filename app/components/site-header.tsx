"use client";

import { useState } from "react";

const navItems = [
  { label: "System", href: "#system" },
  { label: "Examples", href: "#examples" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--background)]/92 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a
          href="#"
          className="header-brand group flex flex-col"
          aria-label="JM Infrastructure home"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
            JM Infrastructure
          </span>
          <span className="hidden text-xs text-[color:var(--muted)] sm:block">
            Digital systems for businesses built on trust.
          </span>
        </a>

        <nav
          className="desktop-nav ml-auto hidden items-center justify-end gap-9 text-sm font-medium text-[color:var(--muted)] md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[color:var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-button md:hidden"
          data-open={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav md:hidden ${isOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-1 px-5 pb-4 sm:px-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
