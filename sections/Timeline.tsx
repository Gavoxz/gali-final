"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const pts = [["2026", "Fundação", "A estrutura é definida antes de se buscar retorno."], ["2030", "Disciplina", "O processo dura mais que o sentimento."], ["2035", "Continuidade", "O tempo se torna o principal ativo."], ["2040", "Profundidade", "Decisões se acumulam em silêncio."], ["2045", "Legado", "Capital que sobrevive ao seu autor."]];
export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(p, [0, 1], ["0%", "-62%"]);
  const glow = useTransform(p, [0, 1], [0.05, 0.6]);
  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div style={{ opacity: glow }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(130,140,255,.35),transparent_65%)]" />
        <div className="relative z-10 px-6 md:px-12"><p className="eyebrow mb-6">04 / Horizonte</p><h2 className="display mb-20 text-[clamp(1.8rem,3.6vw,3.4rem)]">CONSTRUÍDA PARA<br />O LONGO PRAZO.</h2></div>
        <motion.div style={{ x }} className="relative z-10 flex w-[190vw] gap-0 px-6 md:px-12">
          <div className="absolute left-6 right-0 top-[10px] h-px bg-white/15 md:left-12" />
          {pts.map(([y, t, d]) => (
            <div key={y} className="w-[36vw] shrink-0 md:w-[30vw]">
              <div className="mb-8 h-[21px] w-px bg-white/50" />
              <p className="display text-[clamp(1.6rem,3.4vw,3rem)]">{y}</p>
              <p className="eyebrow mt-4 text-white">{t}</p>
              <p className="mt-2 max-w-[260px] text-sm text-[#8b9098]">{d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
