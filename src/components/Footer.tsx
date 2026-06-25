import { Mail, ExternalLink, Phone } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:px-10 lg:px-16 xl:px-20">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-600">{profile.name}</span>
          {" "}· Built with React, TypeScript & Tailwind
        </p>
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Mail size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
          >
            <ExternalLink size={15} />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            aria-label="Phone"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Phone size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
