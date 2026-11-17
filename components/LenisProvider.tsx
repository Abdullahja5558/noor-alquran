"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

/**
 * Site-wide buttery smooth scrolling (Lenis).
 * - Smooth wheel / trackpad on desktop, native momentum on touch devices (best feel on phones)
 * - Inner scroll areas marked with `data-lenis-prevent` scroll on their own
 * - Pauses automatically while a modal locks the body
 * - Resets correctly on route change and supports #hash links
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Respect users who prefer reduced motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false, // keep native touch scrolling on mobile (smoothest + no lag)
      orientation: "vertical",
      gestureOrientation: "vertical",
      anchors: false,
      prevent: (node: HTMLElement) =>
        node.hasAttribute?.("data-lenis-prevent") ||
        node.closest?.("[data-lenis-prevent],[role='dialog'],textarea,select") !== null,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Smooth in-page #hash links
    function handleAnchorClick(e: MouseEvent) {
      const a = (e.target as HTMLElement)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.1 });
        history.replaceState(null, "", href);
      }
    }
    document.addEventListener("click", handleAnchorClick);

    // Pause Lenis while a modal locks the page (body overflow hidden / position fixed)
    const bodyObserver = new MutationObserver(() => {
      const s = document.body.style;
      const locked = s.overflow === "hidden" || s.position === "fixed";
      if (locked) lenis.stop();
      else lenis.start();
    });
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      bodyObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  // On route change: go to top (or to the #hash target) without fighting Next.js
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    const hash = window.location.hash;
    const t = setTimeout(() => {
      lenis.resize();
      if (hash && hash.length > 1) {
        const el = document.querySelector(hash);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -80, immediate: true });
          return;
        }
      }
      // Only force top if the page didn't restore a saved position itself
      if (!sessionStorage.getItem("stories_home_scroll")) {
        lenis.scrollTo(window.scrollY, { immediate: true });
      }
    }, 80);
    return () => clearTimeout(t);
  }, [pathname]);

  return <>{children}</>;
}
