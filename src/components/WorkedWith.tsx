import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { workedWith } from "../data";

function LogoItem({ name, logo }: { name: string; logo: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = logo;
  }, [logo]);

  if (loaded) {
    return (
      <div className="flex h-20 items-center justify-center rounded border border-slate-200 bg-white px-6 sm:h-24">
        <img src={logo} alt={name} className="h-12 w-auto object-contain sm:h-14" />
      </div>
    );
  }

  return (
    <span className="text-sm font-semibold tracking-wide text-slate-400 uppercase transition-colors hover:text-slate-600">
      {name}
    </span>
  );
}

export default function WorkedWith() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1800px] px-6 py-10 sm:px-10 lg:px-16 xl:px-20"
      >
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Worked With
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {workedWith.map((company) => (
            <LogoItem key={company.name + company.logo} name={company.name} logo={company.logo} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
