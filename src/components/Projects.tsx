import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "../data";
import ProjectImage from "./ProjectImage";
import SectionHeading from "./SectionHeading";
import TechTag from "./TechTag";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1800px] scroll-mt-20 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-20"
    >
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Builds" title="Projects" />
        <span className="mb-1 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          {projects.length} projects
        </span>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
            className="glow-card group flex flex-col overflow-hidden rounded-2xl"
          >
            {/* Thumbnail */}
            <div className="overflow-hidden">
              <ProjectImage src={project.image} video={project.video} name={project.name} index={i} />
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-950">{project.name}</h3>
                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex shrink-0 items-center gap-1">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Source code"
                        className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <Code2 size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Tech tags */}
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tech.split(",").map((tag) => (
                  <TechTag
                    key={tag}
                    label={tag.trim()}
                    className="inline-flex items-center rounded-md border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-600"
                  />
                ))}
              </div>

              {/* Description */}
              <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-500">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
