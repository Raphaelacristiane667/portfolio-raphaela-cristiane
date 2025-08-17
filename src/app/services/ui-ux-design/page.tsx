import { Metadata } from 'next';
import { Palette, Smartphone, Eye, Users, ArrowLeft, Layers, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design UI/UX - Raphaela Cristiane',
  description: 'Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.',
};

export default function UIDesignPage() {
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
              <Palette size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>Design </span>
            <span className="text-gradient">UI/UX</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
            Interfaces intuitivas e agradáveis para melhor experiência do usuário. 
            Design focado na usabilidade e estética moderna.
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
                  Design Responsivo
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Layouts que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Layers size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Prototipagem
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Criação de wireframes e protótipos interativos para validação do design.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Eye size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Testes de Usabilidade
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Avaliação da experiência do usuário para otimizar a interface.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Users size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Pesquisa de Usuários
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Análise do comportamento e necessidades dos usuários para criar soluções eficazes.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Zap size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Design System
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Criação de bibliotecas de componentes para manter consistência visual.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Palette size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Identidade Visual
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Desenvolvimento de paletas de cores, tipografias e elementos visuais únicos.
                </p>
              </div>
            </div>
          </div>

          {/* Processo de design */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Como funciona o processo de design
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Pesquisa
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Análise do público-alvo e concorrência.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Wireframes
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Estrutura básica e organização do conteúdo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Design
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Criação visual com cores, tipografias e elementos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Protótipo
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Versão interativa para testes e validação.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Entrega
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Arquivos finais e documentação completa.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-light-gray)' }}>
              Pronto para transformar a experiência dos seus usuários?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
              Vamos criar interfaces que encantam e convertem!
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
