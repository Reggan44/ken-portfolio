"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Mail, Cpu, Globe, Phone, MapPin } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white py-12 px-6 md:px-12 text-zinc-600 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-zinc-900 font-mono text-sm font-bold">
            <Cpu className="w-4 h-4 text-[#783fc6]" />
            <span>Kennedy Odeyo Otieno — Embedded &amp; IoT Systems Engineer</span>
          </div>
          <p className="text-xs text-zinc-500 max-w-md text-center md:text-left leading-relaxed">
            Building real-world hardware — Cargo-Care load tracking, Oppie-Box power metering, Cold Chain temperature monitoring, and custom BMS hardware systems.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#783fc6] pt-1">
            <MapPin className="w-3 h-3 text-[#8dc63f]" />
            <span>Nairobi, Kenya • 1.2921°S 36.8219°E</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <a
            href="mailto:kenodeyo@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 hover:border-[#783fc6] text-[#783fc6] hover:bg-[#783fc6]/5 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>kenodeyo@gmail.com</span>
          </a>
          <a
            href="tel:+254793036309"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 hover:border-[#783fc6] text-zinc-800 hover:bg-zinc-50 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#783fc6]" />
            <span>+254-793036309</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200 hover:border-zinc-900 text-zinc-800 hover:bg-zinc-50 transition-all"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
        <div>© {new Date().getFullYear()} Kennedy Odeyo Otieno. Clean Minimal Design.</div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#8dc63f] animate-pulse" />
          <span>SYSTEM OPERATIONAL // 24.000 MHz OSC</span>
        </div>
      </div>
    </footer>
  );
}
