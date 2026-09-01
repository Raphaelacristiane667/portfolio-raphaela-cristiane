"use client";

import { motion } from "framer-motion";
import { GraduationCap, Play } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const VIDEO_SRC = "/videos/uniube-apresentacao.mp4";

const TAG_KEYS = ["uniube.tag.degree", "uniube.tag.uniube", "uniube.tag.talk"] as const;

export default function UniubeShowcase() {
  const { t } = useLanguage();

  return (
    <section
      id="uniube"
      className="section-anchor uniube-section py-20"
      aria-labelledby="uniube-heading"
    >
      <div className="container-custom">
        <motion.header
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="uniube-header"
        >
          <div className="uniube-badge">
            <GraduationCap size={16} aria-hidden />
            <span>{t("uniube.badge")}</span>
          </div>

          <h2 id="uniube-heading" className="uniube-title">
            <span>{t("uniube.title.part1")}</span>
            <span className="text-gradient">{t("uniube.title.part2")}</span>
          </h2>

          <p className="uniube-subtitle">{t("uniube.subtitle")}</p>

          <ul className="uniube-tags" aria-label={t("uniube.tags.label")}>
            {TAG_KEYS.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </motion.header>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="uniube-content"
        >
          <div className="uniube-video-panel">
            <div className="uniube-video-label">
              <Play size={14} aria-hidden />
              <span>{t("uniube.video.label")}</span>
            </div>
            <div className="uniube-video-wrap">
              <video
                controls
                preload="metadata"
                playsInline
                className="uniube-video"
                aria-label={t("uniube.video.aria")}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                {t("uniube.video.fallback")}
              </video>
            </div>
          </div>

          <article className="uniube-story">
            <p>{t("uniube.p1")}</p>

            <blockquote className="uniube-quote">
              <p>{t("uniube.quote")}</p>
            </blockquote>

            <p className="uniube-closing">{t("uniube.closing")}</p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
