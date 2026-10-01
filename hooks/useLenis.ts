"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export function useLenis() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ lerp: 0.08 }); let id = 0;
    const raf = (t: number) => { l.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); };
  }, []);
}
