import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-3.5 sm:px-10 lg:px-16 xl:px-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white shadow-sm shadow-indigo-600/30">
              DV
            </span>
            <span className="text-sm font-semibold text-slate-900">Deepan Vijayasarathi</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                    active === link.href
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 lg:inline-block"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] flex flex-col bg-white px-6 pb-10 pt-5 lg:hidden"
          >
            {/* Overlay top bar */}
            <div className="flex items-center justify-between">
              <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                  DV
                </span>
                <span className="text-sm font-semibold text-slate-900">Deepan Vijayasarathi</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="mt-8 flex flex-1 flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.22 }}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold transition-colors ${
                    active === link.href
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-800 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  <ArrowRight
                    size={16}
                    className="text-slate-300 transition-colors group-hover:text-slate-400"
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA at bottom */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.24 }}
              onClick={() => setOpen(false)}
              className="block w-full rounded-xl bg-indigo-600 py-4 text-center text-base font-semibold text-white shadow-md shadow-indigo-600/25"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
