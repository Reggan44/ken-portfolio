"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, FileText, User, Send } from "lucide-react";

const navItems = [
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Articles", path: "/blog", icon: FileText },
  { name: "About & Lab", path: "/about", icon: User },
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between gap-3 md:gap-6 px-4 py-2.5 rounded-full bg-[#040406]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)] max-w-4xl w-full">
        {/* Brand Indicator: [ (•••) KEN.SYS ] with pulsing LED */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#f4f4f6] hover:text-[#8dc63f] transition-colors group shrink-0"
        >
          {/* 7-Dot Pattern Matrix Icon with pulsing LED */}
          <div className="relative flex items-center justify-center">
            <div className="grid grid-cols-3 gap-0.5 w-4 h-4 p-0.5 rounded bg-[#783fc6]/25 border border-[#783fc6]/40 group-hover:border-[#8dc63f]/60 transition-colors">
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
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#8dc63f] led-pulse-green" />
          </div>
          <span className="tracking-wider text-sm font-extrabold text-gradient-geo">KEN.SYS</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-[#8dc63f]/15 text-[#8dc63f] border border-[#8dc63f]/35 shadow-[0_0_15px_rgba(141,198,63,0.2)] font-semibold"
                    : "text-[#a1a1b5] hover:text-[#f4f4f6] hover:bg-[#0f0f17]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Bright Contrast Pill CTA Button: ( HIRE KEN ) */}
        <a
          href="mailto:kenodeyo@gmail.com"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8dc63f] to-[#06b6d4] text-[#040406] font-mono text-xs font-bold shadow-[0_0_20px_rgba(141,198,63,0.4)] hover:scale-105 transition-transform shrink-0"
        >
          <Send className="w-3 h-3" />
          <span>( HIRE KEN )</span>
        </a>
      </nav>
    </header>
  );
}
