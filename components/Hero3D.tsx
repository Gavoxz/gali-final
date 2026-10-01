"use client";
import { useEffect, useRef } from "react";
// Optical black-glass slab. WebGL only here: transmission + dispersion + env reflections are not reproducible in CSS.
export default function Hero3D() {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = box.current!; let dead = false, cleanup = () => {};
    const weak = (navigator.hardwareConcurrency || 8) < 4 || ((navigator as any).deviceMemory || 8) < 4;
    if (weak) return;
    (async () => {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const { RoundedBoxGeometry } = await import("three/examples/jsm/geometries/RoundedBoxGeometry.js");
      if (dead) return;
      const mobile = innerWidth < 768, reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      let r: import("three").WebGLRenderer;
      try { r = new THREE.WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: "high-performance" }); } catch { return; }
      r.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.25 : 1.75));
      r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.85;
      el.appendChild(r.domElement); r.domElement.style.cssText = "width:100%;height:100%;display:block";
      const scene = new THREE.Scene();
      const pm = new THREE.PMREMGenerator(r); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
      const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      const geo = new RoundedBoxGeometry(2.6, 1.7, 0.34, 6, 0.16);
      const mat = new THREE.MeshPhysicalMaterial({ color: 0x07080a, roughness: 0.06, metalness: 0, transmission: 1, thickness: 1.4, ior: 1.52, dispersion: 0.4, iridescence: 0.5, iridescenceIOR: 1.3, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.1 } as any);
      const slab = new THREE.Mesh(geo, mat);
      const edge = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 40), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }));
      slab.add(edge);
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 3), new THREE.MeshBasicMaterial({ color: 0xdfe6ff }));
      strip.position.z = -0.7; strip.rotation.z = 0.5;
      scene.add(slab, strip);
      const size = () => { const w = el.clientWidth, h = el.clientHeight; r.setSize(w, h, false); cam.aspect = w / h; cam.position.z = w / h < 1 ? 11 : 8.2; cam.updateProjectionMatrix(); };
      size(); const ro = new ResizeObserver(size); ro.observe(el);
      let tx = 0, ty = 0, cx = 0, cy = 0, vis = true, raf = 0;
      const mv = (e: PointerEvent) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; };
      addEventListener("pointermove", mv, { passive: true });
      const io = new IntersectionObserver(([e]) => (vis = e.isIntersecting)); io.observe(el);
      const frame = (t: number) => {
        raf = requestAnimationFrame(frame); if (!vis) return;
        cx += (tx - cx) * 0.035; cy += (ty - cy) * 0.035;
        slab.rotation.y = cx * 0.7 + Math.sin(t * 0.00012) * 0.12; slab.rotation.x = cy * 0.4;
        strip.position.x = Math.sin(t * 0.00018) * 1.6 + cx * 2.2;
        r.render(scene, cam);
      };
      reduce ? (r.render(scene, cam)) : (raf = requestAnimationFrame(frame));
      el.style.opacity = "1";
      cleanup = () => { cancelAnimationFrame(raf); removeEventListener("pointermove", mv); ro.disconnect(); io.disconnect(); r.dispose(); geo.dispose(); mat.dispose(); r.domElement.remove(); };
    })();
    return () => { dead = true; cleanup(); };
  }, []);
  return <div ref={box} className="h-full w-full opacity-0 transition-opacity duration-[3000ms]" aria-hidden />;
}
