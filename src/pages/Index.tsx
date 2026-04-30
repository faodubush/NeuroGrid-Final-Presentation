import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, Maximize2, Play, X } from "lucide-react";
import ScaledSlide from "@/components/ScaledSlide";
import { SLIDES, TOTAL } from "@/components/slides/registry";
import { cn } from "@/lib/utils";

type Mode = "deck" | "grid";

const Index = () => {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("deck");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goto = useCallback((i: number) => setIndex(Math.max(0, Math.min(TOTAL - 1, i))), []);
  const next = useCallback(() => setIndex(i => Math.min(TOTAL - 1, i + 1)), []);
  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);

  const enterFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen();
    } catch {}
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") goto(0);
      else if (e.key === "End") goto(TOTAL - 1);
      else if (e.key.toLowerCase() === "g") setMode(m => (m === "grid" ? "deck" : "grid"));
      else if (e.key === "Escape" && mode === "grid") setMode("deck");
      else if (e.key === "F5" || e.key.toLowerCase() === "f") { e.preventDefault(); enterFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goto, mode, enterFullscreen]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const Current = SLIDES[index].Component;

  const renderSlide = (i: number) => {
    const S = SLIDES[i].Component;
    return <S slideNumber={i + 1} totalSlides={TOTAL} onJump={goto} />;
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black">
        <ScaledSlide>{renderSlide(index)}</ScaledSlide>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm opacity-30 hover:opacity-100 transition">
          <button onClick={prev} className="p-1.5 hover:bg-white/10 rounded-full"><ChevronLeft className="w-4 h-4" /></button>
          <span className="font-mono tabular-nums">{index + 1} / {TOTAL}</span>
          <button onClick={next} className="p-1.5 hover:bg-white/10 rounded-full"><ChevronRight className="w-4 h-4" /></button>
          <button onClick={() => document.exitFullscreen()} className="p-1.5 hover:bg-white/10 rounded-full"><X className="w-4 h-4" /></button>
        </div>
      </div>
    );
  }

  return (
    <main className="h-screen w-screen flex flex-col bg-slate-100">
      {/* Toolbar */}
      <header className="h-14 px-4 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slide-gradient grid place-items-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">NeuroGrid ISMCC-MAS</div>
            <div className="text-[11px] text-slate-500">Senior II Final Presentation</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMode(m => (m === "grid" ? "deck" : "grid"))}
            className={cn("h-9 px-3 inline-flex items-center gap-2 rounded-lg text-sm font-medium hover:bg-slate-100",
              mode === "grid" && "bg-slate-100 text-slate-900")}
          >
            <LayoutGrid className="w-4 h-4" /> Grid
          </button>
          <button
            onClick={enterFullscreen}
            className="h-9 px-3 inline-flex items-center gap-2 rounded-lg text-sm font-medium hover:bg-slate-100"
          >
            <Maximize2 className="w-4 h-4" /> Fullscreen
          </button>
          <button
            onClick={enterFullscreen}
            className="h-9 px-4 inline-flex items-center gap-2 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
          >
            <Play className="w-4 h-4" /> Present
          </button>
        </div>
      </header>

      {mode === "deck" ? (
        <div className="flex-1 grid grid-cols-[260px_1fr] min-h-0">
          {/* Sidebar */}
          <aside className="border-r border-slate-200 bg-white overflow-y-auto p-3 space-y-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goto(i)}
                className={cn(
                  "w-full text-left rounded-xl border transition-all overflow-hidden group",
                  i === index ? "border-slate-900 ring-2 ring-slate-900/10" : "border-slate-200 hover:border-slate-300"
                )}
              >
                <div className="aspect-video bg-slate-50 relative">
                  <ScaledSlide>{renderSlide(i)}</ScaledSlide>
                </div>
                <div className="px-3 py-2 flex items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-400 tabular-nums w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[13px] font-medium text-slate-800 truncate">{s.title}</span>
                </div>
              </button>
            ))}
          </aside>

          {/* Stage */}
          <section className="relative min-h-0 p-8">
            <div className="w-full h-full rounded-2xl shadow-xl border border-slate-200 overflow-hidden bg-white">
              <ScaledSlide>{renderSlide(index)}</ScaledSlide>
            </div>

            {/* Nav pills */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full shadow-lg border border-slate-200 px-2 py-1.5">
              <button onClick={prev} disabled={index === 0} className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-3 text-sm font-mono tabular-nums text-slate-700">
                {index + 1} <span className="text-slate-400">/ {TOTAL}</span>
              </span>
              <button onClick={next} disabled={index === TOTAL - 1} className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      ) : (
        <section className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">All slides</h1>
                <p className="text-sm text-slate-500">Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 font-mono text-xs">G</kbd> to toggle · click any slide to open</p>
              </div>
              <div className="text-sm text-slate-500">{TOTAL} slides</div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { goto(i); setMode("deck"); }}
                  className="text-left rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-lg transition overflow-hidden group"
                >
                  <div className="aspect-video bg-slate-50 relative">
                    <ScaledSlide>{renderSlide(i)}</ScaledSlide>
                  </div>
                  <div className="px-4 py-3 flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-400 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-semibold text-slate-800 truncate">{s.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
