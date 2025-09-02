"use client";

import { Laptop, Palette, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function ServicesPageClient(): React.ReactElement {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--color-dark)] text-black dark:text-gray-300">
      <div className="pt-20 pb-16 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>{language === 'en' ? 'My ' : 'Meus '}</span>
            <span className="text-gradient">{language === 'en' ? 'Services' : 'Serviços'}</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desenvolvimento Web */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                  <Laptop size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-light-gray)' }}>
                {language === 'en' ? 'Web Development' : 'Desenvolvimento Web'}
              </h3>
              <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Responsive, fast and modern websites and applications. Complete development from design to implementation.' : 'Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.'}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Responsive and SEO-optimized websites' : 'Sites responsivos e otimizados para SEO'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Web apps with React/Next.js' : 'Aplicações web com React/Next.js'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'API and database integration' : 'Integração com APIs e bancos de dados'}
                  </span>
                </div>
              </div>
              <Link href="/services/web-development" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:bg-pink-500 hover:border-pink-500 hover:text-white" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none' }}>
                {t('services.button.details')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Design UI/UX */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                  <Palette size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-light-gray)' }}>
                {language === 'en' ? 'UI/UX Design' : 'Design UI/UX'}
              </h3>
              <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Intuitive and pleasant interfaces for a better user experience. Design focused on usability and modern aesthetics.' : 'Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.'}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Responsive interface design' : 'Design de interfaces responsivas'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Prototyping and wireframes' : 'Prototipagem e wireframes'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Usability testing' : 'Testes de usabilidade'}
                  </span>
                </div>
              </div>
              <Link href="/services/ui-ux-design" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:bg-purple-500 hover:border-purple-500 hover:text-white" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none' }}>
                {t('services.button.details')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Integrações e Automação */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                  <Zap size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-light-gray)' }}>
                {language === 'en' ? 'Integrations & Automation' : 'Integrações e Automação'}
              </h3>
              <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Connect systems and automate processes to optimize your business. Integrations with popular APIs and workflow automation.' : 'Conexão de sistemas e automações para otimizar seu negócio. Integrações com APIs populares e automação de processos.'}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'API integrations (WhatsApp, Stripe, etc.)' : 'Integração com APIs (WhatsApp, Stripe, etc.)'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Workflow automation' : 'Automação de workflows'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {language === 'en' ? 'Data synchronization' : 'Sincronização de dados'}
                  </span>
                </div>
              </div>
              <Link href="/services/integrations-automation" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:bg-pink-500 hover:border-pink-500 hover:text-white" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none' }}>
                {t('services.button.details')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-light-gray)' }}>
              {language === 'en' ? "Didn't find what you were looking for?" : 'Não encontrou o que procurava?'}
            </h2>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Get in touch to discuss tailored solutions for your needs!' : 'Entre em contato para discutirmos soluções personalizadas para suas necessidades!'}
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none' }}>
              {language === 'en' ? 'Discuss Project' : 'Conversar Sobre Projeto'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


