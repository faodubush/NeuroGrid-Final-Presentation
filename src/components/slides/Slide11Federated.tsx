import SlideLayout from "../SlideLayout";
import { Shield, RefreshCw } from "lucide-react";
import diagram from "@/assets/diagram-federated.jpg";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide11Federated({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col min-h-0">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-rose-deep font-semibold mb-2">Federated Learning</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          A Privacy-Preserving Training Round
        </h2>
        <div className="mt-3 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-5 grid grid-cols-12 gap-5 flex-1 min-h-0 items-stretch">
          <div className="col-span-3 flex flex-col gap-3.5">
            <div className="glass rounded-2xl p-4 flex gap-3">
              <Shield className="w-8 h-8 text-emerald-300 shrink-0" />
              <div>
                <div className="font-display font-bold text-xl text-slide-ink">Multi-Krum</div>
                <p className="text-base text-slide-ink-soft mt-1 leading-snug">Robust aggregation excludes Byzantine gradients before averaging.</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-4 flex gap-3">
              <RefreshCw className="w-8 h-8 text-sky-300 shrink-0" />
              <div>
                <div className="font-display font-bold text-xl text-slide-ink">Weighted FedAvg Aggregation</div>
                <p className="text-base text-slide-ink-soft mt-1 leading-snug">Weights local updates by data size and quality before averaging.</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-4 flex gap-3 flex-1">
              <Shield className="w-8 h-8 text-rose-300 shrink-0" />
              <div>
                <div className="font-display font-bold text-xl text-slide-ink">Global FedAvg</div>
                <p className="text-base text-slide-ink-soft mt-1 leading-snug">Combines district models into one city-wide model each round.</p>
              </div>
            </div>
          </div>

          <div className="col-span-9 glass-strong rounded-3xl p-3 flex items-center justify-center min-h-0">
            <img
              src={diagram}
              alt="Federated learning round: local training, district aggregation, city aggregation, convergence loop"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
