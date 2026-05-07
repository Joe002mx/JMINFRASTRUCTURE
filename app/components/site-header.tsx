"use client";

import { type MouseEvent, useState } from "react";

const navItems = [
  { label: "System", href: "#system" },
  { label: "Examples", href: "#examples" },
  { label: "Build", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>(".site-header");
  return (header?.getBoundingClientRect().height ?? 0) + 18;
}

function getSectionScrollTarget(section: HTMLElement) {
  return (
    section.querySelector<HTMLElement>(".eyebrow, h1, h2") ?? section
  );
}

function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function scrollToSection(href: string) {
  const sectionId = href.startsWith("#") ? href.slice(1) : "";
  const section = sectionId ? document.getElementById(sectionId) : null;

  if (!section) {
    return;
  }

  const target = getSectionScrollTarget(section);
  const top =
    target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  const scrollTop = Math.max(0, top);
  const lenis = window.__jmLenis;

  if (lenis && !prefersReducedMotion()) {
    lenis.scrollTo(scrollTop);
  } else {
    window.scrollTo({
      top: scrollTop,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  window.history.replaceState(null, "", href);
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false,
  ) {
    event.preventDefault();

    if (closeMenu) {
      setIsOpen(false);
    }

    window.setTimeout(() => scrollToSection(href), 0);
  }

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
              onClick={(event) => handleNavClick(event, item.href)}
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
              onClick={(event) => handleNavClick(event, item.href, true)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
