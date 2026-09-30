"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/blog" },
  { name: "About & Lab", path: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <>
      {/* ─── Desktop + Mobile Top Bar ─── */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <nav className="flex items-center justify-between gap-4 px-5 sm:px-6 py-3 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 shadow-sm max-w-4xl w-full transition-colors duration-300">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 uppercase"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 status-pulse-green" />
            <span className="hidden xs:inline">KENNEDY ODEYO</span>
            <span className="xs:hidden">KEN</span>
          </Link>

          {/* Center: Desktop Nav Links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname === item.path || pathname?.startsWith(`${item.path}/`);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right: Theme Toggle + CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle />

            {/* Desktop CTA (hidden on mobile) */}
            <a
              href="mailto:kenodeyo@gmail.com"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs font-bold transition-all shadow-sm"
            >
              <span>Work with Ken</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger (shown on mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer"
            >
              {mobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Full-Screen Drawer ─── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="absolute top-20 inset-x-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-6 space-y-6 animate-in fade-in slide-in-from-top-2 transition-colors duration-300">
            {/* Nav Links */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname === item.path || pathname?.startsWith(`${item.path}/`);

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl font-mono text-sm font-medium transition-all ${
                      isActive
                        ? "bg-indigo-600 text-white font-bold shadow-sm"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            {/* Mobile CTA */}
            <a
              href="mailto:kenodeyo@gmail.com"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-sm font-bold transition-all shadow-sm"
            >
              <span>Work with Ken</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Social Links in Mobile */}
            <div className="flex items-center justify-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <a
                href="https://www.linkedin.com/in/kennedy-odeyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/Reggan44"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="mailto:kenodeyo@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
