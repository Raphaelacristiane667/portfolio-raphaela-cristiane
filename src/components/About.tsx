/**
 * About.tsx - Componente da seção "Sobre Mim"
 * 
 * Este componente renderiza a seção sobre a desenvolvedora com:
 * - Foto de perfil com posicionamento responsivo
 * - Descrição pessoal e profissional
 * - Seção de habilidades técnicas organizadas por categoria
 * - Animações sequenciais para as habilidades
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client"; // Diretiva para indicar que este é um componente do lado do cliente

// Importações necessárias para animações e otimização de imagens
import { motion } from 'framer-motion'; // Biblioteca para animações suaves
import Image from 'next/image'; // Componente otimizado de imagem do Next.js
import { useLanguage } from '@/components/LanguageProvider';

// Componente About - Seção "Sobre Mim" do portfólio
// Apresenta informações pessoais, habilidades e estatísticas profissionais
export default function About() {
  const { t } = useLanguage();
  const frontendSkills = [
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "Tailwind CSS",
    "Vite",
    "Material UI",
    "Framer Motion",
  ];

  const backendSkills = [
    "TypeScript",
    "C#",
    "Java",
    "PHP",
    "Node.js",
    "Express",
    "Spring Boot",
    "ASP.NET Core",
    "SQL Server",
    "PostgreSQL",
    "SQLite",
  ];

  const toolsSkills = [
    "ScriptCase",
    "Git",
    "GitHub Actions",
    "IIS",
    "Prisma",
    "n8n",
    "Figma",
  ];

  const renderSkillPill = (
    skill: string,
    index: number,
    variant: "frontend" | "backend" | "tools"
  ) => (
    <motion.span
      key={skill}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`about-skills-pill about-skills-pill--${variant}`}
    >
      {skill}
    </motion.span>
  );

  return (
    <section id="about" className="section-anchor theme-section-alt py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* 
            Coluna da esquerda - Foto de perfil em card redondo elegante
            Em telas grandes fica à esquerda, em mobile fica centralizada
          */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start lg:sticky lg:top-48"
            style={{ marginTop: '80px' }}
          >
            {/* 
              Container principal do card da foto
              Design elegante com sombras e efeitos visuais
            */}
            <div className="relative mt-24 lg:mt-32 about-photo-wrap" style={{ marginTop: '80px' }}>
              <div
                className="relative rounded-full overflow-visible shadow-2xl about-photo-desktop about-photo-frame"
                style={{
                  width: '384px',
                  height: '384px',
                  boxShadow: '0 0 50px rgba(236, 72, 153, 0.45), 0 0 80px rgba(139, 92, 246, 0.25)',
                }}
              >
                <div className="about-photo-glow" aria-hidden />
                <div className="about-photo-ring">
                  <div className="about-photo-inner">
                    <Image
                      src="/profile.jpg"
                      alt="Raphaela Cristiane - Desenvolvedora Web"
                      width={500}
                      height={500}
                      className="about-photo-img"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="about-photo-status" aria-hidden />
            </div>
          </motion.div>

          {/* 
            Coluna da direita - Texto, habilidades e estatísticas
            Anima da direita para a esquerda com delay
          */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Título da seção com cores diferenciadas */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="theme-heading-muted">{t('about.title').split(' ')[0]} </span>
              <span className="text-gradient">{t('about.title').split(' ').slice(1).join(' ')}</span>
            </h2>

            {/* 
              Descrição pessoal dividida em parágrafos
              Cada parágrafo conta uma parte da história profissional
            */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed theme-text">
                {t('about.p1')}
              </p>
              <p className="text-lg leading-relaxed theme-text">
                {t('about.p2')}
              </p>
              <p className="text-lg leading-relaxed theme-text">
                {t('about.p3')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="about-skills-band"
        >
          <h3 className="about-skills-band__title text-gradient">
            {t('about.skills')}
          </h3>

          <div className="about-skills-grid">
            <div className="about-skills-group">
              <h4 className="about-skills-group__label about-skills-group__label--frontend">
                {t('about.frontend')}
              </h4>
              <div className="about-skills-pills">
                {frontendSkills.map((skill, index) => renderSkillPill(skill, index, "frontend"))}
              </div>
            </div>

            <div className="about-skills-group">
              <h4 className="about-skills-group__label about-skills-group__label--backend">
                {t('about.backend')}
              </h4>
              <div className="about-skills-pills">
                {backendSkills.map((skill, index) => renderSkillPill(skill, index, "backend"))}
              </div>
            </div>

            <div className="about-skills-group about-skills-group--tools">
              <h4 className="about-skills-group__label about-skills-group__label--tools">
                {t('about.tools')}
              </h4>
              <div className="about-skills-pills">
                {toolsSkills.map((skill, index) => renderSkillPill(skill, index, "tools"))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
