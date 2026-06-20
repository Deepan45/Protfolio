import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-[1800px] scroll-mt-20 px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
      <SectionHeading eyebrow="Feedback" title="Testimonials" index="05" />
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={`${testimonial.name}-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glow-card flex flex-col rounded border border-slate-200 p-6 transition-colors hover:border-amber-300"
          >
            <Quote size={20} className="text-amber-500" />
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 italic">
              "{testimonial.quote}"
            </p>
            <div className="mt-4 border-t border-slate-100 pt-3">
              <p className="text-sm font-medium text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
