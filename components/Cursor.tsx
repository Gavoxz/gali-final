"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Cursor() {
  const [on, setOn] = useState(false), [big, setBig] = useState(false);
  const x = useMotionValue(-50), y = useMotionValue(-50);
  const sx = useSpring(x, { stiffness: 260, damping: 30 }), sy = useSpring(y, { stiffness: 260, damping: 30 });
  useEffect(() => {
    if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const m = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,[data-cursor]")); };
    addEventListener("pointermove", m, { passive: true });
    return () => { removeEventListener("pointermove", m); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  return <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[70] -ml-[3px] -mt-[3px]"><motion.div animate={{ width: big ? 34 : 6, height: big ? 34 : 6, x: big ? -14 : 0, y: big ? -14 : 0, opacity: big ? 0.5 : 0.9 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="rounded-full border border-white/70 bg-white/80 mix-blend-difference" style={{ background: big ? "transparent" : undefined }} /></motion.div>;
}
