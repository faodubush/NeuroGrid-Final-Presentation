import SlideLayout from "../SlideLayout";
import { CheckCircle2 } from "lucide-react";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide13Conclusion({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full grid grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col">
          <div className="text-sm uppercase tracking-[0.25em] text-slide-mint-deep font-semibold mb-3">Conclusion</div>
          <h2 className="font-display font-extrabold text-6xl text-slide-ink leading-[1.05]">
            Smart-grid intelligence doesn't have to choose between
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, hsl(204 80% 45%), hsl(152 60% 40%), hsl(0 70% 55%))" }}> accuracy, privacy, and resilience.</span>
          </h2>
          <div className="mt-6 h-1 w-32 rounded-full bg-slide-gradient" />

          <p className="mt-8 text-xl text-slide-ink-soft leading-relaxed">
            By combining a <span className="font-semibold text-slide-ink">three-tier ISMCC Multi Agents federated architecture</span>,
            <span className="font-semibold text-slide-ink"> Multi-Krum Byzantine defense</span>, and a
            <span className="font-semibold text-slide-ink"> local LLM recommender</span>, NeuroGrid delivers strong
            forecasting and reliable peak detection all while keeping raw household data on the edge.
          </p>

          <div className="mt-auto glass-strong rounded-3xl p-6 border-l-4 border-emerald-500">
            <div className="text-base text-slide-ink-soft">A scalable, privacy-preserving, and attack-resistant foundation for next-generation Energy Management Systems.</div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl p-6 chip-mint">
            <div className="text-xs uppercase tracking-widest font-semibold mb-3">Forecasting</div>
            <div className="flex items-baseline gap-3">
              <span className="font-display font-extrabold text-6xl">0.18</span>
              <span className="text-lg">kWh MAE</span>
            </div>
            <div className="text-base mt-2">MAPE 9% · Excellent tier</div>
          </div>
          <div className="rounded-3xl p-6 chip-sky">
            <div className="text-xs uppercase tracking-widest font-semibold mb-3">Peak detection</div>
            <div className="flex items-baseline gap-3">
              <span className="font-display font-extrabold text-6xl">0.87</span>
              <span className="text-lg">F1</span>
            </div>
            <div className="text-base mt-2">Recall 0.83 · Accuracy 90%</div>
          </div>
          <div className="rounded-3xl p-6 chip-rose flex-1">
            <div className="text-xs uppercase tracking-widest font-semibold mb-3">Pillars delivered</div>
            <ul className="space-y-2">
              {["Privacy-preserving training", "Byzantine resilience", "Accurate forecasting predictions", "Fast grid response detection", "Personalized recommendations"].map(p => (
                <li key={p} className="flex items-center gap-2 text-base"><CheckCircle2 className="w-5 h-5" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
