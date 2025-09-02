"use client";

import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactPageClient(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--color-dark)] text-black dark:text-gray-300">
      {/* Header da página */}
      <div className="pt-20 pb-16 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>{t('footer.contact')} </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {t('projects.page.subtitle')}
          </p>
        </div>
      </div>

      {/* Seção de contato */}
      <div className="container-custom pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Informações de contato */}
          <div className="mb-16">
            {/* Coluna única - Por que me escolher */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-light-gray)' }}>
                {t('projects.btn.details')}
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    ✨ {t('services.button.details')}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {t('projects.subtitle')}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    🎨 UI/UX
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {t('services.subtitle')}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    ⚡ {t('about.backend')}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {t('hero.subtitle.tag')}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    🤝 {t('footer.social')}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {t('projects.subtitle')}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    🔧 Support
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {t('services.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-light-gray)' }}>
              {t('projects.page.title.part2')}
            </h2>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              {t('projects.page.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5534998828211?text=Olá Raphaela! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white',
                  textDecoration: 'none',
                  width: 'fit-content',
                  padding: '16px 24px',
                  fontSize: '15px',
                  minHeight: '50px'
                }}
              >
                <MessageCircle size={20} className="mr-3" />
                Conversar no WhatsApp
              </a>

              <a
                href="mailto:raphaelacristiane668@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  textDecoration: 'none'
                }}
              >
                <Mail size={20} className="mr-2" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


