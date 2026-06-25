import { useEffect, useState } from "react";
import { workedWith } from "../data";
import { asset } from "../lib/asset";

function LogoItem({ name, logo }: { name: string; logo: string }) {
  const [loaded, setLoaded] = useState(false);
  const resolvedLogo = asset(logo);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = resolvedLogo;
  }, [resolvedLogo]);

  if (loaded) {
    return (
      <div className="flex h-16 w-44 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-6 shadow-sm">
        <img
          src={resolvedLogo}
          alt={name}
          className="h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
        />
      </div>
    );
  }

  return (
    <span className="flex h-16 w-44 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-6 text-xs font-semibold tracking-widest text-slate-400 uppercase shadow-sm transition-colors hover:text-slate-600">
      {name}
    </span>
  );
}

export default function WorkedWith() {
  const doubled = [...workedWith, ...workedWith];

  return (
    <section className="overflow-hidden border-b border-slate-100 bg-slate-50/50 py-8">
      <p className="mb-5 text-center text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase">
        Worked With
      </p>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, rgb(248 250 252 / 0.5), transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, rgb(248 250 252 / 0.5), transparent)" }}
        />
        <div className="marquee-track flex w-max gap-3">
          {doubled.map((company, i) => (
            <LogoItem key={`${company.logo}-${i}`} name={company.name} logo={company.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
