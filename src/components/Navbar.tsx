"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, FileText, User, Radio, Cpu } from "lucide-react";

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
      <nav className="flex items-center gap-1 md:gap-2 px-4 py-2.5 rounded-full bg-[#09090e]/85 backdrop-blur-xl border border-[#1a1a27] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        {/* GeoHabari-inspired 7-dot motif logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#f4f4f6] hover:text-[#8dc63f] transition-colors group"
        >
          {/* 7-Dot Pattern Icon */}
          <div className="grid grid-cols-3 gap-0.5 w-4 h-4 p-0.5 rounded bg-[#783fc6]/20 border border-[#783fc6]/40 group-hover:border-[#8dc63f]/60 transition-colors">
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
          <span className="tracking-wider">KEN.SYS</span>
        </Link>

        <div className="h-4 w-px bg-[#1a1a27] mx-1" />

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
      </nav>
    </header>
  );
}
