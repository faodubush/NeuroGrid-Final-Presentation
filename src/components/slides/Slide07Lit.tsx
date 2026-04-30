import SlideLayout from "../SlideLayout";

interface Props { slideNumber: number; totalSlides: number; }

const ROWS = [
  { y: "2025", a: "Rajaperumal & Columbus — Smart Grid Evolution Review", m: "Survey of AI, Digital Twins, IoE in smart grids", g: "Conceptual only, no practical implementation" },
  { y: "2023", a: "Gooi et al. — Edge Intelligence in Smart Grid", m: "Survey of edge AI and federated learning frameworks", g: "Resource constraints and data bias not fully addressed" },
  { y: "2022", a: "Zhang et al. — HEF-EMS Edge–Fog–Cloud System", m: "Hierarchical EMS with cloud optimization", g: "No privacy-preserving collaborative learning" },
  { y: "2025", a: "Huang et al. — Three-layer Edge EMS", m: "Edge monitoring with cloud optimization", g: "Limited scalability beyond user-level systems" },
  { y: "2025", a: "Jackman et al. — SDEN Hybrid Energy Network", m: "Edge–fog–cloud with federated GNN", g: "Focused on fault handling, not full EMS optimization" },
  { y: "2024", a: "Tariq et al. — FL Security IDS for Smart Grid", m: "Federated SVM anomaly detection", g: "Limited scalability in large real-time grids" },
  { y: "2022", a: "Kumar et al. — FedEnergy FL System", m: "Federated learning for energy prediction", g: "Weak real-time edge response and latency handling" },
  { y: "2023", a: "Chen et al. — EdgeRL Energy Optimization", m: "Deep reinforcement learning at edge", g: "Limited multi-building coordination" },
  { y: "2024", a: "Peixoto et al. — Edge–Cloud HEMS", m: "Deep Q-learning with cloud forecasting", g: "Limited long-term scalability evaluation" },
  { y: "2023", a: "Mei et al. — Edge Fault Detection System", m: "CNN with attention mechanism", g: "No full system-level integration or control strategy" },
];

export default function Slide07Lit({ slideNumber, totalSlides }: Props) {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="h-full flex flex-col min-h-0">
        <div className="text-[14px] uppercase tracking-[0.25em] text-slide-rose-deep font-semibold mb-1.5">Prior Work</div>
        <h2 className="font-display font-extrabold text-5xl text-slide-ink leading-tight">Literature Review</h2>
        <div className="mt-2 h-1 w-28 rounded-full bg-slide-gradient" />

        <div className="mt-2 glass-strong rounded-3xl p-4 flex-1 overflow-hidden min-h-0 w-[99%] mx-auto">
          <div className="grid grid-cols-12 gap-3 px-3 py-3 text-[17px] uppercase tracking-widest text-slide-muted font-semibold border-b border-slide-line">
            <div className="col-span-1">Year</div>
            <div className="col-span-5">Author & Title</div>
            <div className="col-span-3">Method</div>
            <div className="col-span-3">Gaps</div>
          </div>
          <div className="divide-y divide-slide-line/60">
            {ROWS.map((r, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 px-3 py-3.5 items-start hover:bg-white/40 rounded-xl">
                <div className="col-span-1">
                  <span className="chip-sky rounded-full px-2.5 py-1 text-[15px] font-mono font-semibold">{r.y}</span>
                </div>
                <div className="col-span-5 text-[20px] text-slide-ink font-medium leading-tight">{r.a}</div>
                <div className="col-span-3 text-[18px] text-slide-ink-soft leading-tight">{r.m}</div>
                <div className="col-span-3 text-[18px] text-rose-700 leading-tight">{r.g}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
