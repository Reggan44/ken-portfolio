"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Mail, Cpu, Globe } from "lucide-react";

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
            <span>Ken — Embedded &amp; Electrical Systems</span>
          </div>
          <p className="text-xs text-[#a1a1aa] max-w-sm text-center md:text-left">
            Designing reliable MCU architectures, RTOS firmware, and custom high-speed multi-layer PCBs.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#ededed] hover:bg-[#3b82f6]/10 transition-all"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#ededed] hover:bg-[#3b82f6]/10 transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:ken@example.com"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1e293b] hover:border-[#3b82f6]/50 hover:text-[#ededed] hover:bg-[#3b82f6]/10 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#1e293b]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666666]">
        <div>© {new Date().getFullYear()} Ken. Built with Next.js &amp; Sanity CMS.</div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SYSTEM OPERATIONAL // 24.000 MHz OSC</span>
        </div>
      </div>
    </footer>
  );
}
