import SlideLayout from "../SlideLayout";
import diagram from "@/assets/diagram-ismcc.jpg";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide10ISMCC({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col min-h-0">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-mint-deep font-semibold mb-2">Agent Core</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          ISMCC: Decision-Making Framework
        </h2>
        <div className="mt-3 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-5 grid grid-cols-12 gap-5 flex-1 min-h-0 items-stretch">
          <div className="col-span-3 flex flex-col gap-3.5">
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-1">Architecture</div>
              <p className="text-lg text-slide-ink-soft leading-snug">
                Each agent α = ⟨S, M, C, X⟩ routes environment signals through <span className="font-semibold text-slide-ink">Sensing</span> into an
                <span className="font-semibold text-slide-ink"> Agent Core</span> that orchestrates <span className="font-semibold text-slide-ink">Memory</span>,
                <span className="font-semibold text-slide-ink"> Computation</span>, and <span className="font-semibold text-slide-ink">Communication</span> via forward paths and feedback loops.
              </p>
            </div>
            <div className="glass rounded-2xl p-5 flex-1">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-2">Highlights</div>
              <ul className="space-y-2 text-lg text-slide-ink-soft">
                <li>· Modular subsystems</li>
                <li>· Local autonomy + collaboration</li>
                <li>· Continuous self-optimization</li>
              </ul>
            </div>
          </div>

          <div className="col-span-9 glass-strong rounded-3xl p-3 flex items-center justify-center min-h-0">
            <img
              src={diagram}
              alt="ISMCC agent core: Sensing, Memory, Computation, Communication modules"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
