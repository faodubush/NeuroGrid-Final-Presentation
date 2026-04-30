import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide03Intro({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full grid grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col">
          <div className="text-sm uppercase tracking-[0.25em] text-slide-rose-deep font-semibold mb-3">Problem Statement</div>
          <h2 className="font-display font-extrabold text-6xl text-slide-ink leading-tight">
            The Global <span className="text-slide-sky-deep">Energy Challenge</span>
          </h2>
          <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />

          <p className="mt-8 text-xl text-slide-ink-soft leading-relaxed">
            Energy consumption is rising worldwide as populations grow, cities expand, and people use more
            technology every day. Many countries face higher electricity demand, rising costs, and pressure
            on natural resources.
          </p>
          <p className="mt-5 text-xl text-slide-ink-soft leading-relaxed">
            Traditional energy systems often <span className="font-semibold text-slide-ink">struggle to keep up</span> slow to react, inefficient, and difficult to manage at scale.
          </p>

          <div className="mt-auto grid grid-cols-3 gap-4">
            <div className="chip-sky rounded-2xl p-5">
              <div className="text-4xl font-display font-extrabold">+50%</div>
              <div className="text-sm mt-1">Global electricity demand by 2050</div>
            </div>
            <div className="chip-mint rounded-2xl p-5">
              <div className="text-4xl font-display font-extrabold">8%</div>
              <div className="text-sm mt-1">Annual rise in peak load (urban)</div>
            </div>
            <div className="chip-rose rounded-2xl p-5">
              <div className="text-4xl font-display font-extrabold">$1.6T</div>
              <div className="text-sm mt-1">Required grid investment / year</div>
            </div>
          </div>
          <div className="mt-3 text-[11px] leading-snug text-slide-muted/80">
            <span className="font-semibold uppercase tracking-[0.2em] text-slide-ink-soft/70">Sources</span>
            <div className="mt-1 space-y-0.5">
              <div>[1] IEA, "World Energy Outlook 2024," Paris, France, 2024.</div>
              <div>[2] IEA, "Electricity 2024," Paris, France, Jan. 2024.</div>
              <div>[3] BloombergNEF, "New Energy Outlook 2024," New York, NY, 2024.</div>
            </div>
          </div>
        </div>

        <div className="col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[520px] aspect-square glass-strong rounded-[40px] p-10">
            <div className="absolute -top-6 -right-6 chip-rose rounded-full px-4 py-2 text-sm font-semibold">Demand ↑</div>
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <defs>
                <linearGradient id="bar" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="hsl(204 80% 75%)" />
                  <stop offset="100%" stopColor="hsl(204 80% 45%)" />
                </linearGradient>
              </defs>
              {[40, 60, 85, 110, 140, 175, 215, 255].map((h, i) => (
                <g key={i}>
                  <rect x={20 + i * 35} y={280 - h} width="22" height={h} rx="6" fill="url(#bar)" />
                </g>
              ))}
              <line x1="10" y1="280" x2="290" y2="280" stroke="hsl(214 32% 80%)" strokeWidth="1.5" />
              <path d="M 30 240 Q 90 200 150 160 T 270 70" fill="none" stroke="hsl(0 75% 60%)" strokeWidth="3" strokeDasharray="4 4" />
              <circle cx="270" cy="70" r="6" fill="hsl(0 75% 60%)" />
            </svg>
            <div className="text-center mt-2 text-base text-slide-muted">Worldwide electricity consumption (illustrative)</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
