import SlideLayout from "../SlideLayout";
import { TrendingUp, Target, Lock, Zap } from "lucide-react";

interface Props { slideNumber: number; totalSlides: number; }

const OBJ = [
  { Icon: TrendingUp, label: "Forecast", color: "from-sky-200 to-sky-50", text: "text-sky-700",
    body: "Predict future energy demand to enable proactive scheduling and replace reactive decision-making." },
  { Icon: Target, label: "Accurate", color: "from-emerald-200 to-emerald-50", text: "text-emerald-700",
    body: "Minimize prediction error to avoid waste, reduce costs, and ensure grid stability." },
  { Icon: Lock, label: "Private", color: "from-rose-200 to-rose-50", text: "text-rose-700",
    body: "Protect sensitive user data by training models locally without sharing raw energy readings." },
  { Icon: Zap, label: "Fast", color: "from-amber-200 to-amber-50", text: "text-amber-700",
    body: "Deliver real-time predictions on edge devices to support time-critical EMS decisions." },
];

export default function Slide05Aim({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-sky-deep font-semibold mb-3">Aim & Objectives</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          NeuroGrid ISMCC-MAS
        </h2>
        <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-6 glass rounded-2xl p-6">
          <div className="text-sm uppercase tracking-widest text-slide-muted font-semibold mb-2">Aim</div>
          <p className="text-lg text-slide-ink-soft leading-relaxed">
            To develop <span className="font-semibold text-slide-ink">NeuroGrid ISMCC-MAS</span>, a
            privacy-preserving and Byzantine-resistant multi-agent system that employs a three-tier
            federated architecture and local LLMs to transform large-scale smart grid data into resilient,
            personalized energy management recommendations.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-5 flex-1">
          {OBJ.map(({ Icon, label, color, text, body }) => (
            <div key={label} className={`rounded-3xl p-6 bg-gradient-to-br ${color} shadow-md flex flex-col`}>
              <div className={`w-14 h-14 rounded-2xl bg-white/80 grid place-items-center mb-4 ${text}`}>
                <Icon className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <div className={`font-display font-extrabold text-3xl ${text} mb-2`}>{label}</div>
              <p className="text-base text-slate-700 leading-snug">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
