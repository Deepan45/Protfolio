import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1800px] scroll-mt-20 px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded border border-slate-200 bg-accent p-8 text-center shadow-xl shadow-accent/20 sm:p-14"
      >
        <p className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
          Let's Work Together
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Have a role or project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          I'm open to collaboration and new opportunities — let's build something intelligent
          together.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-8 inline-flex items-center gap-2 rounded bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-slate-100"
        >
          <Mail size={16} /> Hire Me
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <Mail size={15} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <ExternalLink size={15} /> {profile.linkedin.replace("https://", "")}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <Phone size={15} /> {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
