import { useEffect, useState } from "react";
import { getTechIconSlug } from "../lib/techIcons";

export default function TechTag({ label, className }: { label: string; className?: string }) {
  const slug = getTechIconSlug(label);
  const [iconOk, setIconOk] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const img = new Image();
    img.onload = () => setIconOk(true);
    img.onerror = () => setIconOk(false);
    img.src = `https://cdn.simpleicons.org/${slug}`;
  }, [slug]);

  return (
    <span
      className={
        className ??
        "inline-flex items-center gap-1.5 rounded bg-slate-100 px-2.5 py-1 text-xs text-slate-600 ring-1 ring-slate-200"
      }
    >
      {slug && iconOk && (
        <img src={`https://cdn.simpleicons.org/${slug}`} alt="" className="h-3.5 w-3.5" />
      )}
      {label}
    </span>
  );
}
