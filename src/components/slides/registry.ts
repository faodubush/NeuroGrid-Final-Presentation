import { ReactNode } from "react";

export interface SlideMeta {
  id: string;
  title: string;
  Component: React.ComponentType<{ slideNumber: number; totalSlides: number; onJump?: (i: number) => void }>;
}

import Slide01Cover from "./Slide01Cover";
import Slide02TOC from "./Slide02TOC";
import Slide03Intro from "./Slide03Intro";
import Slide04EMS from "./Slide04EMS";
import Slide05Aim from "./Slide05Aim";
import Slide06SDG from "./Slide06SDG";
import Slide07Lit from "./Slide07Lit";
import Slide08Gaps from "./Slide08Gaps";
import Slide09Architecture from "./Slide09Architecture";
import Slide10ISMCC from "./Slide10ISMCC";
import Slide11Federated from "./Slide11Federated";
import Slide12Methodology from "./Slide12Methodology";
import Slide13LiveDemo from "./Slide13LiveDemo";
import Slide14Conclusion from "./Slide14Conclusion";
import Slide15ThankYou from "./Slide15ThankYou";

export const SLIDES: SlideMeta[] = [
  { id: "cover", title: "Cover", Component: Slide01Cover },
  { id: "toc", title: "Table of Contents", Component: Slide02TOC },
  { id: "intro", title: "Introduction", Component: Slide03Intro },
  { id: "ems", title: "EMS Overview", Component: Slide04EMS },
  { id: "aim", title: "Aim & Objectives", Component: Slide05Aim },
  { id: "sdg", title: "SDG Alignment", Component: Slide06SDG },
  { id: "lit", title: "Literature Review", Component: Slide07Lit },
  { id: "gaps", title: "Research Gaps", Component: Slide08Gaps },
  { id: "arch", title: "Architecture", Component: Slide09Architecture },
  { id: "ismcc", title: "ISMCC Core", Component: Slide10ISMCC },
  { id: "fl", title: "Federated Learning", Component: Slide11Federated },
  { id: "methods", title: "Methodology & Results", Component: Slide12Methodology },
  { id: "livedemo", title: "Live Demo", Component: Slide13LiveDemo },
  { id: "conclusion", title: "Conclusion", Component: Slide14Conclusion },
  { id: "thanks", title: "Thank You", Component: Slide15ThankYou },
];

export const TOTAL = SLIDES.length;

// helper used by TOC slide
export const _ReactNode = (n: ReactNode) => n;
