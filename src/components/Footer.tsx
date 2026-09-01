"use client";

import Link from "next/link";
import { Instagram, Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { NAV_ITEMS } from "@/config/navigation";

const EMAIL = "raphaelacristiane668@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/553499385291?text=Olá Raphaela! Gostaria de conversar sobre um projeto.";

export default function Footer(): React.ReactElement {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Raphaelacristiane667", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raphaela-cristiane-21b806266",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/raphaela_cristianee/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="site-footer__panel">
          <div className="site-footer__brand">
            <h3 className="site-footer__title text-gradient">Raphaela Cristiane</h3>
            <p className="site-footer__role">{t("footer.role")}</p>
            <p className="site-footer__tagline">{t("footer.tagline")}</p>
          </div>

          <div className="site-footer__aside">
            <div className="site-footer__col">
              <span className="site-footer__label">{t("footer.nav")}</span>
              <nav className="site-footer__nav" aria-label={t("footer.nav")}>
                {NAV_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={false}>
                    {t(item.labelKey)}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="site-footer__col">
              <span className="site-footer__label">{t("footer.connect")}</span>
              <ul className="site-footer__contact-list">
                <li>
                  <a href={`mailto:${EMAIL}`} className="site-footer__contact-link">
                    <Mail size={16} aria-hidden />
                    <span>{t("contact.email.title")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__contact-link"
                  >
                    <MessageCircle size={16} aria-hidden />
                    <span>{t("contact.whatsapp.title")}</span>
                  </a>
                </li>
              </ul>
              <div className="site-footer__social" aria-label={t("footer.social")}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__social-btn"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="site-footer__copy">
          © {year} Raphaela Cristiane — {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
