"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const UNITS = ["WAY 364", "WAY 153", "WAY 112", "WAY 306", "WAY 262"] as const;

const SHOWCASE_ITEMS = [
  {
    id: "cronograma",
    image: "/projects/cronograma-infographic.png",
    titleKey: "way.cronograma.title",
    descKey: "way.cronograma.desc",
  },
  {
    id: "papersign",
    image: "/projects/papersign-infographic.png",
    titleKey: "way.papersign.title",
    descKey: "way.papersign.desc",
  },
] as const;

export default function WayBrasilShowcase() {
  const { t } = useLanguage();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="way-brasil"
        className="section-anchor way-brasil-section py-20"
        aria-labelledby="way-brasil-heading"
      >
        <div className="container-custom">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="way-brasil-header"
          >
            <div className="way-brasil-badge">
              <Building2 size={16} aria-hidden />
              <span>{t("way.badge")}</span>
            </div>

            <h2 id="way-brasil-heading" className="way-brasil-title">
              <span>{t("way.title.part1")}</span>
              <span className="text-gradient">{t("way.title.part2")}</span>
            </h2>

            <p className="way-brasil-subtitle">{t("way.subtitle")}</p>

            <ul className="way-brasil-units" aria-label={t("way.units.label")}>
              {UNITS.map((unit) => (
                <li key={unit}>{unit}</li>
              ))}
            </ul>
          </motion.div>

          <div className="way-brasil-grid">
            {SHOWCASE_ITEMS.map((item, index) => (
              <motion.article
                key={item.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="way-brasil-card"
              >
                <button
                  type="button"
                  className="way-brasil-preview"
                  onClick={() => setExpandedImage(item.image)}
                  aria-label={`${t("way.expand")}: ${t(item.titleKey)}`}
                >
                  <img src={item.image} alt={t(item.titleKey)} loading="lazy" />
                  <span className="way-brasil-preview-overlay">
                    <ZoomIn size={22} aria-hidden />
                    {t("way.expand")}
                  </span>
                </button>

                <div className="way-brasil-card-body">
                  <h3>{t(item.titleKey)}</h3>
                  <p>{t(item.descKey)}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="way-brasil-footnote">{t("way.footnote")}</p>
        </div>
      </section>

      <AnimatePresence>
        {expandedImage && (
          <motion.div
            className="way-brasil-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t("way.expand")}
          >
            <button
              type="button"
              className="way-brasil-lightbox-close"
              onClick={() => setExpandedImage(null)}
              aria-label={t("way.close")}
            >
              <X size={24} />
            </button>
            <motion.img
              src={expandedImage}
              alt=""
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
