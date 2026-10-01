"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wordmark } from "./Logo";
import { site, contactHref } from "@/lib/site";
const links = [["FILOSOFIA", "philosophy"], ["SISTEMA", "system"], ["INSIGHTS", "insights"], ["SOBRE", "about"]];
export default function Nav() {
  const [s, setS] = useState(false), [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 60); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  const l = "text-[10px] tracking-[.26em] text-[#8b9098] transition-colors duration-700 hover:text-white";
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <nav className={`flex items-center gap-8 rounded-full transition-all duration-[900ms] ease-out ${s ? "glass bg-black/40 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,.5)]" : "w-full max-w-[1500px] px-2 py-3 md:px-8"}`}>
          <a href="#top" aria-label="GALI"><Wordmark height={s ? 11 : 13} /></a>
          <div className="hidden gap-7 md:flex">{links.map(([t, id]) => <a key={t} className={l} href={`#${id}`}>{t}</a>)}</div>
          <div className="ml-auto hidden gap-6 md:flex"><a className={l} href={site.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a><a className={l} href={contactHref} target="_blank" rel="noopener noreferrer">CONTATO</a></div>
          <button className={`${l} ml-auto md:hidden`} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "FECHAR" : "MENU"}</button>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-black/90 px-8 backdrop-blur-2xl md:hidden">
            {[...links, ["INSTAGRAM", "ig"], ["CONTATO", "ct"]].map(([t, id], i) => {
              const href = id === "ig" ? site.instagram : id === "ct" ? contactHref : `#${id}`;
              return <motion.a key={t} href={href} onClick={() => setOpen(false)} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06, duration: 0.9 }} className="text-2xl font-light tracking-[-.02em]">{t}</motion.a>;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
