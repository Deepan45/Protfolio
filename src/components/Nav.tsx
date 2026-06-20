import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-3.5 sm:px-10 lg:px-16 xl:px-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-accent text-xs font-semibold text-white">
            DV
          </span>
          <span className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
            Deepan Vijayasarathi
          </span>
        </a>

        <ul className="hidden gap-7 text-sm text-slate-600 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative pb-1 transition-colors hover:text-slate-900 ${
                  active === link.href ? "text-slate-900" : ""
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute right-0 -bottom-[15px] left-0 h-0.5 bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded border border-accent bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light lg:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-sm text-slate-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={active === link.href ? "font-medium text-accent-light" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded border border-accent bg-accent px-5 py-2 font-medium text-white"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
