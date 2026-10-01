"use client";
import { useEffect, useRef } from "react";
export default function DataSection() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!, ctx = cv.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(devicePixelRatio, innerWidth < 768 ? 1 : 1.5);
    let w = 0, h = 0, px = 0.5, tx = 0.5, raf = 0, vis = true;
    const size = () => { w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const N = innerWidth < 768 ? 60 : 120, L = 7; // abstract series, no real data
    const draw = (t: number) => {
      px += (tx - px) * 0.05; ctx.clearRect(0, 0, w, h);
      for (let l = 0; l < L; l++) {
        ctx.beginPath();
        for (let i = 0; i <= N; i++) {
          const u = i / N, d = Math.exp(-Math.pow((u - px) * 5, 2));
          const y = h * (.7 - u * .3) - l * 14 - Math.sin(u * 6 + l * .8 + t * .0002) * (14 + l * 4) * (1 + d * 1.8) - Math.sin(u * 17 + l) * 4;
          i ? ctx.lineTo(u * w, y) : ctx.moveTo(0, y);
        }
        ctx.strokeStyle = `rgba(${200 + l * 8},${205 + l * 6},255,${.1 + l * .05})`; ctx.lineWidth = .7; ctx.stroke();
      }
      ctx.strokeStyle = "rgba(255,255,255,.12)"; ctx.beginPath(); ctx.moveTo(px * w, 0); ctx.lineTo(px * w, h); ctx.stroke();
      for (let i = 0; i < 40; i++) { const u = (i * 0.618) % 1; ctx.fillStyle = `rgba(255,255,255,${.15 + .5 * Math.exp(-Math.pow((u - px) * 6, 2))})`; ctx.fillRect(u * w, h * (.25 + ((i * 53) % 50) / 100), 1.5, 1.5); }
    };
    const loop = (t: number) => { if (vis) draw(t); raf = requestAnimationFrame(loop); };
    size(); addEventListener("resize", size);
    const io = new IntersectionObserver(([e]) => (vis = e.isIntersecting)); io.observe(cv);
    const mv = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width; };
    cv.addEventListener("pointermove", mv);
    reduce ? draw(0) : (raf = requestAnimationFrame(loop));
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); io.disconnect(); };
  }, []);
  return (
    <section id="insights" className="relative h-[90vh] overflow-hidden">
      <div className="absolute left-6 top-24 z-10 md:left-12"><p className="eyebrow mb-6">03 / Perspectiva</p><h2 className="display text-[clamp(1.8rem,3.6vw,3.4rem)]">VEJA O CAPITAL<br />DE OUTRA FORMA.</h2></div>
      <canvas ref={ref} className="h-full w-full" />
      <div className="absolute bottom-8 left-6 right-6 flex justify-between text-[10px] tracking-[.28em] text-[#8b9098] md:left-12 md:right-12"><span>TEMPO</span><span>RISCO</span><span>ALOCAÇÃO</span><span>MOVIMENTO</span></div>
    </section>
  );
}
