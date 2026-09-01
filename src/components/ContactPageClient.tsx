"use client";

import {
  Mail,
  MessageCircle,
  Linkedin,
  MapPin,
  Clock,
  Briefcase,
  Code2,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const WHATSAPP_URL =
  "https://wa.me/553499385291?text=Ol%C3%A1%20Raphaela!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.";
const EMAIL = "raphaelacristiane668@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/raphaela-cristiane-21b806266";

export default function ContactPageClient(): React.ReactElement {
  const { t } = useLanguage();

  const helpItems = [
    { icon: Code2, label: "Web & Systems", text: t("contact.help.web") },
    { icon: Zap, label: "Integrações", text: t("contact.help.integration") },
    { icon: Briefcase, label: "Consultoria", text: t("contact.help.consulting") },
  ];

  return (
    <div className="theme-page">
      <header className="contact-page-hero">
        <div className="container-custom">
          <h1 className="contact-page-hero__title">
            <span className="theme-heading-muted">{t("contact.title.part1")}</span>
            <span className="text-gradient">{t("contact.title.part2")}</span>
          </h1>
          <p className="contact-page-hero__subtitle">{t("contact.subtitle")}</p>
        </div>
      </header>

      <div className="container-custom contact-page-body">
        <section aria-labelledby="contact-channels-heading">
          <h2 id="contact-channels-heading" className="contact-section-title">
            {t("contact.channels.title")}
          </h2>
          <div className="contact-channels">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <span className="contact-channel-card__icon contact-channel-card__icon--whatsapp">
                <MessageCircle size={22} />
              </span>
              <span className="contact-channel-card__title">
                {t("contact.whatsapp.title")}
              </span>
              <span className="contact-channel-card__desc">
                {t("contact.whatsapp.desc")}
              </span>
              <span className="contact-channel-card__cta">
                {t("contact.whatsapp.cta")} →
              </span>
            </a>

            <a href={`mailto:${EMAIL}`} className="contact-channel-card">
              <span className="contact-channel-card__icon">
                <Mail size={22} />
              </span>
              <span className="contact-channel-card__title">
                {t("contact.email.title")}
              </span>
              <span className="contact-channel-card__desc">
                {t("contact.email.desc")}
              </span>
              <span className="contact-channel-card__cta">
                {t("contact.email.cta")} →
              </span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <span className="contact-channel-card__icon">
                <Linkedin size={22} />
              </span>
              <span className="contact-channel-card__title">
                {t("contact.linkedin.title")}
              </span>
              <span className="contact-channel-card__desc">
                {t("contact.linkedin.desc")}
              </span>
              <span className="contact-channel-card__cta">
                {t("contact.linkedin.cta")} →
              </span>
            </a>
          </div>
        </section>

        <div className="contact-page-grid">
          <section aria-labelledby="contact-help-heading">
            <h2 id="contact-help-heading" className="contact-section-title">
              {t("contact.help.title")}
            </h2>
            <div className="contact-help-list">
              {helpItems.map((item) => (
                <article key={item.label} className="contact-help-item">
                  <span className="contact-help-item__label">{item.label}</span>
                  <p className="contact-help-item__text">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="contact-info-panel" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="contact-section-title">
              {t("contact.info.title")}
            </h2>
            <ul>
              <li>
                <Mail size={18} aria-hidden />
                <a
                  href={`mailto:${EMAIL}`}
                  className="contact-info-panel__email"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <MapPin size={18} aria-hidden />
                <span>{t("contact.info.location")}</span>
              </li>
              <li>
                <Clock size={18} aria-hidden />
                <span>{t("contact.info.response")}</span>
              </li>
              <li>
                <Briefcase size={18} aria-hidden />
                <span>{t("contact.info.availability")}</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
