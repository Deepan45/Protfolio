import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUpStat({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    let start: number | null = null;
    const duration = 1100;
    let frame: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setDisplay(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <p ref={ref} className={`text-2xl font-bold sm:text-3xl ${className ?? "text-slate-900"}`}>
      {target === null ? value : display}
      {suffix}
    </p>
  );
}
