"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle(): React.ReactElement {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Alternar tema"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border border-pink-400/30 hover:border-pink-400/60"
      style={{
        background: isDark
          ? "linear-gradient(135deg, rgba(255,77,166,0.08), rgba(139,92,246,0.08))"
          : "linear-gradient(135deg, rgba(139,92,246,0.10), rgba(255,77,166,0.10))",
        color: isDark ? "#fff" : "#111",
        boxShadow: isDark
          ? "0 6px 18px rgba(236,72,153,0.25)"
          : "0 6px 18px rgba(139,92,246,0.25)",
      }}
    >
      <span className={`text-lg transition-transform duration-300 ${isDark ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} absolute`}>🌙</span>
      <span className={`text-lg transition-transform duration-300 ${isDark ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} absolute`}>☀️</span>
    </button>
  );
}


