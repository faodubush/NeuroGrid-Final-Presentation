import { ReactNode, useEffect, useRef, useState } from "react";

interface ScaledSlideProps {
  children: ReactNode;
}

/** Renders children inside a fixed 1920x1080 canvas, scaled to fit the parent. */
export default function ScaledSlide({ children }: ScaledSlideProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const compute = () => {
      const { width, height } = el.getBoundingClientRect();
      const s = Math.min(width / 1920, height / 1080);
      setScale(s > 0 ? s : 1);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div ref={stageRef} className="slide-stage">
      <div
        className="slide-wrapper"
        style={{ ["--scale" as any]: scale }}
      >
        {children}
      </div>
    </div>
  );
}
