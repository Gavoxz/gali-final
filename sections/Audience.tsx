import { Reveal } from "@/components/Reveal";
export default function Audience() {
  const base = "group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[.07] p-8 transition-[flex-grow] duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] md:min-h-[520px] md:flex-1 md:hover:grow-[1.7] md:p-10";
  return (
    <section id="about" className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
      <Reveal>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className={`${base} bg-[#0b0c0e]`}>
            <svg aria-hidden viewBox="0 0 400 400" className="absolute -right-20 -top-20 h-[130%] w-[130%] text-white/20 opacity-30 transition-all duration-[2400ms] group-hover:scale-110 group-hover:opacity-80" fill="none" stroke="currentColor" strokeWidth=".5">{[60, 100, 140, 180, 220].map((r) => <circle key={r} cx="200" cy="200" r={r} />)}</svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(200,190,255,.12),transparent_55%)]" />
            <span className="eyebrow relative">01</span>
            <div className="relative"><h3 className="display text-[clamp(1.8rem,3.6vw,3.4rem)]">PESSOAL</h3><p className="mt-3 max-w-xs text-sm text-[#8b9098]">Patrimônio pessoal e familiar, estruturado com paciência.</p></div>
          </div>
          <div className={`${base} bg-[#0d0e10]`}>
            <div aria-hidden className="absolute inset-0 opacity-20 transition-opacity duration-[2000ms] group-hover:opacity-60" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)", backgroundSize: "48px 48px", maskImage: "linear-gradient(120deg,transparent 20%,#000)" }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(120,170,255,.12),transparent_55%)]" />
            <span className="eyebrow relative">02</span>
            <div className="relative"><h3 className="display text-[clamp(1.8rem,3.6vw,3.4rem)]">EMPRESARIAL</h3><p className="mt-3 max-w-xs text-sm text-[#8b9098]">Empresas, empresários e estruturas de capital.</p></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
