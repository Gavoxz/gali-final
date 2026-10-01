"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Word({ children }: { children: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.45"] });
  const o = useTransform(scrollYProgress, [0, 1], [0.12, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [40, 0]);
  return <div ref={ref}><motion.p style={{ opacity: o, x }} className="display text-[clamp(1.6rem,3.4vw,3rem)]">{children}.</motion.p></div>;
}
export default function Concept() {
  return (
    <section id="philosophy" className="mx-auto max-w-[1500px] px-6 py-40 md:px-12">
      <p className="eyebrow mb-10">01 / Filosofia</p>
      <h2 className="display mb-32 text-[clamp(2.2rem,5vw,4.5rem)]">CAPITAL<br />É UM SISTEMA.</h2>
      <div className="space-y-6 md:pl-[30%]">{["Capital", "Risco", "Tempo", "Oportunidade", "Estrutura"].map((w) => <Word key={w}>{w}</Word>)}</div>
    </section>
  );
}
