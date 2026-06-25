import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Layers } from "lucide-react";
import { skillGroups } from "../data";
import { getTechIconSlug } from "../lib/techIcons";
import SectionHeading from "./SectionHeading";

const icons = [Code2, BrainCircuit, Database, Layers];

const categoryColors = [
  { icon: "bg-indigo-50 text-indigo-600", tag: "bg-indigo-50 border-indigo-100 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-200" },
  { icon: "bg-violet-50 text-violet-600", tag: "bg-violet-50 border-violet-100 text-violet-700 hover:bg-violet-100 hover:border-violet-200" },
  { icon: "bg-cyan-50 text-cyan-600", tag: "bg-cyan-50 border-cyan-100 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-200" },
  { icon: "bg-emerald-50 text-emerald-600", tag: "bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-200" },
];

function SkillTag({ item, delay, tagClass }: { item: string; delay: number; tagClass: string }) {
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
      whileHover={{ y: -1 }}
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-all ${tagClass}`}
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
    <section id="skills" className="border-y border-slate-100 bg-slate-50/40 scroll-mt-20">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-20">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            const colors = categoryColors[i % categoryColors.length];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glow-card rounded-2xl p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${colors.icon}`}>
                    <Icon size={17} />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, j) => (
                    <SkillTag key={item} item={item} delay={j * 0.04} tagClass={colors.tag} />
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
