"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Wordmark } from "@/components/Logo";
const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });
const ease = [0.22, 1, 0.36, 1] as const;
export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] overflow-hidden">
      {/* CSS fallback: always present, WebGL fades over it */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(70,80,130,.16),transparent_55%)]" />
      <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 3, ease }}><Hero3D /></motion.div>
      <motion.div className="pointer-events-none absolute inset-0 grid place-items-center" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 2.4, ease }}>
        <Wordmark height={20} className="md:h-6" />
      </motion.div>
      <motion.div className="absolute inset-x-6 bottom-10 flex items-end justify-between md:inset-x-12" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 2, ease }}>
        <h1 className="max-w-[16ch] text-[clamp(1.1rem,1.8vw,1.6rem)] font-light leading-tight tracking-[-.02em] text-white/85">Capital,<br />sem ruído.</h1>
        <span className="eyebrow hidden md:block">Role</span>
      </motion.div>
    </section>
  );
}
