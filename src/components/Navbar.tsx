"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, FolderGit2, FileText, User, Terminal } from "lucide-react";

const navItems = [
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Articles", path: "/blog", icon: FileText },
  { name: "About & Lab", path: "/about", icon: User },
];

export function Navbar() {
  const pathname = usePathname();

  // Hide floating navbar inside Sanity Studio route
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 md:gap-2 px-3 py-2 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-[#1e293b]/60 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#ededed] hover:text-[#3b82f6] transition-colors group"
        >
          <div className="p-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] group-hover:scale-110 transition-transform">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <span className="tracking-wider">KEN.SYS</span>
        </Link>

        <div className="h-4 w-px bg-[#1e293b] mx-1" />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                isActive
                  ? "bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                  : "text-[#a1a1aa] hover:text-[#ededed] hover:bg-[#121212]"
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
