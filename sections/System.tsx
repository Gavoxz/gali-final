"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const P = [
  { n: "01", t: "PATRIMÔNIO", d: "Estrutura que preserva e faz o capital crescer.", tags: ["Preservação", "Estrutura", "Continuidade"], a: 10, f: 2, s: 9, h: 235 },
  { n: "02", t: "MERCADOS", d: "Contexto antes da convicção.", tags: ["Contexto", "Liquidez", "Fluxo"], a: 26, f: 5, s: 5, h: 265 },
  { n: "03", t: "ESTRATÉGIA", d: "Decisões desenhadas para décadas.", tags: ["Horizonte", "Alocação", "Disciplina"], a: 18, f: 3, s: 14, h: 215 },
  { n: "04", t: "INTELIGÊNCIA", d: "Sinal, separado do ruído.", tags: ["Sinal", "Correlação", "Clareza"], a: 34, f: 8, s: 4, h: 290 },
];
const path = (k: number, p: (typeof P)[0]) => {
  let d = "";
  for (let i = 0; i <= 24; i++) { const u = i / 24, y = 200 + (k - 7) * p.s + Math.sin(u * p.f * 3.14 + k * 0.5) * p.a * (0.4 + k / 14); d += `${i ? "L" : "M"}${u * 600} ${y} `; }
  return d;
};
export default function System() {
  const [i, setI] = useState(0); const p = P[i];
  return (
    <section id="system" className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
      <p className="eyebrow mb-6">02 / Sistema</p>
      <h2 className="display mb-14 text-[clamp(1.8rem,3.6vw,3.4rem)]">O SISTEMA GALI</h2>
      <div className="glass relative grid overflow-hidden rounded-2xl md:grid-cols-[.8fr_1.6fr]">
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" animate={{ background: `radial-gradient(ellipse at 75% 40%,hsla(${p.h},60%,60%,.14),transparent 65%)` }} transition={{ duration: 1.6 }} />
        <ul className="relative z-10 divide-y divide-white/5 border-b border-white/5 md:border-b-0 md:border-r">
          {P.map((m, k) => (
            <li key={m.n}>
              <button onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)} aria-pressed={i === k} className="group flex w-full items-baseline gap-5 px-7 py-6 text-left md:py-9">
                <span className="eyebrow">{m.n}</span>
                <span className={`display text-xl transition-colors duration-1000 md:text-2xl ${i === k ? "text-white" : "text-white/30"}`}>{m.t}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="relative z-10 min-h-[320px] p-7 md:min-h-[440px] md:p-10">
          <svg viewBox="0 0 600 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" fill="none" aria-hidden>
            {Array.from({ length: 15 }).map((_, k) => <motion.path key={k} initial={false} animate={{ d: path(k, p), strokeOpacity: 0.1 + k * 0.045 }} transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} stroke="#dfe6ff" strokeWidth=".6" vectorEffect="non-scaling-stroke" />)}
          </svg>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, filter: "blur(8px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="relative flex h-full flex-col justify-between">
              <p className="max-w-xs text-lg font-light tracking-[-.01em] text-white/90">{p.d}</p>
              <div className="mt-40 flex flex-wrap gap-x-8 gap-y-2 md:mt-64">{p.tags.map((t) => <span key={t} className="eyebrow">{t}</span>)}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
