"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import BB8ThemeToggle from "./BB8ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { NAV_ITEMS, type NavItem } from "@/config/navigation";

const DESKTOP_BP = 1024;

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  window.history.pushState(null, "", `/#${sectionId}`);
}

function isNavActive(item: NavItem, pathname: string, hash: string): boolean {
  if (item.href === "/") return pathname === "/" && !hash;
  if (item.sectionId) return pathname === "/" && hash === item.sectionId;
  if (item.isPage) return pathname === item.href || pathname.startsWith(`${item.href}/`);
  return false;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${DESKTOP_BP - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isMobile) closeMenu();
  }, [isMobile, closeMenu]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobile && menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMobile, menuOpen]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash.replace("#", ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const timer = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const onNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    item: NavItem,
    after?: () => void
  ) => {
    if (item.sectionId && pathname === "/") {
      e.preventDefault();
      scrollToSection(item.sectionId);
    }
    after?.();
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner container-custom">
          <Link href="/" className="site-header__brand" aria-label={t("nav.home")} prefetch={false}>
            Raphaela Cristiane
          </Link>

          <nav
            className="site-header__nav"
            aria-label={language === "en" ? "Main navigation" : "Navegação principal"}
          >
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item, pathname, hash);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={(e) => onNavClick(e, item)}
                  className={[
                    "site-header__nav-link",
                    active ? "site-header__nav-link--active" : "",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <BB8ThemeToggle />
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="nav-icon-btn inline-flex h-10 w-10 items-center justify-center rounded-full border"
              aria-label={language === "en" ? "Switch language" : "Alterar idioma"}
            >
              <Globe size={18} />
            </button>
            <button
              type="button"
              className="site-header__menu-btn nav-icon-btn inline-flex h-10 w-10 items-center justify-center rounded-full border"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Renderizado só em viewport mobile — nunca no desktop */}
      {isMobile && (
        <div
          id="mobile-nav-panel"
          className={["site-header__mobile-panel", menuOpen ? "is-open" : ""].join(" ")}
          role="dialog"
          aria-modal={menuOpen}
          aria-hidden={!menuOpen}
          aria-label={language === "en" ? "Mobile menu" : "Menu mobile"}
        >
          <div className="site-header__mobile-top">
            <span className="site-header__brand">Raphaela Cristiane</span>
            <button
              type="button"
              onClick={closeMenu}
              className="nav-icon-btn inline-flex h-10 w-10 items-center justify-center rounded-full border"
              aria-label="Fechar menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav
            className="site-header__mobile-nav"
            aria-label={language === "en" ? "Mobile navigation" : "Navegação mobile"}
          >
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item, pathname, hash);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={(e) => onNavClick(e, item, closeMenu)}
                  className={[
                    "site-header__mobile-link",
                    active ? "site-header__mobile-link--active" : "",
                  ].join(" ")}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
