/**
 * FeaturedServices.tsx - Componente de serviços em destaque
 * 
 * Este componente renderiza a seção de serviços com:
 * - Carrossel infinito e contínuo
 * - Cards de serviços com efeitos hover
 * - Botões de ação com gradiente
 * - Animações e transições suaves
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Palette, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function FeaturedServices() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Laptop,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.",
      features: [
        "Sites responsivos e otimizados para SEO",
        "Aplicações web com React/Next.js",
        "Integração com APIs e bancos de dados"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.",
      features: [
        "Design de interfaces responsivas",
        "Prototipagem e wireframes",
        "Testes de usabilidade"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Integrações e Automação",
      description: "Conexão de sistemas e automações para otimizar seu negócio. Integrações com APIs populares e automação de processos.",
      features: [
        "Integração com APIs (WhatsApp, Stripe, etc.)",
        "Automação de workflows",
        "Sincronização de dados"
      ],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // Duplicar os serviços para criar o efeito infinito circular
  const duplicatedServices = [...services, ...services, ...services, ...services, ...services, ...services];

  useEffect(() => {
    if (!carouselRef.current) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position += 0.8;
      
      // Quando chegar ao final, volta ao início para criar o loop circular
      if (position >= 2400) {
        position = 0;
      }

      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="featured-services-section py-20 overflow-hidden bg-white dark:bg-[var(--color-dark)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-gray-900 dark:text-white">
            Serviços em Destaque
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
            Soluções digitais completas para transformar suas ideias em realidade
          </p>
        </motion.div>

        {/* Container do carrossel */}
        <div 
          className="carousel-container relative mb-12"
        >
          <div 
            ref={carouselRef}
            className="carousel-track flex gap-8"
            style={{
              width: `${duplicatedServices.length * 400}px`,
              minWidth: `${duplicatedServices.length * 400}px`
            }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % services.length) * 0.2 }}
                viewport={{ once: true }}
                className="carousel-item flex-shrink-0"
                style={{ 
                  width: '400px',
                  minWidth: '400px',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: 'translateZ(0)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1.05) translateY(-20px)';
                  e.currentTarget.style.zIndex = '10';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1) translateY(0)';
                  e.currentTarget.style.zIndex = '1';
                }}
              >
                <Card 
                  className="card h-full overflow-hidden group border-0 shadow-none transition-all duration-700 transform hover:-translate-y-3 relative" 
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Glow interno */}
                  <div 
                    className="glow-internal absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      opacity: '0',
                      transition: 'opacity 0.7s ease',
                      filter: 'blur(2px)'
                    }}
                  ></div>
                  
                  {/* Glow externo */}
                  <div 
                    className="glow-external absolute -inset-3 rounded-xl pointer-events-none"
                    style={{
                      opacity: '0',
                      transition: 'opacity 0.7s ease',
                      filter: 'blur(12px)',
                      zIndex: '-1'
                    }}
                  ></div>
                  
                  {/* Padrão de fundo */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
                    }}
                  ></div>
                  
                  <div className="card-content relative z-10 transition-transform duration-700">
                    <CardHeader className="pb-6">
                      <div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:scale-110" 
                        style={{
                          background: `linear-gradient(135deg, ${service.color})`,
                          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <service.icon size={32} className="text-white drop-shadow-lg" />
                      </div>
                      
                      <CardTitle 
                        className="text-2xl font-bold text-center mb-3 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text text-gray-900 dark:text-white" 
                        style={{ 
                          background: `linear-gradient(135deg, ${service.color})`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text'
                        }}
                      >
                        {service.title}
                      </CardTitle>
                      
                      <CardDescription 
                        className="text-center leading-relaxed transition-all duration-500 text-base text-gray-700 dark:text-gray-300" 
                      >
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="flex items-start space-x-4 transition-all duration-500 group-hover:translate-x-2"
                          >
                            <div 
                              className="feature-dot w-3 h-3 rounded-full mt-2 flex-shrink-0 transition-all duration-500 flex items-center justify-center" 
                              style={{
                                background: `linear-gradient(135deg, ${service.color})`,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                              }}
                            >
                              <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                            </div>
                            <span 
                              className="text-sm leading-relaxed transition-all duration-500 font-medium text-gray-700 dark:text-gray-200" 
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Botão pill gradient */}
                      <div className="text-center">
                        <Link href={index % services.length === 0 ? '/services/web-development' : index % services.length === 1 ? '/services/ui-ux-design' : '/services/integrations-automation'}>
                          <button 
                            className="service-button"
                            style={{
                              background: 'linear-gradient(90deg, #ff4d8d, #8a4dff) !important',
                              border: 'none !important',
                              borderRadius: '8px !important',
                              padding: '15px 50px !important',
                              color: '#fff !important',
                              fontWeight: 'bold !important',
                              fontSize: '16px !important',
                              cursor: 'pointer !important',
                              transition: 'transform 0.2s ease, opacity 0.2s ease !important',
                              display: 'inline-block !important',
                              width: 'auto !important'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.opacity = '0.9';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.opacity = '1';
                            }}
                          >
                            Ver Detalhes
                          </button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Botão final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <button 
              className="cta-button"
              style={{
                background: 'linear-gradient(90deg, #ff4d8d, #8a4dff) !important',
                border: 'none !important',
                borderRadius: '8px !important',
                padding: '15px 50px !important',
                color: '#fff !important',
                fontWeight: 'bold !important',
                fontSize: '16px !important',
                cursor: 'pointer !important',
                transition: 'transform 0.2s ease, opacity 0.2s ease !important',
                display: 'inline-block !important',
                width: 'auto !important'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              Ver Todos os Serviços
            </button>
          </Link>
        </motion.div>
      </div>
      
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
          position: relative;
          cursor: grab;
          width: 100%;
        }
        
        .carousel-container:hover {
          cursor: grab;
        }
        
        .carousel-track {
          will-change: transform;
          display: flex;
          gap: 2rem;
          transition: transform 0.1s linear;
        }
        
        .carousel-item {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
          width: 400px;
          min-width: 400px;
          transform: translateZ(0);
          position: relative;
        }
        
        .carousel-item:hover {
          transform: translateZ(0) scale(1.05) translateY(-20px) !important;
          z-index: 10;
        }
        
        .carousel-item:hover .card {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 77, 141, 0.3) !important;
          transform: scale(1.02);
        }
        
        .service-button {
          background: linear-gradient(90deg, #ff4d8d, #8a4dff) !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 15px 50px !important;
          color: #fff !important;
          font-weight: bold !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: transform 0.2s ease, opacity 0.2s ease !important;
          display: inline-block !important;
          width: auto !important;
        }
        
        .cta-button {
          background: linear-gradient(90deg, #ff4d8d, #8a4dff) !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 15px 50px !important;
          color: #fff !important;
          font-weight: bold !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: transform 0.2s ease, opacity 0.2s ease !important;
          display: inline-block !important;
          width: auto !important;
        }
      `}</style>
    </section>
  );
}
