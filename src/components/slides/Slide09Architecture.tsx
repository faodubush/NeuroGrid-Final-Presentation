import SlideLayout from "../SlideLayout";
import { ArrowUp, ArrowDown } from "lucide-react";
import diagram from "@/assets/diagram-architecture.jpg";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide09Architecture({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col min-h-0">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-sky-deep font-semibold mb-2">System Architecture</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          Three-Tier Architecture
        </h2>
        <div className="mt-3 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-5 grid grid-cols-12 gap-5 flex-1 min-h-0 items-stretch">
          <div className="col-span-3 flex flex-col gap-3.5">
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-1">Concept</div>
              <p className="text-lg text-slide-ink-soft leading-snug">
                A three-tier hierarchy decoupling local <span className="font-semibold text-slide-ink">building training</span>,
                <span className="font-semibold text-slide-ink"> district aggregation</span>, and global <span className="font-semibold text-slide-ink">city policy</span>.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-2">Bidirectional flow</div>
              <ul className="space-y-2 text-lg text-slide-ink-soft">
                <li className="flex gap-2"><ArrowUp className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> Local gradients → district → city</li>
                <li className="flex gap-2"><ArrowDown className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" /> Global policy → district → buildings</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5 flex-1">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-1">Why hierarchy?</div>
              <p className="text-lg text-slide-ink-soft leading-snug">Reduces bandwidth, isolates failures, and enables locality-aware optimization at every scale.</p>
            </div>
          </div>

          <div className="col-span-9 glass-strong rounded-3xl p-3 flex items-center justify-center min-h-0">
            <img
              src={diagram}
              alt="Three-tier federated architecture: building, district, and city layers"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
