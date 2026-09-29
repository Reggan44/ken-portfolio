"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR placeholder to prevent hydration mismatch
    return (
      <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="relative p-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200 cursor-pointer flex items-center justify-center"
    >
      <span className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300" />
        )}
      </span>
    </button>
  );
}
