import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-[1800px] scroll-mt-20 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-20"
    >
      <SectionHeading eyebrow="Background" title="Education" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="glow-card mt-10 flex gap-5 rounded-2xl p-6 sm:p-8"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-sm shadow-indigo-600/25">
          <GraduationCap size={22} className="text-white" />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-bold text-slate-950">{education.degree}</h3>
            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
              {education.dates}
            </span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-slate-500">{education.school}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            <span className="font-medium text-slate-400">Relevant areas: </span>
            {education.relevant}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
