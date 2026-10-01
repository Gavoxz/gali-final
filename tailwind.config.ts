import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx","./components/**/*.tsx","./sections/**/*.tsx"],
theme:{extend:{colors:{ink:"#050505",void:"#08090A",slab:"#101113",graphite:"#17191C",mist:"#EDEDED"},fontFamily:{sans:["var(--font-inter)","Helvetica Neue","sans-serif"]}}},plugins:[]} satisfies Config;
