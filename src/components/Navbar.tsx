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
      <nav className="flex items-center justify-between gap-3 md:gap-6 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-w-4xl w-full">
        {/* Brand Indicator: KEN.SYS with pulsing LED */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xs font-mono font-bold text-zinc-900 hover:text-[#783fc6] transition-colors group shrink-0"
        >
          <div className="relative flex items-center justify-center">
            <div className="grid grid-cols-3 gap-0.5 w-4 h-4 p-0.5 rounded bg-zinc-100 border border-zinc-300">
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
          <span className="tracking-wider text-sm font-extrabold text-zinc-900">KEN.SYS</span>
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
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-[#783fc6]/10 text-[#783fc6] border border-[#783fc6]/30 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Contrast Pill CTA Button: ( HIRE KEN ) */}
        <a
          href="mailto:kenodeyo@gmail.com"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#783fc6] text-white font-mono text-xs font-bold shadow-[0_4px_14px_rgba(120,63,198,0.35)] hover:bg-[#6631b0] hover:scale-105 transition-all shrink-0"
        >
          <Send className="w-3 h-3" />
          <span>( HIRE KEN )</span>
        </a>
      </nav>
    </header>
  );
}
