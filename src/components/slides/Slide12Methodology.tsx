import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; }

const REG = [
  { k: "MAE (kWh)", v: "0.180", chip: "chip-mint" },
  { k: "RMSE (kWh)", v: "0.260", chip: "chip-sky" },
  { k: "MAPE", v: "9%", chip: "chip-rose", note: "Excellent tier" },
];

const CLS = [
  { k: "Accuracy", v: "90%" },
  { k: "Recall (surge)", v: "0.83" },
  { k: "Peak timing error", v: "< 4.0" },
  { k: "F1-Score", v: "0.87" },
];

export default function Slide12Methodology({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col">
        <div className="text-sm uppercase tracking-[0.25em] text-slide-sky-deep font-semibold mb-3">Implementation</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">
          Methodology, Setup & Results
        </h2>
        <div className="mt-4 h-1 w-32 rounded-full bg-slide-gradient" />

        <div className="mt-6 grid grid-cols-12 gap-6 flex-1">
          {/* Setup */}
          <div className="col-span-5 grid grid-rows-3 gap-4">
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-mint-deep font-semibold mb-2">Data</div>
              <div className="text-lg text-slide-ink leading-snug">
                <span className="font-semibold">HEAPO</span> · ~1,400 households · 15-min CSVs · 11-feature schema
              </div>
              <div className="text-xs text-slide-muted mt-3 pt-3 border-t border-slide-line space-y-1">
                <div>• Household_ID</div>
                <div>• Energy Consumption (kWh)</div>
                <div>• Average Hourly Temperature</div>
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-sky-deep font-semibold mb-2">Models</div>
              <div className="text-lg text-slide-ink leading-snug">
                LSTM forecasting · Knowledge distillation · Ollama <span className="font-mono">llama3.1:8b</span> recommender
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-rose-deep font-semibold mb-2">Federated mechanisms</div>
              <div className="text-lg text-slide-ink leading-snug">
                Multi-Krum · Weighted FedAvg Aggregation · Global FedAvg
              </div>
            </div>
          </div>

          {/* Stack + Metrics legend */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="glass-strong rounded-2xl p-5 flex-1">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-3">Backend stack</div>
              <ul className="space-y-2 text-base text-slide-ink">
                <li className="flex justify-between"><span>Python 3.10</span><span className="font-mono text-slide-muted">+PyTorch</span></li>
                <li className="flex justify-between"><span>Apache Spark</span><span className="font-mono text-slide-muted">+MLlib</span></li>
                <li className="flex justify-between"><span>gRPC</span><span className="font-mono text-slide-muted">Protobuf</span></li>
                <li className="flex justify-between"><span>SQLite</span><span className="font-mono text-slide-muted">state</span></li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-slide-muted font-semibold mb-2">Metrics</div>
              <div className="text-base text-slide-ink-soft leading-snug">
                Forecast: MAE · RMSE · MAPE · Peak Error<br/>
                Peak detection: Precision · Recall · F1<br/>
                Federated: honest vs. rejected agents
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="col-span-4 flex flex-col gap-4">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-200">
              <div className="text-xs uppercase tracking-widest text-emerald-700 font-semibold mb-3">Regression — Forecasting</div>
              <div className="space-y-2">
                {REG.map(r => (
                  <div key={r.k} className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                    <div className="text-base text-slide-ink">{r.k}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-extrabold text-2xl text-slide-ink">{r.v}</span>
                      {r.note && <span className="chip-mint rounded-full px-2 py-0.5 text-xs font-semibold">{r.note}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 flex-1">
              <div className="text-xs uppercase tracking-widest text-rose-700 font-semibold mb-3">Classification — Peak Detection</div>
              <div className="grid grid-cols-2 gap-2">
                {CLS.map(r => (
                  <div key={r.k} className="rounded-xl bg-white/80 px-4 py-3">
                    <div className="text-xs text-slide-muted">{r.k}</div>
                    <div className="font-display font-extrabold text-2xl text-slide-ink mt-1">{r.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
