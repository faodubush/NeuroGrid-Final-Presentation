import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide01Cover({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout lattice variant="default" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute top-8 right-8">
        <div className="text-base font-semibold tracking-widest text-slide-muted">Effat University</div>
      </div>
      <div className="h-full grid grid-cols-12 gap-12 items-center">
        <div className="col-span-7 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip-sky text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-slide-sky-deep animate-pulse" />
            Senior II Final Presentation
          </div>
          <h1 className="font-display font-extrabold text-slide-ink leading-[0.95] tracking-tight">
            <span className="text-7xl block">NeuroGrid</span>
            <span className="text-6xl block bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, hsl(204 80% 40%), hsl(152 60% 40%), hsl(0 70% 55%))" }}>
              ISMCC-MAS
            </span>
          </h1>
          <p className="mt-8 text-2xl text-slide-ink-soft leading-snug max-w-3xl">
            Privacy-Preserving and Byzantine-Resistant Multi-Agent Energy Management System
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 max-w-2xl">
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-muted mb-2">Presenters</div>
              <div className="text-lg font-semibold text-slide-ink">Fahad Dubush</div>
              <div className="text-lg font-semibold text-slide-ink">Mohammed Albarazi</div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-muted mb-2">Supervision</div>
              <div className="text-lg font-semibold text-slide-ink">Dr. Naila Marir</div>
              <div className="text-base text-slide-ink">Passent Elkafrawy</div>
              <div className="text-base text-slide-ink">Course Instructor: Dr. Fidaa Abed</div>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 text-slide-muted text-base">
            <span className="w-8 h-px bg-slide-line" />
            30 April · Spring 2026
          </div>
        </div>

        <div className="col-span-5 relative h-full flex items-center justify-center">
          <div className="relative w-[520px] h-[520px] animate-float-slow">
            <div className="absolute inset-0 rounded-full bg-slide-gradient blur-3xl opacity-60" />
            <div className="absolute inset-8 rounded-full glass-strong grid place-items-center">
              <svg viewBox="0 0 200 200" className="w-[360px] h-[360px]">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="hsl(204 80% 55%)" />
                    <stop offset="50%" stopColor="hsl(152 60% 50%)" />
                    <stop offset="100%" stopColor="hsl(0 70% 65%)" />
                  </linearGradient>
                </defs>
                {[0,1,2,3].map(r => (
                  <circle key={r} cx="100" cy="100" r={30 + r*20} fill="none" stroke="url(#g1)" strokeWidth="1.2" opacity={0.5 - r*0.08} />
                ))}
                {Array.from({length: 12}).map((_,i) => {
                  const a = (i/12)*Math.PI*2;
                  const x = 100 + Math.cos(a)*70;
                  const y = 100 + Math.sin(a)*70;
                  return <circle key={i} cx={x} cy={y} r="3.5" fill="url(#g1)" />;
                })}
                {Array.from({length: 12}).map((_,i) => {
                  const a = (i/12)*Math.PI*2;
                  const x = 100 + Math.cos(a)*70;
                  const y = 100 + Math.sin(a)*70;
                  return <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="url(#g1)" strokeWidth="0.8" opacity="0.4" />;
                })}
                <circle cx="100" cy="100" r="8" fill="hsl(215 90% 35%)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
