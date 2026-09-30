"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Mail, Cpu, Phone, MapPin } from "lucide-react";

// LinkedIn icon — not available in this version of lucide-react
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 px-6 md:px-12 text-zinc-600 dark:text-zinc-400 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-mono text-sm font-bold">
            <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Kennedy Odeyo Otieno</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md text-center md:text-left leading-relaxed">
            Electrical &amp; Embedded Systems Engineer specializing in real-time load manager tracking, industrial power metering, and cold-chain hardware.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Right: Contact & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <a
            href="mailto:kenodeyo@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>kenodeyo@gmail.com</span>
          </a>
          <a
            href="tel:+254793036309"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-400 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>+254-793036309</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kennedy-odeyo-otieno-42772a1b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-400 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Kendeyo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
        <div>© {new Date().getFullYear()} Kennedy Odeyo Otieno. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link
            href="/studio"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Admin Studio
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

