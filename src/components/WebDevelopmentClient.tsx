"use client";

import { Metadata } from 'next';
import { Laptop, Code, Smartphone, Zap, Search, Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function WebDevelopmentClient(): React.ReactElement {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--color-dark)] text-black dark:text-gray-300">
      <div className="pt-20 pb-16 text-center">
        <div className="container-custom">
          <Link href="/services" className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 transition-colors" style={{ textDecoration: 'none' }}>
            <ArrowLeft size={20} className="mr-2" />
            {language === 'en' ? 'Back to Services' : 'Voltar aos Serviços'}
          </Link>

          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
              <Laptop size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-300">{language === 'en' ? 'Web ' : 'Desenvolvimento '}</span>
            <span className="text-gradient">{language === 'en' ? 'Development' : 'Web'}</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {language === 'en'
              ? 'Responsive, fast and modern websites and applications. Complete development from design to implementation.'
              : 'Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.'}
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-300">
              {language === 'en' ? 'What I offer' : 'O que ofereço'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone size={40} style={{ color: 'var(--color-primary)' }} />,
                  title: language === 'en' ? 'Responsive Websites' : 'Sites Responsivos',
                  desc: language === 'en'
                    ? 'Layouts that adapt perfectly to any device.'
                    : 'Layouts que se adaptam perfeitamente a qualquer dispositivo, desde smartphones até desktops.'
                },
                {
                  icon: <Search size={40} style={{ color: 'var(--color-primary)' }} />,
                  title: 'SEO',
                  desc: language === 'en' ? 'Technical structure optimized for search engines.' : 'Estrutura técnica otimizada para melhor posicionamento.'
                },
                {
                  icon: <Zap size={40} style={{ color: 'var(--color-primary)' }} />,
                  title: language === 'en' ? 'High Performance' : 'Alta Performance',
                  desc: language === 'en' ? 'Fast, optimized websites for the best UX.' : 'Sites rápidos e otimizados para melhor experiência.'
                },
                {
                  icon: <Code size={40} style={{ color: 'var(--color-primary)' }} />,
                  title: 'React & Next.js',
                  desc: language === 'en' ? 'Modern and efficient stack.' : 'Tecnologias modernas e eficientes.'
                },
                {
                  icon: <Database size={40} style={{ color: 'var(--color-primary)' }} />,
                  title: language === 'en' ? 'API Integration' : 'Integração de APIs',
                  desc: language === 'en' ? 'Connect external systems and databases.' : 'Conexão com sistemas e bancos de dados.'
                },
                {
                  icon: <Laptop size={40} style={{ color: 'var(--color-primary)' }} />,
                  title: language === 'en' ? 'Modern Design' : 'Design Moderno',
                  desc: language === 'en' ? 'Attractive, professional interfaces.' : 'Interfaces atrativas e profissionais.'
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.08)' }}>
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-300">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-300">
              {language === 'en' ? 'Ready to start your project?' : 'Pronto para começar seu projeto web?'}
            </h2>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Let’s turn your ideas into an outstanding digital presence!' : 'Vamos transformar suas ideias em uma presença digital incrível!'}
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none' }}>
              {language === 'en' ? 'Request a Quote' : 'Solicitar Orçamento'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


