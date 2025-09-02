"use client";

import { Zap, Database, Workflow, ArrowLeft, Link as LinkIcon, Shield, BarChart3, CheckCircle, Clock, TrendingUp, Users, Cpu, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function IntegrationsClient(): React.ReactElement {
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
              <Zap size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-300">{language === 'en' ? 'Integrations & ' : 'Integrações e '}</span>
            <span className="text-gradient">{language === 'en' ? 'Automation' : 'Automação'}</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {language === 'en' ? 'Transform your business with smart integration and automation solutions.' : 'Transforme seu negócio com soluções inteligentes de integração e automação.'}
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Benefícios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-gray-300">
              {language === 'en' ? 'Why integrations and automation?' : 'Por que integrações e automação?'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <TrendingUp size={40} style={{ color: 'var(--color-primary)' }} />, t: language === 'en' ? 'Productivity' : 'Produtividade', d: language === 'en' ? 'Reduce manual tasks and increase efficiency.' : 'Reduza tarefas manuais e aumente a eficiência.' },
                { icon: <Clock size={40} style={{ color: 'var(--color-primary)' }} />, t: language === 'en' ? 'Time saving' : 'Economia de tempo', d: language === 'en' ? 'Automations work 24/7.' : 'Automações funcionam 24/7.' },
                { icon: <CheckCircle size={40} style={{ color: 'var(--color-primary)' }} />, t: language === 'en' ? 'Fewer errors' : 'Menos erros', d: language === 'en' ? 'Eliminate human error with precise flows.' : 'Elimine erros humanos com fluxos precisos.' },
                { icon: <Users size={40} style={{ color: 'var(--color-primary)' }} />, t: language === 'en' ? 'Better experience' : 'Melhor experiência', d: language === 'en' ? 'Faster, personalized service.' : 'Atendimento mais rápido e personalizado.' }
              ].map((b, i) => (
                <div key={i} className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.08)' }}>
                  <div className="flex justify-center mb-4">{b.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-300">{b.t}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{b.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-300">
              {language === 'en' ? 'Ready to automate and integrate your systems?' : 'Pronto para automatizar e integrar seus sistemas?'}
            </h2>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Let’s connect everything and optimize your processes!' : 'Vamos conectar tudo e otimizar seus processos!'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="inline-flex w-auto items-center justify-center px-12 py-3 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-flex', width: 'auto', minWidth: '220px' }}>
                {language === 'en' ? 'Request a Quote' : 'Solicitar Orçamento'}
              </Link>
              <Link href="/services" className="inline-flex w-auto items-center justify-center px-12 py-3 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textDecoration: 'none', display: 'inline-flex', width: 'auto', minWidth: '220px' }}>
                {language === 'en' ? 'View other services' : 'Ver outros serviços'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


