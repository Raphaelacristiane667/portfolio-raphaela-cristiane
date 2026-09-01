"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <section id="hero" className="theme-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute top-20 left-20 w-3 h-3 rounded-full animate-pulse bg-[var(--color-primary)]" />
        <div className="absolute top-40 right-32 w-2 h-2 rounded-full animate-pulse delay-1000 bg-[var(--color-secondary)]" />
        <div className="absolute bottom-32 left-32 w-3 h-3 rounded-full animate-pulse delay-1500 bg-[var(--color-secondary)]" />
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          <span className="theme-heading-muted">{t("hero.headline.line1")}</span>
          <br />
          <span className="text-gradient">{t("hero.headline.line2")}</span>
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle theme-text"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-tagline"
        >
          {t("hero.subtitle.tag")}
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-cta"
        >
          <Link href="/#projects" className="btn-primary btn-primary--lg">
            {t("hero.cta.projects")}
          </Link>
          <Link href="/contact" className="btn-secondary btn-secondary--lg">
            {t("hero.cta.contact")}
          </Link>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-scroll-hint"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hero-scroll-hint__track"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hero-scroll-hint__dot"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
