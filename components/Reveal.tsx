"use client";
import { motion } from "framer-motion";
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  );
}
