"use client";

import { type ComponentPropsWithoutRef, useEffect, useRef } from "react";

type RevealProps = ComponentPropsWithoutRef<"div">;

export function Reveal({ children, className = "", ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    try {
      const prefersReducedMotion =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion || typeof window.IntersectionObserver !== "function") {
        node.dataset.reveal = "visible";
        return;
      }

      const rect = node.getBoundingClientRect();

      if (rect.top > window.innerHeight * 0.92) {
        node.dataset.reveal = "pending";
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.dataset.reveal = "visible";
            observer.unobserve(node);
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      observer.observe(node);

      return () => observer.disconnect();
    } catch {
      node.dataset.reveal = "visible";
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-reveal="visible"
      {...props}
    >
      {children}
    </div>
  );
}
