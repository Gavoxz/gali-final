// GALI identity — drawn geometry (extended, single-weight, mitred). Tones: dark (chrome on black), light (graphite on white), mono (currentColor).
type Tone = "dark" | "light" | "mono";
const G = "M46 6H15L4 22l11 16h28l3-14H29";
const A = "M62 38L84 6l22 32";
const L = "M124 6v32h36";
const I = "M178 6v32";
function Defs({ id, tone, w, h }: { id: string; tone: Tone; w: number; h: number }) {
  const s = tone === "light" ? ["#1b1d20", "#6b7076", "#111"] : ["#5f656c", "#fff", "#8d939b"];
  return <defs><linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={w} y2={h}><stop offset="0" stopColor={s[0]} /><stop offset=".45" stopColor={s[1]} /><stop offset=".7" stopColor={s[2]} /><stop offset="1" stopColor={s[1]} /></linearGradient></defs>;
}
export function Wordmark({ height = 14, tone = "dark", className = "" }: { height?: number; tone?: Tone; className?: string }) {
  const id = `wm-${tone}`, stroke = tone === "mono" ? "currentColor" : `url(#${id})`;
  const d = [G, A, L, I];
  return (
    <svg role="img" aria-label="GALI" height={height} viewBox="0 0 190 44" fill="none" className={className} style={{ overflow: "visible" }}>
      <Defs id={id} tone={tone} w={190} h={44} />
      {tone !== "mono" && d.map((p) => <path key={"s" + p} d={p} transform="translate(.8 1.2)" stroke={tone === "light" ? "#0002" : "#000"} strokeOpacity=".7" strokeWidth="3.2" />)}
      {d.map((p) => <path key={p} d={p} stroke={stroke} strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" />)}
      {tone === "dark" && <path d="M8 6h6" stroke="#fff" strokeOpacity=".9" strokeWidth=".8" />}
    </svg>
  );
}
// Symbol: the angular G whose baseline is the base of the A — one fused mark.
export function Symbol({ size = 32, tone = "dark" }: { size?: number; tone?: Tone }) {
  const id = `sy-${tone}`, stroke = tone === "mono" ? "currentColor" : `url(#${id})`;
  return (
    <svg role="img" aria-label="GALI" width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Defs id={id} tone={tone} w={48} h={48} />
      <path d="M40 9H16L7 24l9 15h24V27" stroke={stroke} strokeWidth="2.6" strokeLinejoin="miter" />
      <path d="M22 39l9-19 9 19" stroke={stroke} strokeWidth="2.6" strokeLinejoin="miter" />
    </svg>
  );
}
