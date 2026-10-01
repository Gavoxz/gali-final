"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export function Magnetic({ href, children, ghost }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const ext = href.startsWith("http");
  return (
    <motion.a ref={ref} href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
      style={{ x, y }} className={`btn ${ghost ? "btn-ghost" : ""}`}
      onMouseMove={(e) => { const r = ref.current!.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.25); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.a>
  );
}
