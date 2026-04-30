import SlideLayout from "../SlideLayout";
import { Target, ShieldAlert, Timer } from "lucide-react";

interface Props { slideNumber: number; totalSlides: number; }

const GAPS = [
  { Icon: Target, label: "Accuracy", chip: "chip-sky", deep: "text-sky-700",
    gap: "Current EMS forecasting lacks sufficient precision for large-scale deployment." },
  { Icon: ShieldAlert, label: "Privacy", chip: "chip-rose", deep: "text-rose-700",
    gap: "Centralized models expose sensitive household consumption data." },
  { Icon: Timer, label: "Speed", chip: "chip-mint", deep: "text-emerald-700",
    gap: "Real-time edge processing remains challenging at city-scale." },
];

export default function Slide08Gaps({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-rose-deep font-semibold mb-3">Opportunity</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          Research Gaps & <span className="text-slide-sky-deep">Innovation</span>
        </h2>
        <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-8 grid grid-cols-3 gap-6 flex-1">
          {GAPS.map(({ Icon, label, chip, deep, gap }) => (
            <div key={label} className="glass-strong rounded-3xl p-7 flex flex-col">
              <div className={`w-16 h-16 rounded-2xl ${chip} grid place-items-center mb-5`}>
                <Icon className={`w-8 h-8 ${deep}`} strokeWidth={1.8} />
              </div>
              <div className={`font-display font-extrabold text-3xl ${deep}`}>{label}</div>

              <div className="mt-5 pt-5 border-t border-slide-line">
                <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-2">Gap</div>
                <p className="text-xl text-slide-ink-soft leading-snug">{gap}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
