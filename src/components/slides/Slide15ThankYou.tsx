import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide15ThankYou({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout lattice slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full grid place-items-center text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip-mint text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            End of Presentation
          </div>
          <h1 className="font-display font-extrabold text-9xl text-slide-ink leading-none">
            Thank <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, hsl(204 80% 45%), hsl(152 60% 40%), hsl(0 70% 55%))" }}>You</span>
          </h1>
          <p className="mt-8 text-3xl text-slide-ink-soft">We welcome your questions.</p>

          <div className="mt-16 flex items-center justify-center gap-8 text-slide-muted">
            <div className="text-base"><span className="text-slide-ink font-semibold">NeuroGrid ISMCC-MAS</span> · Senior II — Spring 2026</div>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <span className="chip-sky rounded-full px-5 py-2 text-base font-medium">Q & A</span>
            <span className="chip-mint rounded-full px-5 py-2 text-base font-medium">Discussion</span>
            <span className="chip-rose rounded-full px-5 py-2 text-base font-medium">Demo</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
