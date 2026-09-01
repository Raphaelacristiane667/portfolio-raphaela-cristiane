"use client";

import { useLanguage } from '@/components/LanguageProvider';
import { Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/raphaela_cristianee/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raphaela-cristiane-21b806266", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Raphaelacristiane667", label: "GitHub" },
  ];

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="site-footer__grid">
          <div className="site-footer__block">
            <h3 className="site-footer__title text-gradient">{t('footer.about.title')}</h3>
            <p className="site-footer__text">{t('footer.about.text')}</p>
          </div>

          <div className="site-footer__block">
            <h4 className="site-footer__subtitle">{t('footer.contact')}</h4>
            <div className="site-footer__icons">
              <a
                href="mailto:raphaelacristiane668@gmail.com"
                className="site-footer__icon-btn"
                title="Enviar email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/553499385291?text=Olá Raphaela! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__icon-btn"
                title="Conversar no WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="site-footer__block">
            <h4 className="site-footer__subtitle">{t('footer.social')}</h4>
            <div className="site-footer__icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__icon-btn"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="site-footer__copy">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
