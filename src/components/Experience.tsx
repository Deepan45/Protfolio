import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { experience } from "../data";
import CompanyLogo from "./CompanyLogo";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-slate-100 bg-slate-50/40 scroll-mt-20">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-20">
        <SectionHeading eyebrow="Career" title="Experience" />

        <ol className="mt-12 space-y-5 border-l-2 border-slate-200 pl-8">
          {experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.dates}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              {/* Timeline node */}
              <span className="absolute top-2 -left-[2.65rem] flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-200 bg-white shadow-sm">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
              </span>

              <div className="glow-card rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4">
                  <CompanyLogo src={job.logo} company={job.company} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-bold text-slate-950">{job.title}</h3>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                        {job.dates}
                        {job.duration ? ` · ${job.duration}` : ""}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-slate-500">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>

                {job.award && (
                  <p className="mt-3 flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 w-fit">
                    <Trophy size={12} /> {job.award}
                  </p>
                )}

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
