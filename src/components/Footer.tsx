import { Mail, ExternalLink, Phone } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:px-10 lg:px-16 xl:px-20">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-accent-light"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-accent-light"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            aria-label="Phone"
            className="text-slate-400 transition-colors hover:text-accent-light"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
