import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from "lucide-react";
import { projects } from "../data";
import ProjectImage from "./ProjectImage";
import SectionHeading from "./SectionHeading";
import TechTag from "./TechTag";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + projects.length) % projects.length);
  };

  useEffect(() => {
    if (projects.length < 2) return;
    const id = setInterval(() => go(index + 1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const project = projects[index];

  return (
    <section id="projects" className="mx-auto max-w-[1800px] scroll-mt-20 px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Builds" title="Projects" index="01" />
        {projects.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous project"
              className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next project"
              className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-500 transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="glow-card relative mt-6 overflow-hidden rounded border border-slate-200">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-2.5 sm:px-8">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            {projects.length > 1 ? `Project ${index + 1} of ${projects.length}` : "Featured Project"}
          </p>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.name}
            custom={direction}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -32 }}
            transition={{ duration: 0.35 }}
          >
            <ProjectImage
              src={project.image}
              video={project.video}
              name={project.name}
              index={index}
            />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-slate-900">{project.name}</h3>
                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex shrink-0 gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
                      >
                        <Code2 size={13} /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.split(",").map((tag) => (
                  <TechTag
                    key={tag}
                    label={tag.trim()}
                    className="inline-flex items-center gap-1.5 rounded bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  />
                ))}
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {projects.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
