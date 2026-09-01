"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Server, Smartphone, Database, Wrench } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { PRIMARY_STACK, STACK_GROUPS } from "@/config/skills";

const GROUP_ICONS = {
  backend: Server,
  mobile: Smartphone,
  data: Database,
  tools: Wrench,
} as const;

export default function About(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-anchor theme-section-alt py-20">
      <div className="container-custom">
        <div className="about-layout">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="about-layout__photo"
          >
            <div className="about-photo-wrap">
              <div className="about-photo-frame">
                <div className="about-photo-glow" aria-hidden />
                <div className="about-photo-ring">
                  <div className="about-photo-inner">
                    <Image
                      src="/profile.jpg"
                      alt="Raphaela Cristiane — Desenvolvedora Full Stack"
                      width={500}
                      height={500}
                      className="about-photo-img"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="about-layout__content"
          >
            <h2 className="about-layout__title">
              <span className="theme-heading-muted">{t("about.title")}</span>
              <span className="text-gradient">{t("about.titleHighlight")}</span>
            </h2>

            <p className="about-layout__highlight">{t("about.highlight")}</p>
            <p className="about-layout__text">{t("about.p1")}</p>

            <div className="about-journey">
              <h3>{t("about.journey.title")}</h3>
              <p>{t("about.journey.text")}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-tech-panel"
        >
          <div className="about-tech-panel__header">
            <span className="about-tech-panel__icon" aria-hidden>
              <Layers size={20} />
            </span>
            <div>
              <h3 className="about-tech-panel__title">{t("about.skills.section")}</h3>
              <p className="about-tech-panel__desc">{t("about.skills.sectionDesc")}</p>
            </div>
          </div>

          <div className="about-tech-panel__core">
            <span className="about-tech-panel__label">{t("about.skills.primary")}</span>
            <ul className="about-tech-panel__core-grid">
              {PRIMARY_STACK.map((skill) => (
                <li key={skill} className="about-tech-panel__core-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-tech-panel__divider" aria-hidden />

          <div className="about-tech-panel__more">
            <span className="about-tech-panel__label about-tech-panel__label--muted">
              {t("about.skills.secondary")}
            </span>
            <div className="about-tech-panel__groups">
              {STACK_GROUPS.map((group) => {
                const Icon = GROUP_ICONS[group.key];
                return (
                  <article key={group.key} className="about-tech-panel__group">
                    <div className="about-tech-panel__group-head">
                      <span className="about-tech-panel__group-icon" aria-hidden>
                        <Icon size={16} />
                      </span>
                      <h4>{t(group.labelKey)}</h4>
                    </div>
                    <ul className="about-tech-panel__group-list">
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
