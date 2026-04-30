import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; }

const SDG = [
  { n: 7, color: "#FCC30B", t: "Affordable & Clean Energy",
    body: "Supporting smarter energy distribution and improving efficiency in power consumption." },
  { n: 9, color: "#FD6925", t: "Industry, Innovation & Infrastructure",
    body: "Promoting AI-driven grid modernization through advanced digital infrastructure." },
  { n: 11, color: "#FD9D24", t: "Sustainable Cities & Communities",
    body: "Enhancing urban energy reliability for smarter and more sustainable cities." },
  { n: 13, color: "#3F7E44", t: "Climate Action",
    body: "Reducing energy waste and emissions through optimized energy management." },
];

export default function Slide06SDG({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-mint-deep font-semibold mb-3">Global Alignment</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          UN Sustainable Development Goals
        </h2>
        <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-8 grid grid-cols-4 gap-5 flex-1">
          {SDG.map(({ n, color, t, body }) => (
            <div key={n} className="glass rounded-3xl p-6 flex flex-col">
              <div className="rounded-2xl px-4 py-3 text-white font-display font-extrabold flex items-center justify-between" style={{ background: color }}>
                <span className="text-3xl">SDG {n}</span>
                <span className="text-xs uppercase tracking-widest opacity-90">UN</span>
              </div>
              <div className="font-display font-bold text-2xl text-slide-ink mt-4 leading-tight">{t}</div>
              <p className="text-base text-slide-muted mt-3 leading-snug">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 glass-strong rounded-3xl p-6 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl grid place-items-center text-white font-display font-extrabold text-2xl shadow-md" style={{ background: "linear-gradient(135deg,#006C35,#00C389)" }}>
            2030
          </div>
          <div className="flex-1">
            <div className="text-sm uppercase tracking-widest text-slide-muted font-semibold">Saudi Arabia Vision 2030</div>
            <div className="text-xl text-slide-ink leading-snug mt-1">
              Aligned with the Kingdom's drive toward a sustainable, AI-enabled energy future and digital infrastructure leadership.
            </div>
          </div>
          <div className="flex gap-2">
            <span className="chip-mint rounded-full px-4 py-2 text-sm font-medium">Sustainability</span>
            <span className="chip-sky rounded-full px-4 py-2 text-sm font-medium">Innovation</span>
            <span className="chip-rose rounded-full px-4 py-2 text-sm font-medium">Resilience</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
