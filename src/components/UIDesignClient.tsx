"use client";

import { Palette, Smartphone, Eye, Users, ArrowLeft, Layers, Zap } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function UIDesignClient(): React.ReactElement {
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
              <Palette size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-300">Design </span>
            <span className="text-gradient">UI/UX</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {language === 'en' ? 'Intuitive, delightful interfaces focused on usability and modern aesthetics.' : 'Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.'}
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
                { icon: <Smartphone size={40} style={{ color: 'var(--color-primary)' }} />, title: language === 'en' ? 'Responsive Design' : 'Design Responsivo', desc: language === 'en' ? 'Layouts that adapt to any device and screen size.' : 'Layouts que se adaptam a todos os dispositivos.' },
                { icon: <Layers size={40} style={{ color: 'var(--color-primary)' }} />, title: language === 'en' ? 'Prototyping' : 'Prototipagem', desc: language === 'en' ? 'Interactive wireframes and prototypes for validation.' : 'Wireframes e protótipos interativos.' },
                { icon: <Eye size={40} style={{ color: 'var(--color-primary)' }} />, title: language === 'en' ? 'Usability Testing' : 'Testes de Usabilidade', desc: language === 'en' ? 'User testing to optimize the interface.' : 'Avaliação da experiência do usuário.' },
                { icon: <Users size={40} style={{ color: 'var(--color-primary)' }} />, title: language === 'en' ? 'User Research' : 'Pesquisa de Usuários', desc: language === 'en' ? 'Behavior and needs analysis to create effective solutions.' : 'Análise de comportamento e necessidades.' },
                { icon: <Zap size={40} style={{ color: 'var(--color-primary)' }} />, title: 'Design System', desc: language === 'en' ? 'Component libraries for visual consistency.' : 'Bibliotecas de componentes para consistência visual.' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.08)' }}>
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-300">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


