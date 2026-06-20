import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";
import { experience } from "../data";
import CompanyLogo from "./CompanyLogo";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-[1800px] px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading eyebrow="Career" title="Experience" index="02" />

        <ol className="mt-8 space-y-6 border-l border-slate-300 pl-8">
          {experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.dates}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute top-1 -left-[2.6rem] flex h-7 w-7 items-center justify-center rounded bg-accent">
                <Briefcase size={13} className="text-white" />
              </span>

              <div className="glow-card rounded border border-slate-200 p-5 transition-colors hover:border-accent-light/60 sm:p-6">
                <div className="flex gap-4">
                  <CompanyLogo src={job.logo} company={job.company} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                      <span className="text-sm text-slate-500">
                        {job.dates}
                        {job.duration ? ` · ${job.duration}` : ""}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                {job.award && (
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber-600">
                    <Trophy size={14} /> {job.award}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
                      <span>{bullet}</span>
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
