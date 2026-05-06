"use client";

import Image from "next/image";
import { type TouchEvent, useEffect, useMemo, useRef, useState } from "react";

type ConceptBuild = {
  id: string;
  label: string;
  title: string;
  selectorLabel: string;
  description: string;
  copy: string;
  videoWebm: string;
  videoMp4: string;
  poster: string;
};

type MotionDirection = "next" | "previous";

const conceptBuilds: ConceptBuild[] = [
  {
    id: "decorator",
    label: "Concept build",
    title: "Decorator website direction",
    selectorLabel: "Decorator",
    description: "Craft, proof, local trust, and quote clarity.",
    copy: "A visual route from workmanship to enquiry, built around credibility, services, reviews, and clear next steps.",
    videoWebm: "/concept-builds/decorator-concept.webm",
    videoMp4: "/concept-builds/decorator-concept.mp4",
    poster: "/concept-builds/decorator-concept.png",
  },
  {
    id: "electrical-services",
    label: "Concept build",
    title: "Electrical services website direction",
    selectorLabel: "Electrical services",
    description: "Clear quotes, safe work, and local confidence.",
    copy: "A practical structure for essential local services where speed, clarity, proof, and trust matter before someone makes contact.",
    videoWebm: "/concept-builds/electrician-concept.webm",
    videoMp4: "/concept-builds/electrician-concept.mp4",
    poster: "/concept-builds/electrician-concept.png",
  },
  {
    id: "hair-studio",
    label: "Concept build",
    title: "Hair studio website direction",
    selectorLabel: "Hair studio",
    description: "Premium, appointment-led, atmosphere-first.",
    copy: "A calm, considered online experience for appointment-led businesses that need to feel premium before someone books.",
    videoWebm: "/concept-builds/salon-concept.webm",
    videoMp4: "/concept-builds/salon-concept.mp4",
    poster: "/concept-builds/salon-concept.png",
  },
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      if (typeof window.matchMedia !== "function") {
        return;
      }

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

      updatePreference();

      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", updatePreference);

        return () => mediaQuery.removeEventListener("change", updatePreference);
      }

      if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(updatePreference);

        return () => mediaQuery.removeListener(updatePreference);
      }
    } catch {
      return;
    }
  }, []);

  return prefersReducedMotion;
}

function ConceptPreview({
  concept,
  shouldPlay,
  prefersReducedMotion,
  direction,
  motionKey,
}: {
  concept: ConceptBuild;
  shouldPlay: boolean;
  prefersReducedMotion: boolean;
  direction: MotionDirection;
  motionKey: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPosterFallback, setShowPosterFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || prefersReducedMotion || showPosterFallback) {
      return;
    }

    if (!shouldPlay) {
      video.pause();
      return;
    }

    try {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const playAttempt = video.play() as Promise<void> | undefined;

      if (playAttempt && typeof playAttempt.catch === "function") {
        void playAttempt.catch(() => {
          video.pause();
          setShowPosterFallback(true);
        });
      }
    } catch {
      video.pause();
      setTimeout(() => setShowPosterFallback(true), 0);
    }
  }, [concept.id, prefersReducedMotion, shouldPlay, showPosterFallback]);

  return (
    <div
      key={`${concept.id}-${motionKey}`}
      className="concept-preview-frame"
      data-motion={prefersReducedMotion ? "static" : direction}
    >
      <div className="concept-preview-media">
        {prefersReducedMotion || showPosterFallback ? (
          <Image
            src={concept.poster}
            alt={`${concept.title} website preview`}
            fill
            sizes="(min-width: 768px) 62vw, 100vw"
            className="concept-preview-image"
          />
        ) : (
          <video
            key={concept.id}
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay={shouldPlay}
            poster={concept.poster}
            preload="auto"
            aria-label={`${concept.title} animated website preview`}
          >
            <source src={concept.videoWebm} type="video/webm" />
            <source src={concept.videoMp4} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

export function ConceptBuildsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState<MotionDirection>("next");
  const [motionKey, setMotionKey] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const showcaseRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const activeConcept = conceptBuilds[activeIndex];
  const shouldPlay = isVisible && !prefersReducedMotion;

  useEffect(() => {
    const node = showcaseRef.current;

    if (!node) {
      return;
    }

    try {
      if (typeof window.IntersectionObserver !== "function") {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.18 },
      );

      observer.observe(node);

      return () => observer.disconnect();
    } catch {
      return;
    }
  }, []);

  const { previousIndex, nextIndex } = useMemo(
    () => ({
      previousIndex:
        activeIndex === 0 ? conceptBuilds.length - 1 : activeIndex - 1,
      nextIndex:
        activeIndex === conceptBuilds.length - 1 ? 0 : activeIndex + 1,
    }),
    [activeIndex],
  );

  function goToConcept(index: number) {
    if (index === activeIndex) {
      return;
    }

    const lastIndex = conceptBuilds.length - 1;
    const wrapsForward = activeIndex === lastIndex && index === 0;
    const wrapsBackward = activeIndex === 0 && index === lastIndex;
    const nextDirection =
      wrapsBackward || (index < activeIndex && !wrapsForward)
        ? "previous"
        : "next";

    setDirection(nextDirection);
    setActiveIndex(index);
    setMotionKey((current) => current + 1);
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) {
      return;
    }

    const changedTouch = event.changedTouches.item(0);

    if (!changedTouch) {
      touchStartX.current = null;
      return;
    }

    const deltaX = touchStartX.current - changedTouch.clientX;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 48) {
      return;
    }

    goToConcept(deltaX > 0 ? nextIndex : previousIndex);
  }

  return (
    <div
      ref={showcaseRef}
      className="concept-build-showcase"
    >
      <div
        className="concept-preview-panel"
        onTouchStart={(event) => {
          const touch = event.touches.item(0);
          touchStartX.current = touch ? touch.clientX : null;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <ConceptPreview
          key={activeConcept.id}
          concept={activeConcept}
          shouldPlay={shouldPlay}
          prefersReducedMotion={prefersReducedMotion}
          direction={direction}
          motionKey={motionKey}
        />
      </div>

      <div
        key={`${activeConcept.id}-${motionKey}`}
        className="concept-info-panel"
        data-motion={prefersReducedMotion ? "static" : "fade"}
        aria-live="polite"
      >
        <span className="concept-build-label">{activeConcept.label}</span>
        <h3 className="concept-build-title">{activeConcept.title}</h3>
        <p className="concept-build-description">{activeConcept.description}</p>
        <div className="concept-copy-rule" aria-hidden="true" />
        <p className="concept-build-copy">{activeConcept.copy}</p>

        <div className="concept-dots" aria-label="Concept build slides">
          {conceptBuilds.map((concept, index) => (
            <button
              key={concept.id}
              type="button"
              aria-label={`Show ${concept.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => goToConcept(index)}
            />
          ))}
        </div>

        <div className="concept-selector-group">
          <p className="concept-selector-heading">Concepts</p>
          <div className="concept-selector-list" aria-label="Concept builds">
            {conceptBuilds.map((concept, index) => (
              <button
                key={concept.id}
                id={`concept-tab-${concept.id}`}
                type="button"
                aria-current={activeIndex === index ? "true" : undefined}
                data-active={activeIndex === index ? "true" : "false"}
                className="concept-selector"
                onClick={() => goToConcept(index)}
              >
                <span>{concept.selectorLabel}</span>
                <span className="concept-selector-dot" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
