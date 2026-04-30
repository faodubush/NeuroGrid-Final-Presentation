import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; onJump?: (i: number) => void; }

const TOC = [
  { n: "01", t: "Introduction & Problem", s: "Global energy challenge" },
  { n: "02", t: "EMS Overview", s: "The brain behind forecasting" },
  { n: "03", t: "Aim & Objectives", s: "What NeuroGrid achieves" },
  { n: "04", t: "Sustainable Goals", s: "UN SDGs · Vision 2030" },
  { n: "05", t: "Literature Review", s: "Prior work & landscape" },
  { n: "06", t: "Research Gaps", s: "Where current EMS falls short" },
  { n: "07", t: "System Architecture", s: "Three-tier architecture" },
  { n: "08", t: "ISMCC Agent Core", s: "Decision-making framework" },
  { n: "09", t: "Federated Learning", s: "Privacy-preserving training" },
  { n: "10", t: "Methodology & Results", s: "Implementation & metrics" },
  { n: "11", t: "Conclusion", s: "Key takeaways" },
  { n: "12", t: "Thank You", s: "Q&A" },
];

export default function Slide02TOC({ slideNumber, totalSlides, onJump }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.25em] text-slide-sky-deep font-semibold mb-3">Agenda</div>
          <h2 className="font-display font-extrabold text-6xl text-slide-ink">Table of Contents</h2>
          <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />
        </div>

        <div className="grid grid-cols-3 gap-5 flex-1 content-start">
          {TOC.map((item, i) => (
            <button
              key={item.n}
              onClick={() => onJump?.(i + 2)}
              className="group text-left glass rounded-2xl p-6 hover:scale-[1.02] hover:shadow-lg transition-all"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl font-bold text-slide-sky-deep">{item.n}</span>
                <div>
                  <div className="font-display font-bold text-2xl text-slide-ink">{item.t}</div>
                  <div className="text-base text-slide-muted mt-1">{item.s}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
