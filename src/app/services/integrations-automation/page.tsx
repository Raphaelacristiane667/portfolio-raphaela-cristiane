import { Metadata } from 'next';
import { Zap, Database, Workflow, ArrowLeft, Link as LinkIcon, Shield, BarChart3, CheckCircle, Clock, TrendingUp, Users, Globe, Cpu, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integrações e Automação - Raphaela Cristiane',
  description: 'Conexão de sistemas e automações para otimizar seu negócio. Integrações com APIs populares e automação de processos.',
};

export default function IntegrationsPage() {
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
              <Zap size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>Integrações e </span>
            <span className="text-gradient">Automação</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
            Transforme seu negócio com soluções inteligentes de integração e automação. 
            Conecte sistemas, otimize processos e aumente a eficiência operacional.
          </p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container-custom pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Por que escolher integrações */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Por que escolher integrações e automação?
            </h2>
            
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <TrendingUp size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Aumento de Produtividade
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Reduza tarefas manuais e aumente a eficiência em até 80%.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Clock size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Economia de Tempo
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Processos automatizados funcionam 24/7 sem interrupções.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <CheckCircle size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Redução de Erros
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Elimine erros humanos com automações precisas e confiáveis.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Users size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Melhor Experiência
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Atendimento mais rápido e personalizado para seus clientes.
                </p>
              </div>
            </div>
          </div>

          {/* O que ofereço */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              O que ofereço
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <LinkIcon size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Integração de APIs
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Conexão com WhatsApp, Stripe, Google e outras APIs populares para expandir funcionalidades.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Workflow size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Automação de Workflows
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Criação de processos automatizados para otimizar operações e reduzir trabalho manual.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Database size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Sincronização de Dados
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Manutenção de dados consistentes entre diferentes sistemas e plataformas.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Shield size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Segurança e Compliance
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Implementação de medidas de segurança para proteger dados e garantir conformidade.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 77, 166, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <BarChart3 size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Monitoramento e Analytics
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Acompanhamento em tempo real do desempenho e análise de dados para insights.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <div className="flex justify-center mb-4">
                  <Zap size={40} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-light-gray)' }}>
                  Webhooks e Eventos
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Configuração de notificações em tempo real para ações e mudanças nos sistemas.
                </p>
              </div>
            </div>
          </div>

          {/* Casos de uso */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Casos de Uso Reais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-pink-500/30" style={{ backgroundColor: 'rgba(255, 77, 166, 0.05)' }}>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mr-4">
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--color-light-gray)' }}>
                    E-commerce
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Integração automática entre loja virtual, sistema de pagamento e estoque. 
                  Notificações automáticas para clientes e gestão de pedidos em tempo real.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(255, 77, 166, 0.2)', color: 'var(--color-primary)' }}>
                    Stripe
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)', color: 'var(--color-primary)' }}>
                    WhatsApp
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(255, 77, 166, 0.2)', color: 'var(--color-primary)' }}>
                    Email
                  </span>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-purple-500/30" style={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--color-light-gray)' }}>
                    SaaS
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Automação de onboarding, cobrança recorrente e suporte ao cliente. 
                  Sincronização com CRMs e ferramentas de marketing para melhor conversão.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)', color: 'var(--color-primary)' }}>
                    HubSpot
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(255, 77, 166, 0.2)', color: 'var(--color-primary)' }}>
                    Stripe
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)', color: 'var(--color-primary)' }}>
                    Slack
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* APIs populares */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              APIs e Integrações Disponíveis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  WhatsApp Business
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Automação de mensagens, notificações e atendimento ao cliente.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Stripe
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Processamento de pagamentos e gestão de assinaturas.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Google Services
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Maps, Analytics, Drive e outras ferramentas Google.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  CRMs e ERPs
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Integração com sistemas de gestão empresarial.
                </p>
              </div>
            </div>
          </div>

          {/* Tecnologias utilizadas */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Tecnologias que Utilizo
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Node.js', icon: '⚡' },
                { name: 'Python', icon: '🐍' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Redis', icon: '🔴' },
                { name: 'Docker', icon: '🐳' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Webhooks', icon: '🔗' },
                { name: 'REST APIs', icon: '🌐' },
                { name: 'GraphQL', icon: '📊' },
                { name: 'JWT', icon: '🔐' },
                { name: 'OAuth 2.0', icon: '🔑' }
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-light-gray)' }}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Processo de implementação */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Como funciona a implementação
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Análise
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Estudo dos sistemas existentes e definição dos objetivos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Planejamento
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Arquitetura da solução e cronograma de implementação.
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
                  Criação das integrações e automações com testes contínuos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                  Deploy
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Implementação em produção com monitoramento e suporte.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-light-gray)' }}>
              Perguntas Frequentes
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="p-6 rounded-lg border border-gray-700" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                  Quanto tempo leva para implementar uma integração?
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Depende da complexidade, mas geralmente entre 1-4 semanas. Integrações simples podem ser feitas em alguns dias.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-700" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                  Vocês oferecem suporte após a implementação?
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Sim! Oferecemos suporte técnico e manutenção contínua para garantir que tudo funcione perfeitamente.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-700" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                  Posso integrar com sistemas personalizados?
                </h3>
                <p className="text-sm" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                  Absolutamente! Trabalho com APIs personalizadas e sistemas legados para criar soluções sob medida.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-light-gray)' }}>
              Pronto para automatizar e integrar seus sistemas?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
              Vamos conectar tudo e otimizar seus processos para impulsionar seu negócio!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Ver Outros Serviços
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
