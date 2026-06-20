import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Mail,
  ChevronDown,
  CalendarDays,
  Trophy,
  Building2,
  Award,
} from "lucide-react";
import { profile, stats } from "../data";
import CountUpStat from "./CountUpStat";
import HeroSlider from "./HeroSlider";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

const statStyles = [
  { icon: CalendarDays, text: "text-indigo-600", bg: "bg-indigo-50", ring: "ring-indigo-100" },
  { icon: Trophy, text: "text-amber-600", bg: "bg-amber-50", ring: "ring-amber-100" },
  { icon: Building2, text: "text-emerald-600", bg: "bg-emerald-50", ring: "ring-emerald-100" },
  { icon: Award, text: "text-rose-600", bg: "bg-rose-50", ring: "ring-rose-100" },
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-[1800px] border-b border-slate-200 px-6 pt-16 pb-14 sm:px-10 sm:pt-20 sm:pb-16 lg:px-16 xl:px-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_400px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-5"
        >
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={14} /> {profile.location}
          </p>

          <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-accent-light uppercase">
            <Sparkles size={16} /> {profile.roles}
          </p>

          <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tighter text-slate-900 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="max-w-2xl text-lg text-slate-600">{profile.headline}</p>

          <p id="about" className="max-w-2xl scroll-mt-24 leading-relaxed text-slate-600">
            {profile.about}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-accent-light"
            >
              <Mail size={16} /> Hire Me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="rounded border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:scale-[1.03] hover:border-accent hover:text-accent"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, i) => {
              const style = statStyles[i % statStyles.length];
              const Icon = style.icon;
              return (
                <div
                  key={stat.label}
                  className={`glow-card rounded border border-slate-200 px-4 py-5 text-center ring-1 ring-inset ${style.ring}`}
                >
                  <span
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${style.bg} ${style.text}`}
                  >
                    <Icon size={15} />
                  </span>
                  <CountUpStat value={stat.value} className={style.text} />
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full lg:mx-0"
        >
          <HeroSlider initials={initials} />
        </motion.div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="mx-auto mt-10 hidden w-fit items-center justify-center text-slate-400 transition-colors hover:text-accent sm:flex"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
