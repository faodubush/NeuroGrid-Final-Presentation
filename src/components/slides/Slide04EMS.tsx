import SlideLayout from "../SlideLayout";
import { Activity, Cpu, Gauge, Zap } from "lucide-react";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide04EMS({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-mint-deep font-semibold mb-3">Energy Management Systems</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          The <span className="text-slide-sky-deep">Brain</span> Behind Forecasting
        </h2>
        <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-8 grid grid-cols-12 gap-8 flex-1">
          <div className="col-span-7 space-y-5">
            <p className="text-xl text-slide-ink-soft leading-relaxed">
              EMS act as the brain behind energy optimization continuously monitoring, controlling, and
              automating consumption across buildings, grids, and industrial facilities.
            </p>
            <p className="text-xl text-slide-ink-soft leading-relaxed">
              By identifying waste, shifting loads to off-peak hours, and integrating renewables intelligently,
              an EMS can cut energy use without sacrificing output.
            </p>

            <div className="mt-6 glass rounded-2xl p-6 border-l-4 border-slide-sky-deep">
              <div className="text-sm uppercase tracking-widest text-slide-sky-deep font-semibold mb-2">Key insight</div>
              <p className="text-lg text-slide-ink leading-snug">
                Forecasting is central to EMS effectiveness. To optimize energy use, the system must
                <span className="font-semibold"> predict future demand before it happens.</span>
              </p>
            </div>
          </div>

          <div className="col-span-5">
            <div className="glass-strong rounded-3xl p-8 h-full flex flex-col">
              <div className="text-base uppercase tracking-widest text-slide-muted font-semibold mb-4">EMS control loop</div>
              <div className="grid grid-cols-2 gap-4 flex-1">
                {[
                  { Icon: Activity, label: "Monitor", color: "chip-sky" },
                  { Icon: Cpu, label: "Analyze", color: "chip-mint" },
                  { Icon: Gauge, label: "Decide", color: "chip-rose" },
                  { Icon: Zap, label: "Act", color: "chip-sky" },
                ].map(({ Icon, label, color }) => (
                  <div key={label} className={`${color} rounded-2xl p-5 flex flex-col items-center justify-center gap-3`}>
                    <Icon className="w-10 h-10" strokeWidth={1.6} />
                    <div className="font-display font-bold text-xl">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-display text-7xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, hsl(152 60% 40%), hsl(204 80% 45%))" }}>Smart</span>
                </div>
                <div className="text-base text-slide-muted mt-1">energy management with NeuroGrid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
