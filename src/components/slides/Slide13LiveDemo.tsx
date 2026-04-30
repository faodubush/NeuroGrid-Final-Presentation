import SlideLayout from "../SlideLayout";
import { PlayCircle } from "lucide-react";
import demoVideo from "../../../Live Demo.mp4";

interface Props { slideNumber: number; totalSlides: number; }

export default function Slide13LiveDemo({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-sky-deep font-semibold mb-8">Experience</div>
        
        <div className="flex flex-col items-center gap-6 translate-y-4">
          <h2 className="font-display font-extrabold text-6xl text-slide-ink leading-tight text-center max-w-2xl">
            Live Demo Video
          </h2>

          <div className="mt-1 h-1 w-48 rounded-full bg-slide-gradient mx-auto" />

          <div className="w-full max-w-4xl glass-strong rounded-[2rem] p-4 shadow-xl border border-white/40">
            <video
              className="w-full aspect-video rounded-[1.5rem] bg-black object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <p className="text-xl text-slide-ink-soft text-center max-w-xl mt-6">
            Witness NeuroGrid's intelligence in action
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
