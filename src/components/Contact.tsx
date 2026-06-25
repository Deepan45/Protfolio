import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950"
      />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-[1800px] px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16 xl:px-20"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-700 bg-indigo-900/50 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Let's Work Together
        </span>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Have a role or project in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
          I'm open to collaboration and new opportunities — let's build something intelligent
          together.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-2.5 rounded-xl bg-white px-10 py-4 text-sm font-semibold text-indigo-700 shadow-xl shadow-black/20 transition-all hover:bg-indigo-50 hover:shadow-2xl hover:shadow-black/30"
        >
          <Mail size={16} /> Get In Touch
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-10">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
          >
            <Mail size={13} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
          >
            <ExternalLink size={13} /> {profile.linkedin.replace("https://", "")}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
          >
            <Phone size={13} /> {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
