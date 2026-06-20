import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Layers } from "lucide-react";
import { skillGroups } from "../data";
import { getTechIconSlug } from "../lib/techIcons";
import SectionHeading from "./SectionHeading";

const icons = [Code2, BrainCircuit, Database, Layers];

function SkillTag({ item, delay }: { item: string; delay: number }) {
  const slug = getTechIconSlug(item);
  const [iconOk, setIconOk] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const img = new Image();
    img.onload = () => setIconOk(true);
    img.onerror = () => setIconOk(false);
    img.src = `https://cdn.simpleicons.org/${slug}`;
  }, [slug]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2.5 py-1 text-xs text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-accent/10 hover:text-accent hover:ring-accent/30"
    >
      {slug && iconOk && (
        <img src={`https://cdn.simpleicons.org/${slug}`} alt="" className="h-3.5 w-3.5" />
      )}
      {item}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-[1800px] px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading eyebrow="Toolbox" title="Skills" index="04" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glow-card rounded border border-slate-200 bg-white p-5 transition-colors hover:border-accent-light/60"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded bg-accent/10 text-accent">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-base font-semibold text-slate-800">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <SkillTag key={item} item={item} delay={j * 0.04} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
