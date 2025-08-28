"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FolderOpen, Phone, Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Início", href: "/", icon: Home },
  { name: "Sobre", href: "/#about", icon: User },
  { name: "Serviços", href: "/#services", icon: Briefcase },
  { name: "Projetos", href: "/#projects", icon: FolderOpen },
  { name: "Contato", href: "/contact", icon: Phone },
];

export default function ModernMenu(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.includes(href.replace("/#", ""));
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-pink-500/20 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(20,20,20,0.88) 100%)",
        boxShadow: "0 8px 32px rgba(236,72,153,0.15)",
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" aria-label="Ir para início" className="select-none">
            <span
              className="text-xl md:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ff4da6 0%, #8b5cf6 50%, #ff4da6 100%)",
              }}
            >
              Raphaela Cristiane
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {NAV_ITEMS.map(({ name, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={name}
                  href={href}
                  className={[
                    "group inline-flex items-center gap-2 rounded-full",
                    "px-5 lg:px-6 py-2.5 lg:py-3 text-sm font-medium",
                    "transition-all duration-300",
                    "border",
                    active
                      ? "text-white border-pink-400/60 bg-gradient-to-r from-pink-500/20 to-purple-500/20 shadow-[0_8px_24px_rgba(236,72,153,0.25)]"
                      : "text-gray-300 border-pink-400/30 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 hover:border-pink-400/50 hover:shadow-[0_6px_18px_rgba(236,72,153,0.25)]",
                  ].join(" ")}
                  style={{ textDecoration: "none" }}
                >
                  <Icon size={18} />
                  <span className="whitespace-nowrap">{name}</span>
                  <span
                    className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(236,72,153,0.35), 0 0 22px rgba(236,72,153,0.25), 0 0 44px rgba(139,92,246,0.25)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Abrir/fechar menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-white transition-all duration-300"
            onClick={() => setOpen((v) => !v)}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,77,166,0.9), rgba(139,92,246,0.9))",
              boxShadow: open
                ? "0 10px 28px rgba(236,72,153,0.35)"
                : "0 6px 18px rgba(236,72,153,0.25)",
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={[
          "md:hidden origin-top overflow-hidden border-t border-pink-500/20",
          open ? "animate-[menuDown_280ms_ease-out]" : "animate-[menuUp_220ms_ease-in] pointer-events-none",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.96) 0%, rgba(20,20,20,0.92) 100%)",
          backdropFilter: "blur(14px)",
        }}
      >
        <nav className="flex flex-col items-stretch py-2">
          {NAV_ITEMS.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="mx-3 my-1.5 rounded-xl px-4 py-3 text-sm font-medium text-gray-200 flex items-center justify-center gap-2 border border-pink-400/30 bg-gradient-to-r from-pink-500/5 to-purple-500/5 transition-all duration-300 hover:from-pink-500/10 hover:to-purple-500/10 hover:text-white active:scale-[0.99]"
              style={{ textDecoration: "none" }}
            >
              <Icon size={16} />
              <span className="whitespace-nowrap">{name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Keyframes for open/close */}
      <style jsx>{`
        @keyframes menuDown { from { transform: scaleY(0); opacity: 0 } to { transform: scaleY(1); opacity: 1 } }
        @keyframes menuUp { from { transform: scaleY(1); opacity: 1 } to { transform: scaleY(0); opacity: 0 } }
      `}</style>
    </header>
  );
}


