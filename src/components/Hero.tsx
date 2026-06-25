import { motion } from "framer-motion";
import { MapPin, ArrowRight, Mail, ChevronDown, Trophy, Zap } from "lucide-react";
import { profile, stats } from "../data";
import CountUpStat from "./CountUpStat";
import HeroSlider from "./HeroSlider";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

/* Stagger container — each direct child animates in with a delay */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-100 bg-white px-6 pt-10 pb-12 sm:px-10 sm:pt-16 sm:pb-16 lg:px-16 lg:pt-20 lg:pb-16 xl:px-20"
    >
      {/* Dot grid */}
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />

      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -top-10 right-0 h-[380px] w-[380px] rounded-full bg-violet-100/60 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-16">

          {/* ── Profile image column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            {/* Outer wrapper constrains size; relative for badge positioning */}
            <div className="relative w-full max-w-[200px] sm:max-w-[260px] lg:max-w-none">

              {/* Float animation on the image itself */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <HeroSlider initials={initials} />
              </motion.div>

              {/* Floating badge — Hackathon (top-left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="animate-float-up absolute -top-4 -left-2 z-10 sm:-left-10"
              >
                <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-amber-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-amber-700 shadow-lg shadow-amber-500/10">
                  <Trophy size={11} className="shrink-0 text-amber-500" />
                  7× Hackathon Champion
                </div>
              </motion.div>

              {/* Floating badge — AI Engineer (bottom-right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="animate-float-down absolute -bottom-4 -right-2 z-10 sm:-right-10"
              >
                <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-indigo-700 shadow-lg shadow-indigo-500/10">
                  <Zap size={11} className="shrink-0 text-indigo-500" />
                  AI Engineer
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text column — staggered entrance ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 flex flex-col items-center gap-4 text-center lg:order-1 lg:items-start lg:gap-5 lg:text-left"
          >
            {/* Availability badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <MapPin size={11} className="shrink-0" />
                {profile.location} · Available for Opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-4xl leading-[0.93] font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              {profile.name}
            </motion.h1>

            {/* Roles — animated shimmer gradient */}
            <motion.p
              variants={item}
              className="text-gradient-animated text-sm font-semibold sm:text-base lg:text-lg"
            >
              {profile.roles}
            </motion.p>

            {/* About */}
            <motion.p
              variants={item}
              id="about"
              className="max-w-sm scroll-mt-24 text-sm leading-relaxed text-slate-500 sm:max-w-lg sm:text-base lg:max-w-2xl"
            >
              {profile.about}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30"
              >
                <Mail size={15} /> Hire Me
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              >
                View Projects
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={item}
              className="mt-2 grid w-full max-w-xs grid-cols-2 divide-x divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/70 sm:max-w-none sm:grid-cols-4 lg:mt-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                  className="px-4 py-4 text-center"
                >
                  <CountUpStat value={stat.value} className="font-black text-slate-950" />
                  <p className="mt-0.5 text-xs font-medium text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bouncing scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        href="#experience"
        aria-label="Scroll to experience"
        className="mx-auto mt-10 hidden w-fit flex-col items-center justify-center gap-1 text-slate-300 transition-colors hover:text-slate-500 sm:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
