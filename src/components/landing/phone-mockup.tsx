import { Play, RotateCcw, SkipForward, Star } from "lucide-react";

const RING_R = 58;
const RING_C = 2 * Math.PI * RING_R;
const PROGRESS = 0.68;

const tiles: Array<{ label: string; sub: string; variant: "purple" | "gold" }> = [
  { label: "HOLD", sub: "5s", variant: "gold" },
  { label: "KEGEL", sub: "10x", variant: "purple" },
  { label: "SQUEEZE", sub: "5s", variant: "purple" },
  { label: "QUICK", sub: "15x", variant: "purple" },
  { label: "RELAX", sub: "8s", variant: "purple" },
  { label: "LIFT", sub: "10x", variant: "purple" },
  { label: "PULSE", sub: "12x", variant: "purple" },
  { label: "REST", sub: "30s", variant: "gold" },
  { label: "HOLD", sub: "3s", variant: "purple" },
];

function Ring() {
  return (
    <div className="relative w-[150px] h-[150px] mx-auto breathe">
      <svg
        viewBox="0 0 140 140"
        className="w-full h-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="70"
          cy="70"
          r={RING_R}
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="9"
        />
        <circle
          cx="70"
          cy="70"
          r={RING_R}
          fill="none"
          stroke="#876c9a"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={RING_C}
          strokeDashoffset={RING_C * (1 - PROGRESS)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-primary leading-none">
          68%
        </span>
        <span className="text-[10px] tracking-[.25em] text-muted-foreground mt-1">
          18 REPS
        </span>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="Golonger app session screen">
      <div className="notch" />
      <div className="screen">
        <div className="absolute w-40 h-40 rounded-full bg-primary/20 blur-3xl right-0 bottom-0" />

        <div className="text-center pt-14">
          <div className="text-[9px] tracking-[.3em] text-muted-foreground">
            TODAY&apos;S SESSION
          </div>
          <div className="hero-title text-[26px] mt-1.5 tracking-normal">
            WEEK 3 · DAY 2
          </div>
        </div>

        <div className="mt-6">
          <Ring />
        </div>

        <div className="grid grid-cols-3 gap-2.5 px-7 mt-6">
          {tiles.map((tile) => (
            <div
              key={`${tile.label}-${tile.sub}`}
              className={`tile ${tile.variant === "gold" ? "tile-gold" : "tile-purple"} aspect-square`}
            >
              <span className="text-[11px] font-extrabold leading-none">
                {tile.label}
              </span>
              <span className="text-[10px] font-semibold opacity-70 leading-none">
                {tile.sub}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-4 right-4 flex gap-2 text-xs">
          <div className="flex-1 bg-[#17191D] rounded-lg py-3 text-center flex items-center justify-center gap-1.5 text-muted-foreground">
            <RotateCcw className="size-3.5" />
            RESET
          </div>
          <div className="flex-1 bg-primary rounded-lg py-3 text-center flex items-center justify-center gap-1.5 text-white font-bold">
            <Play className="size-3.5 fill-current" />
            START
          </div>
          <div className="w-12 bg-[#17191D] rounded-lg flex items-center justify-center text-muted-foreground">
            <SkipForward className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RatingBadge() {
  return (
    <div className="bg-card border border-border rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,.5)]">
      <div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 text-gold fill-current" />
          ))}
        </div>
        <div className="text-sm font-bold leading-none mt-1.5">4.8 rating</div>
        <div className="text-[10px] text-muted-foreground mt-1">
          12,400+ reviews
        </div>
      </div>
    </div>
  );
}