"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect, useRef } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const desktopPointerQuery = "(hover: hover) and (pointer: fine)";
const coarsePointerQuery = "(pointer: coarse)";
const desktopWidthQuery = "(min-width: 768px)";

declare global {
  interface Window {
    __jmLenis?: Lenis;
  }
}

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>(".site-header");
  return (header?.getBoundingClientRect().height ?? 0) + 18;
}

function getSectionScrollTarget(section: HTMLElement) {
  return section.querySelector<HTMLElement>(".eyebrow, h1, h2") ?? section;
}

function getHashId(hash: string) {
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
}

function getHashScrollTop(hash: string, offset = 0) {
  if (hash === "#") {
    return 0;
  }

  const sectionId = getHashId(hash);
  const section = sectionId ? document.getElementById(sectionId) : null;

  if (!section) {
    return null;
  }

  const target = getSectionScrollTarget(section);
  const top =
    target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  return Math.max(0, top - offset);
}

function isDesktopSmoothScrollEligible() {
  if (typeof window.matchMedia !== "function") {
    return false;
  }

  return (
    !window.matchMedia(reducedMotionQuery).matches &&
    window.matchMedia(desktopPointerQuery).matches &&
    !window.matchMedia(coarsePointerQuery).matches &&
    window.matchMedia(desktopWidthQuery).matches
  );
}

function getSamePageHashLink(anchor: HTMLAnchorElement) {
  const currentUrl = new URL(window.location.href);
  const anchorUrl = new URL(anchor.href);

  if (
    anchorUrl.origin !== currentUrl.origin ||
    anchorUrl.pathname !== currentUrl.pathname ||
    anchorUrl.search !== currentUrl.search ||
    !anchorUrl.hash
  ) {
    return null;
  }

  return {
    hash: anchorUrl.hash,
    nextUrl:
      anchorUrl.hash === "#"
        ? `${anchorUrl.pathname}${anchorUrl.search}`
        : `${anchorUrl.pathname}${anchorUrl.search}${anchorUrl.hash}`,
  };
}

function addMediaQueryListener(
  mediaQuery: MediaQueryList,
  listener: () => void,
) {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }

  mediaQuery.addListener(listener);

  return () => mediaQuery.removeListener(listener);
}

export function ScrollSmoothingProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    function scrollToHash(
      lenis: Lenis,
      hash: string,
      immediate = false,
      offset = 0,
    ) {
      const top = getHashScrollTop(hash, offset);

      if (top === null) {
        return false;
      }

      lenis.scrollTo(top, immediate ? { force: true, immediate: true } : {});

      return true;
    }

    function handleAnchorClick(event: MouseEvent) {
      const lenis = lenisRef.current;

      if (
        !lenis ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor || (anchor.target && anchor.target !== "_self")) {
        return;
      }

      const link = getSamePageHashLink(anchor);

      const offset = Number(anchor.dataset.desktopScrollOffset ?? 0);

      if (!link || !scrollToHash(lenis, link.hash, false, offset)) {
        return;
      }

      event.preventDefault();
      window.history.replaceState(null, "", link.nextUrl);
    }

    function destroyLenis() {
      document.removeEventListener("click", handleAnchorClick);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      delete window.__jmLenis;
    }

    function createLenis() {
      if (lenisRef.current || !isDesktopSmoothScrollEligible()) {
        return;
      }

      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.12,
        smoothWheel: true,
      });

      lenisRef.current = lenis;
      window.__jmLenis = lenis;
      document.addEventListener("click", handleAnchorClick);

      if (window.location.hash) {
        window.requestAnimationFrame(() => {
          if (lenisRef.current === lenis) {
            scrollToHash(lenis, window.location.hash, true);
          }
        });
      }
    }

    function syncLenisState() {
      if (isDesktopSmoothScrollEligible()) {
        createLenis();
        return;
      }

      destroyLenis();
    }

    const mediaQueries =
      typeof window.matchMedia === "function"
        ? [
            window.matchMedia(reducedMotionQuery),
            window.matchMedia(desktopPointerQuery),
            window.matchMedia(coarsePointerQuery),
            window.matchMedia(desktopWidthQuery),
          ]
        : [];

    const removeMediaListeners = mediaQueries.map((mediaQuery) =>
      addMediaQueryListener(mediaQuery, syncLenisState),
    );

    syncLenisState();

    return () => {
      removeMediaListeners.forEach((removeListener) => removeListener());
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}
