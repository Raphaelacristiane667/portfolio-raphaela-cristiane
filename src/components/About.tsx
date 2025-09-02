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
  // Lista de habilidades técnicas organizadas por categoria
  // Estas são as principais tecnologias que Raphaela domina
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
    "Tailwind CSS", "Firebase", "Node.js", "Git", "Figma"
  ];

  return (
    // Seção principal com padding vertical e fundo cinza escuro
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--color-dark-gray)' }}>
      <div className="container-custom">
        {/* Grid responsivo: 1 coluna em mobile, 2 colunas em desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
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
            className="flex flex-col justify-center min-h-[600px]"
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
            <div className="space-y-6 mb-12">
              {/* Primeiro parágrafo: Apresentação e paixão */}
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.p1')}
              </p>
              
              {/* Segundo parágrafo: Missão e compromisso */}
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.p2')}
              </p>
              
              {/* Terceiro parágrafo: Experiência e localização */}
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {t('about.p3')}
              </p>
            </div>

            {/* 
              Seção de habilidades técnicas
              Cada habilidade aparece com animação sequencial
            */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-8 text-gradient">
                {t('about.skills')}
              </h3>
              
              {/* Container vertical: frontend em cima, backend embaixo */}
              <div className="space-y-10">
                {/* Categoria: Frontend */}
                <div>
                  <h4 className="text-base font-medium text-gray-300 mb-6 uppercase tracking-wider border-b border-pink-500/30 pb-3">
                    {t('about.frontend')}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-medium cursor-default transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                          color: 'white',
                          padding: skill === "Tailwind CSS" ? '4px 05px' : '4px 10px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontFamily: 'Arial, sans-serif',
                          margin: '4px',
                          boxShadow: '0 2px 8px rgba(236, 72, 153, 0.3)',
                          whiteSpace: skill === "Tailwind CSS" ? 'nowrap' : 'normal',
                          overflow: skill === "Tailwind CSS" ? 'hidden' : 'visible',
                          textAlign: 'center'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Categoria: Backend & Ferramentas */}
                <div>
                  <h4 className="text-base font-medium text-gray-300 mb-6 uppercase tracking-wider border-b border-purple-500/30 pb-3">
                    {t('about.backend')}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["Firebase", "Node.js", "Git", "Figma", "PHP", "Python", "MySQL"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-medium cursor-default transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontFamily: 'Arial, sans-serif',
                          margin: '4px',
                          boxShadow: '0 2px 8px rgba(168, 85, 247, 0.3)'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
