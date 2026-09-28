"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Mail, Cpu, Globe, Phone } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="mt-auto border-t border-[#1e293b]/60 bg-[#050505] py-12 px-6 md:px-12 text-[#a1a1aa]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-[#ededed] font-mono text-sm font-semibold">
            <Cpu className="w-4 h-4 text-[#3b82f6]" />
            <span>Kennedy Odeyo Otieno — Embedded &amp; IoT Systems Engineer</span>
          </div>
          <p className="text-xs text-[#a1a1aa] max-w-md text-center md:text-left">
            Cargo-Care tracking, Oppie-Box power metering, Cold Chain temperature logging, and custom BMS hardware builds.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <a
            href="mailto:kenodeyo@gmail.com"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#ededed] hover:bg-[#3b82f6]/10 transition-all text-[#3b82f6]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>kenodeyo@gmail.com</span>
          </a>
          <a
            href="tel:+254793036309"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#ededed] hover:bg-[#3b82f6]/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+254-793036309</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#ededed] hover:bg-[#3b82f6]/10 transition-all"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#1e293b]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666666]">
        <div>© {new Date().getFullYear()} Kennedy Odeyo Otieno. Built with Next.js &amp; Sanity CMS.</div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SYSTEM OPERATIONAL // 24.000 MHz OSC</span>
        </div>
      </div>
    </footer>
  );
}
