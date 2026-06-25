import { motion } from "framer-motion";
import { testimonials } from "../data";
import SectionHeading from "./SectionHeading";

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-20">
        <SectionHeading eyebrow="Feedback" title="Testimonials" />

        {/* Mobile: horizontal scroll  /  sm+: 3-column grid */}
        <div className="scrollbar-hide -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glow-card min-w-[82vw] shrink-0 snap-start flex flex-col rounded-2xl p-6 sm:min-w-0"
            >
              <StarRow />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="mt-3 text-center text-xs text-slate-400 sm:hidden">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}
