import { Metadata } from 'next';
import { Laptop, Code, Smartphone, Zap, Search, Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desenvolvimento Web - Raphaela Cristiane',
  description: 'Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.',
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-dark)' }}>
      {/* Header da página */}
      <div className="pt-20 pb-16 text-center">
        <div className="container-custom">
          <Link 
            href="/services" 
            className="inline-flex items-center text-pink-400 hover:text-pink-300 mb-8 transition-colors"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar aos Serviços
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
              <Laptop size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>Desenvolvimento </span>
            <span className="text-gradient">Web</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
            Sites e aplicações responsivas, rápidos e com visual moderno. 
            Desenvolvimento completo desde o design até a implementação.
          </p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container-custom pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* O que ofereço */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              O que ofereço
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Smartphone size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Sites Responsivos
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Layouts que se adaptam perfeitamente a qualquer dispositivo, desde smartphones até desktops.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Search size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  SEO Otimizado
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Estrutura técnica otimizada para melhor posicionamento nos motores de busca.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Zap size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Alta Performance
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Sites rápidos e otimizados para proporcionar a melhor experiência ao usuário.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Code size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  React & Next.js
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Desenvolvimento com as tecnologias mais modernas e eficientes do mercado.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Database size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Integração de APIs
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Conexão com sistemas externos e bancos de dados para funcionalidades avançadas.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Laptop size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Design Moderno
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Interfaces atrativas e profissionais que refletem a identidade da sua marca.
                </p>
              </div>
            </div>
          </div>

          {/* Processo de desenvolvimento */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Como funciona o processo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Briefing
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Entendimento das suas necessidades e objetivos do projeto.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Design
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Criação do layout visual e protótipos para sua aprovação.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Desenvolvimento
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Programação do site com as melhores práticas e tecnologias.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Entrega
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Site finalizado, testado e pronto para uso.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-light-gray)' }}>
              Pronto para começar seu projeto web?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
              Vamos transformar suas ideias em uma presença digital incrível!
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
