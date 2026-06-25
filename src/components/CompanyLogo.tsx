import { useEffect, useState } from "react";
import { asset } from "../lib/asset";

export default function CompanyLogo({ src, company }: { src: string; company: string }) {
  const [loaded, setLoaded] = useState(false);
  const resolvedSrc = asset(src);

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = resolvedSrc;
  }, [resolvedSrc]);

  if (loaded) {
    return (
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <img src={resolvedSrc} alt={`${company} logo`} className="h-full w-full object-contain" />
      </span>
    );
  }

  const initials = company
    .replace(/\(.*\)/, "")
    .trim()
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-md shadow-indigo-500/20">
      {initials}
    </span>
  );
}
