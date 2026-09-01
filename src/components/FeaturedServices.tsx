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
import { useLanguage } from '@/components/LanguageProvider';
import { useEffect, useRef } from 'react';

const CARD_WIDTH = 380;

export default function FeaturedServices() {
  const { t, language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Laptop,
      slug: "web-development",
      title: language === "en" ? "Web Development" : "Desenvolvimento Web",
      description:
        language === "en"
          ? "Responsive, fast and modern websites and applications. Complete development from design to implementation."
          : "Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.",
      features: [
        language === "en" ? "Responsive and SEO-optimized websites" : "Sites responsivos e otimizados para SEO",
        language === "en" ? "Web apps with React/Next.js" : "Aplicações web com React/Next.js",
        language === "en" ? "API and database integration" : "Integração com APIs e bancos de dados",
      ],
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      icon: Palette,
      slug: "ui-ux-design",
      title: language === "en" ? "UI/UX Design" : "Design UI/UX",
      description:
        language === "en"
          ? "Intuitive and pleasant interfaces focused on usability and modern aesthetics."
          : "Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.",
      features: [
        language === "en" ? "Responsive interface design" : "Design de interfaces responsivas",
        language === "en" ? "Prototyping and wireframes" : "Prototipagem e wireframes",
        language === "en" ? "Usability testing" : "Testes de usabilidade",
      ],
      gradient: "linear-gradient(135deg, #ec4899, #a855f7)",
    },
    {
      icon: Zap,
      slug: "integrations-automation",
      title: language === "en" ? "Integrations & Automation" : "Integrações e Automação",
      description:
        language === "en"
          ? "Connect systems and automate processes to optimize your business. Integrations with popular APIs and workflow automation."
          : "Conexão de sistemas e automações para otimizar seu negócio. Integrações com APIs populares e automação de processos.",
      features: [
        language === "en" ? "API integrations (WhatsApp, Stripe, etc.)" : "Integração com APIs (WhatsApp, Stripe, etc.)",
        language === "en" ? "Workflow automation" : "Automação de workflows",
        language === "en" ? "Data synchronization" : "Sincronização de dados",
      ],
      gradient: "linear-gradient(135deg, #f97316, #eab308)",
    },
  ];

  // Duplicar apenas 2x para loop infinito (não 6x)
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    if (!carouselRef.current) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position += 0.8;
      
      // Quando chegar ao final, volta ao início para criar o loop circular
      if (position >= (CARD_WIDTH + 24) * services.length * 2) {
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
    <section id="services" className="section-anchor featured-services-section py-20 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('services.heading')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed theme-text">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="carousel-container relative mb-12">
          <div
            ref={carouselRef}
            className="carousel-track"
            style={{
              width: `${duplicatedServices.length * CARD_WIDTH}px`,
            }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={`${service.slug}-${index}`}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % services.length) * 0.2 }}
                viewport={{ once: true }}
                className="carousel-item"
              >
                <Card className="service-carousel-card h-full group relative">
                  <div className="service-carousel-card__pattern" aria-hidden />

                  <div className="service-carousel-card__body">
                    <CardHeader className="service-carousel-card__header">
                      <div
                        className="service-carousel-card__icon"
                        style={{ background: service.gradient }}
                      >
                        <service.icon size={32} className="text-white" aria-hidden />
                      </div>

                      <CardTitle className="service-carousel-card__title">
                        {service.title}
                      </CardTitle>

                      <CardDescription className="service-carousel-card__desc">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="service-carousel-card__content">
                      <ul className="service-carousel-card__features">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <span
                              className="service-carousel-card__dot"
                              style={{ background: service.gradient }}
                              aria-hidden
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="service-carousel-card__actions">
                        <Link href={`/services/${service.slug}`}>
                          <button type="button" className="service-button">
                            {t("services.button.details")}
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
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <button type="button" className="cta-button">
              {t("services.button.all")}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
