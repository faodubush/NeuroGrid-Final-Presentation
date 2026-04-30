import { ReactNode } from "react";
import NeuroLattice from "./NeuroLattice";

interface SlideLayoutProps {
  children: ReactNode;
  /** Show animated NeuroLattice background */
  lattice?: boolean;
  /** Background variant */
  variant?: "default" | "tinted" | "dark";
  /** Slide footer eyebrow */
  eyebrow?: string;
  /** Slide number for footer */
  slideNumber?: number;
  totalSlides?: number;
  className?: string;
}

export default function SlideLayout({
  children,
  lattice = false,
  variant = "default",
  eyebrow = "NeuroGrid ISMCC-MAS",
  slideNumber,
  totalSlides,
  className = "",
}: SlideLayoutProps) {
  const bg =
    variant === "dark"
      ? "bg-slate-900 text-slate-50"
      : variant === "tinted"
      ? "bg-slate-50"
      : "bg-slate-50";

  return (
    <div className={`relative w-full h-full overflow-hidden slide-content ${bg} ${className}`}>
      {/* Soft pastel wash */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(900px 600px at 12% 18%, hsl(var(--slide-sky) / 0.55), transparent 60%), radial-gradient(900px 600px at 88% 22%, hsl(var(--slide-mint) / 0.5), transparent 60%), radial-gradient(900px 700px at 50% 100%, hsl(var(--slide-rose) / 0.45), transparent 60%)",
        }}
      />

      {lattice && (
        <div className="absolute inset-0 opacity-70">
          <NeuroLattice density={7} />
        </div>
      )}

      {/* Top-left brand mark */}
      <div className="absolute top-12 left-16 flex items-center gap-3 z-10">
        <div className="w-10 h-10 rounded-xl bg-slide-gradient shadow-md grid place-items-center">
          <div className="w-3 h-3 rounded-full bg-white/80" />
        </div>
        <div className="text-sm font-semibold tracking-wide text-slide-ink-soft">
          {eyebrow}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-16 right-16 flex items-center justify-between z-10 text-slide-muted">
        <div className="text-sm">Senior II — Spring 2026</div>
        {slideNumber && totalSlides && (
          <div className="text-sm font-mono tabular-nums">
            {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="absolute inset-0 px-24 pt-28 pb-24 z-[5]">
        {children}
      </div>
    </div>
  );
}
