import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1800px] scroll-mt-20 px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
      <SectionHeading eyebrow="Background" title="Education" index="03" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="glow-card mt-6 flex gap-4 rounded border border-slate-200 p-6 transition-colors hover:border-accent-light/60"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-accent">
          <GraduationCap size={20} className="text-white" />
        </span>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold text-slate-900">{education.degree}</h3>
            <span className="text-sm text-slate-500">{education.dates}</span>
          </div>
          <p className="mt-1 text-sm text-slate-500">{education.school}</p>
          <p className="mt-3 text-sm text-slate-600">
            <span className="text-slate-400">Relevant areas: </span>
            {education.relevant}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
