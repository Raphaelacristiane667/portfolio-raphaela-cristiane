import { Metadata } from 'next';
import { Mail, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato - Raphaela Cristiane',
  description: 'Entre em contato com Raphaela Cristiane para discutir seu projeto de desenvolvimento web. Vamos transformar suas ideias em realidade!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-dark)' }}>
      {/* Header da página */}
      <div className="pt-20 pb-16 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>Entre em </span>
            <span className="text-gradient">Contato</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
            Vamos conversar sobre seu projeto! Estou aqui para transformar suas ideias em experiências digitais inesquecíveis.
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
                Por que me escolher?
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    ✨ Soluções exclusivas e sob medida
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Cada projeto é único, pensado para destacar o seu negócio e impulsionar resultados reais.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    🎨 Design moderno, responsivo e intuitivo
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Interfaces que funcionam perfeitamente em qualquer dispositivo e encantam seus usuários.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    ⚡ Desenvolvimento ágil com tecnologias atuais
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Do frontend ao backend e automações, entrego soluções completas, rápidas e de alta performance.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    🤝 Parceria e transparência
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Acompanho você em cada etapa, com comunicação clara e foco total nas suas necessidades.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--color-primary)' }}>
                    🔧 Suporte e evolução contínua
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Não é só um sistema: é uma solução viva, com manutenção e melhorias constantes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-light-gray)' }}>
              Pronto para começar seu projeto?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
              Entre em contato agora mesmo e vamos transformar suas ideias em realidade!
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
