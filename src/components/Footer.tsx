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
    <footer className="mt-auto border-t border-[#1a1a27] bg-[#040406] py-14 px-6 md:px-12 text-[#a1a1b5] relative overflow-hidden">
      {/* Background Subtle Glowing Orbs (GeoHabari Style) */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#783fc6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#8dc63f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2.5">
          <div className="flex items-center gap-2.5 text-[#f4f4f6] font-mono text-sm font-semibold">
            {/* 7-Dot Pattern Icon */}
            <div className="grid grid-cols-3 gap-0.5 w-4 h-4 p-0.5 rounded bg-[#783fc6]/20 border border-[#783fc6]/40">
              <span className="w-1 h-1 rounded-full bg-[#8dc63f]" />
              <span className="w-1 h-1 rounded-full bg-[#8dc63f]" />
              <span className="w-1 h-1 opacity-0" />
              <span className="w-1 h-1 rounded-full bg-[#783fc6]" />
              <span className="w-1 h-1 rounded-full bg-[#783fc6]" />
              <span className="w-1 h-1 rounded-full bg-[#8dc63f]" />
              <span className="w-1 h-1 opacity-0" />
              <span className="w-1 h-1 rounded-full bg-[#8dc63f]" />
              <span className="w-1 h-1 rounded-full bg-[#783fc6]" />
            </div>
            <span>Kennedy Odeyo Otieno — Embedded &amp; IoT Systems Engineer</span>
          </div>
          <p className="text-xs text-[#a1a1b5] max-w-md text-center md:text-left leading-relaxed">
            Elevating African hardware brilliance — Cargo-Care tracking, Oppie-Box power metering, Cold Chain temperature logging, and custom BMS hardware builds.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#8dc63f]">
            <MapPin className="w-3 h-3" />
            <span>Nairobi, Kenya • 1.2921°S 36.8219°E</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <a
            href="mailto:kenodeyo@gmail.com"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#1a1a27] hover:border-[#8dc63f]/50 text-[#8dc63f] hover:bg-[#8dc63f]/10 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>kenodeyo@gmail.com</span>
          </a>
          <a
            href="tel:+254793036309"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#1a1a27] hover:border-[#8dc63f]/50 hover:text-[#f4f4f6] hover:bg-[#783fc6]/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#783fc6]" />
            <span>+254-793036309</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#1a1a27] hover:border-[#8dc63f]/50 hover:text-[#f4f4f6] hover:bg-[#8dc63f]/10 transition-all"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#1a1a27]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666666] relative z-10">
        <div>© {new Date().getFullYear()} Kennedy Odeyo Otieno. Inspired by GeoHabari UI.</div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#8dc63f] animate-pulse" />
          <span>SYSTEM OPERATIONAL // 24.000 MHz OSC</span>
        </div>
      </div>
    </footer>
  );
}
