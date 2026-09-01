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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`about-skills-pill about-skills-pill--${variant}`}
    >
      {skill}
    </motion.span>
  );

  return (
    <section id="about" className="section-anchor py-20" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* 
            Coluna da esquerda - Foto de perfil em card redondo elegante
            Em telas grandes fica à esquerda, em mobile fica centralizada
          */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
            <div className="relative mt-24 lg:mt-32" style={{ marginTop: '80px' }}>
              {/* 
                Card redondo principal com gradiente de borda
                Efeito de brilho rosa/roxo/ciano similar ao WhatsApp
              */}
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl about-photo-desktop" style={{
                boxShadow: '0 0 50px rgba(236, 72, 153, 0.5), 0 0 100px rgba(139, 92, 246, 0.3), 0 0 150px rgba(6, 182, 212, 0.2)',
                width: '384px',
                height: '384px'
              }}>
                {/* 
                  Gradiente de borda animado com brilho similar ao WhatsApp
                  Cria um efeito de borda colorida em movimento
                */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-6 animate-pulse shadow-lg" style={{boxShadow: '0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(139, 92, 246, 0.6), 0 0 90px rgba(6, 182, 212, 0.4)'}}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                    {/* 
                      Foto de perfil otimizada para performance e qualidade
                    */}
                    <Image
                      src="/profile.jpg"
                      alt="Raphaela Cristiane - Desenvolvedora Web"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                    
                    {/* 
                      Efeito de brilho interno similar ao WhatsApp
                      Cria um brilho sutil na parte superior da imagem
                    */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
                    
                    {/* 
                      Efeito de brilho superior com gradiente rosa/roxo
                      Cria um brilho colorido na parte superior da imagem
                    */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-pink-400/30 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* 
                  Efeito de glow externo rosa/roxo/ciano similar ao WhatsApp
                  Múltiplas camadas para criar o brilho característico
                */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-100 blur-none animate-pulse shadow-lg"></div>
                <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-95 blur-sm animate-pulse delay-200 shadow-lg"></div>
                <div className="absolute -inset-18 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 opacity-90 blur-md animate-pulse delay-400 shadow-lg"></div>
                <div className="absolute -inset-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-85 blur-lg animate-pulse delay-600 shadow-lg"></div>
                <div className="absolute -inset-30 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-80 blur-xl animate-pulse delay-800 shadow-lg"></div>
                <div className="absolute -inset-36 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 opacity-75 blur-2xl animate-pulse delay-1000 shadow-lg"></div>
                <div className="absolute -inset-48 rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 opacity-70 blur-3xl animate-pulse delay-1200 shadow-lg"></div>
              </div>
              
              {/* 
                Indicador de status profissional
                Pequeno círculo verde no canto inferior direito
              */}
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-500 rounded-full border-4 border-black animate-pulse shadow-lg"></div>
            </div>
          </motion.div>

          {/* 
            Coluna da direita - Texto, habilidades e estatísticas
            Anima da direita para a esquerda com delay
          */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Título da seção com cores diferenciadas */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span style={{ color: 'var(--color-light-gray)' }}>{t('about.title').split(' ')[0]} </span>
              <span className="text-gradient">{t('about.title').split(' ').slice(1).join(' ')}</span>
            </h2>

            {/* 
              Descrição pessoal dividida em parágrafos
              Cada parágrafo conta uma parte da história profissional
            */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.p1')}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.p2')}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.p3')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
