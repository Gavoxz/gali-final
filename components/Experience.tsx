"use client";
import dynamic from "next/dynamic";
import { useLenis } from "@/hooks/useLenis";
import Nav from "./Nav";
import Cursor from "./Cursor";
import Hero from "@/sections/Hero";
import Concept from "@/sections/Concept";
import System from "@/sections/System";
import Audience from "@/sections/Audience";
import { Social, Final, Footer } from "@/sections/Closing";
const DataSection = dynamic(() => import("@/sections/DataSection"), { ssr: false });
const Timeline = dynamic(() => import("@/sections/Timeline"), { ssr: false });
const Layers = dynamic(() => import("@/sections/Layers"), { ssr: false });
export default function Experience() {
  useLenis();
  return <main><Cursor /><Nav /><Hero /><Concept /><System /><DataSection /><Timeline /><Audience /><Layers /><Social /><Final /><Footer /></main>;
}
