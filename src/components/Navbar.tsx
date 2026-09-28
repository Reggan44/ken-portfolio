"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, FileText, User, ArrowUpRight } from "lucide-react";

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
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between gap-4 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-sm max-w-3xl w-full">
        {/* Brand Text */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xs font-bold tracking-tight text-zinc-900 hover:text-indigo-600 transition-colors shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
          <span>KENNEDY.SYS</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white font-medium"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Minimal Hire CTA */}
        <a
          href="mailto:kenodeyo@gmail.com"
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs font-medium transition-all shrink-0 shadow-sm"
        >
          <span>Hire Ken</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </nav>
    </header>
  );
}
