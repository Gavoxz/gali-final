"use client";
import { useState } from "react";
const rows: [string, number[]][] = [["MERCADO", [30, 55, 40, 70]], ["MACRO", [20, 65, 50, 30]], ["RISCO", [60, 25, 45, 35]], ["CARTEIRA", [45, 35, 70, 55]], ["OPORTUNIDADE", [25, 50, 30, 75]]];
function Panel({ on, hot }: { on: Set<string>; hot?: boolean }) {
  return (
    <div className="space-y-5 p-6 md:p-12">
      {rows.map(([n, b], r) => (
        <div key={n} className="flex items-center gap-4 transition-all duration-[1400ms] md:gap-6" style={{ opacity: on.has(n) ? 1 : 0.1, transform: `translateX(${on.has(n) ? 0 : -12}px)`, transitionDelay: `${r * 60}ms` }}>
          <span className={`w-24 text-[10px] tracking-[.22em] md:w-32 md:text-[11px] ${hot ? "text-white" : "text-white/25"}`}>{n}</span>
          <div className="flex flex-1 gap-2">{b.map((v, i) => <div key={i} className={`h-5 rounded-sm md:h-6 ${hot ? "bg-gradient-to-r from-white/70 to-indigo-300/30" : "bg-white/[.05]"}`} style={{ width: `${v}%` }} />)}</div>
        </div>
      ))}
    </div>
  );
}
export default function Layers() {
  const [on, setOn] = useState(new Set(rows.map((r) => r[0])));
  const toggle = (n: string) => setOn((s) => { const x = new Set(s); x.has(n) ? x.delete(n) : x.add(n); return x; });
  const mask = "radial-gradient(circle 240px at var(--mx,-999px) var(--my,-999px),#000,transparent)";
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
      <p className="eyebrow mb-6">05 / Inteligência</p>
      <h2 className="display mb-10 text-[clamp(1.8rem,3.6vw,3.4rem)]">CAMADA DE INTELIGÊNCIA</h2>
      <div className="mb-4 flex flex-wrap gap-2">{rows.map(([n]) => <button key={n} aria-pressed={on.has(n)} onClick={() => toggle(n)} className={`rounded-full border px-4 py-2 text-[10px] tracking-[.22em] transition-colors duration-700 ${on.has(n) ? "border-white/40 text-white" : "border-white/10 text-white/35"}`}>{n}</button>)}</div>
      <div className="glass relative overflow-hidden rounded-2xl"
        onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`); }}
        onPointerLeave={(e) => e.currentTarget.style.setProperty("--mx", "-999px")}>
        <Panel on={on} />
        <div className="pointer-events-none absolute inset-0" style={{ WebkitMaskImage: mask, maskImage: mask }}><Panel on={on} hot /></div>
      </div>
      <p className="mt-4 text-[10px] tracking-[.2em] text-[#8b9098]">INTERFACE ILUSTRATIVA. SEM DADOS REAIS.</p>
    </section>
  );
}
