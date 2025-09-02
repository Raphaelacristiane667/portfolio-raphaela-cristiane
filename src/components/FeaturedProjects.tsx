/**
 * FeaturedProjects.tsx - Componente de projetos em destaque
 * 
 * Este componente renderiza a seção de projetos com:
 * - Grid responsivo de projetos
 * - Cards com imagens e descrições
 * - Botões de ação com gradiente
 * - Modal de vídeo para projetos específicos
 * - Redirecionamento para portfólio pessoal
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client"; // Diretiva para indicar que este é um componente do lado do cliente

// Importações necessárias para animações, navegação e componentes UI
import { motion } from 'framer-motion'; // Biblioteca para animações suaves
import Link from 'next/link'; // Componente de navegação do Next.js
import { useLanguage } from '@/components/LanguageProvider';

import { useState } from 'react'; // Hook para gerenciar estado
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Componentes de card

import { ExternalLink, Play, Eye } from 'lucide-react'; // Ícones de link externo, play e olho
import { getFeaturedProjects } from '@/data/projects'; // Função para obter projetos em destaque
import VideoModal from './VideoModal'; // Componente do modal de vídeo

// Componente FeaturedProjects - Exibe projetos em destaque do portfólio
// Mostra os melhores trabalhos para impressionar visitantes e clientes potenciais
export default function FeaturedProjects() {
  const { t, language } = useLanguage();
  // Obtém apenas os projetos marcados como "featured" (em destaque)
  // Estes são os projetos mais impressionantes e representativos
  const featuredProjectsBase = getFeaturedProjects();

  // Traduções específicas dos projetos em destaque (por id)
  const featuredProjects = featuredProjectsBase.map((project) => {
    if (language !== 'en') return project;
    switch (project.id) {
      case 1:
        return {
          ...project,
          title: 'Barbershop Scheduling System',
          description: 'Responsive web app for online booking with WhatsApp integration and automatic notifications. Complete system for managing clients and schedules.',
          category: 'Web System',
          technologies: project.technologies.map((t) => t === 'Tailwind CSS' ? 'Tailwind CSS' : t)
        };
      case 2:
        return {
          ...project,
          title: 'Personal Portfolio',
          description: 'My professional website showcasing projects, skills and services. Modern design with smooth animations and SEO optimized.',
          category: 'Portfolio'
        };
      case 3:
        return {
          ...project,
          title: 'OpenSource-API Backend',
          description: 'Complete REST API for managing users, posts and comments with JWT auth, roles system and SQLite DB. Academic project with solid architecture and full documentation.',
          category: 'Backend API'
        };
      default:
        return project;
    }
  });

  // Estado para controlar o modal de vídeo
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl: string;
    projectTitle: string;
    projectDescription: string;
  }>({
    isOpen: false,
    videoUrl: '',
    projectTitle: '',
    projectDescription: ''
  });

  // Função para abrir o modal de vídeo
  const openVideoModal = (videoUrl: string, title: string, description: string) => {
    console.log('🎬 Abrindo modal de vídeo:', { videoUrl, title, description });
    setVideoModal({
      isOpen: true,
      videoUrl,
      projectTitle: title,
      projectDescription: description
    });
    console.log('✅ Modal configurado:', { isOpen: true, videoUrl, projectTitle: title, projectDescription: description });
  };

  // Função para fechar o modal de vídeo
  const closeVideoModal = () => {
    setVideoModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    // Seção principal com padding vertical e fundo que respeita tema
    <section id="projects" className="py-20 bg-white dark:bg-[var(--color-dark)]">
      <div className="container-custom">
        
        {/* 
          Título da seção com animação de entrada
          Aparece primeiro para contextualizar o conteúdo
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}     // Estado inicial: invisível e 30px abaixo
          whileInView={{ opacity: 1, y: 0 }}  // Estado final: visível e na posição normal
          transition={{ duration: 0.8 }}       // Duração da animação
          viewport={{ once: true }}            // Animação acontece apenas uma vez
          className="text-center mb-16"
        >
          {/* Título principal com cores diferenciadas */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="text-gray-700 dark:text-gray-300">{t('projects.heading.part1')}</span>
            <span className="text-gradient">{t('projects.heading.part2')}</span>
          </h2>
          
          {/* Descrição explicativa da seção */}
          <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* 
          Grid responsivo de projetos
          - 1 coluna em mobile
          - 2 colunas em tablet (md)
          - 3 colunas em desktop (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 
            Mapeia cada projeto em destaque para criar um card
            Cada card tem animação sequencial baseada no índice
          */}
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className="overflow-hidden group h-full relative shadow-none" 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid transparent',
                  boxShadow: 'none',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'translateY(-8px)';
                  const glowInternal = card.querySelector('.glow-internal') as HTMLElement;
                  const glowExternal = card.querySelector('.glow-external') as HTMLElement;
                  if (glowInternal) glowInternal.style.opacity = '1';
                  if (glowExternal) glowExternal.style.opacity = '0.4';
                  card.style.border = '1px solid rgba(255, 77, 166, 0.3)';
                  card.style.boxShadow = '0 0 20px rgba(255, 77, 166, 0.1), inset 0 0 20px rgba(255, 77, 166, 0.05)';
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'translateY(0)';
                  const glowInternal = card.querySelector('.glow-internal') as HTMLElement;
                  const glowExternal = card.querySelector('.glow-external') as HTMLElement;
                  if (glowInternal) glowInternal.style.opacity = '0';
                  if (glowExternal) glowExternal.style.opacity = '0';
                  card.style.border = '1px solid transparent';
                  card.style.boxShadow = 'none';
                }}
              >
                {/* Efeito de brilho interno */}
                <div 
                  className="glow-internal absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 77, 166, 0.15), rgba(139, 92, 246, 0.15), rgba(255, 77, 166, 0.15))',
                    opacity: '0',
                    transition: 'opacity 0.5s ease'
                  }}
                ></div>
                
                {/* Efeito de glow externo */}
                <div 
                  className="glow-external absolute -inset-2 rounded-lg pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #FF4DA6, #8B5CF6, #FF4DA6)',
                    opacity: '0',
                    transition: 'opacity 0.5s ease',
                    filter: 'blur(8px)',
                    zIndex: '-1'
                  }}
                ></div>
                
                <div className="relative overflow-hidden z-10">
                  <div className="aspect-video relative">
                    {/* Teste com img HTML simples para debugar */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{ minHeight: '200px' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      onError={(e) => {
                        console.error('❌ Erro ao carregar imagem:', project.image);
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#FF4DA6';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.style.fontWeight = 'bold';
                        target.innerHTML = '🚫 Imagem não encontrada';
                      }}
                      onLoad={() => {
                        console.log('✅ Imagem carregada com sucesso:', project.image);
                      }}
                    />
                  </div>
                  
                  {/* 
                    Overlay com botões que aparece no hover
                    Fundo semi-transparente com botões de ação
                  */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    {/* 
                      Botão para ver vídeo (se disponível) ou projeto
                      Mostra ícone diferente baseado no tipo de conteúdo
                    */}
                    {project.hasVideo ? (
                      <button
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          color: 'white',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '14px'
                        }}
                        className="hover:opacity-80 transition-opacity"
                        onClick={() => openVideoModal(project.video!, project.title, project.description)}
                      >
                        <Play size={16} className="mr-2" />
                        {t('projects.btn.video')}
                      </button>
                    ) : project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          color: 'white',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '14px',
                          textDecoration: 'none'
                        }}
                        className="hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        {t('projects.btn.project')}
                      </a>
                    ) : (
                      <button
                        style={{ 
                          backgroundColor: 'var(--color-light-gray)',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          color: 'white',
                          border: 'none',
                          cursor: 'not-allowed',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '14px',
                          opacity: '0.6'
                        }}
                        disabled
                      >
                        <Eye size={16} className="mr-2" />
                        {t('projects.btn.dev')}
                      </button>
                    )}
                  </div>
                </div>

                {/* 
                  Cabeçalho do card com título e descrição
                  O título muda de cor no hover para dar feedback visual
                */}
                <CardHeader className="pb-4 relative z-10">
                  <CardTitle 
                    className="text-xl transition-colors duration-300 text-gray-900 dark:text-gray-200" 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FF4DA6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                    }}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription 
                    className="leading-relaxed transition-colors duration-300 text-gray-700 dark:text-gray-400"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                    }}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* 
                  Conteúdo principal do card
                  Inclui tecnologias, categoria e botão de ação
                */}
                <CardContent className="pt-0 relative z-10">
                  
                  {/* 
                    Lista de tecnologias utilizadas no projeto
                    Mostra apenas as 4 primeiras para não sobrecarregar
                  */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* Mapeia as primeiras 4 tecnologias */}
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="transition-all duration-300 hover:scale-110"
                        style={{
                          padding: '4px 8px',
                          backgroundColor: 'rgba(255, 77, 166, 0.1)',
                          color: 'var(--color-primary)',
                          fontSize: '0.75rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 77, 166, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 77, 166, 0.2)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 77, 166, 0.1)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    
                    {/* 
                      Indicador se há mais tecnologias
                      Mostra "+X" quando há mais de 4 tecnologias
                    */}
                    {project.technologies.length > 4 && (
                      <span style={{
                        padding: '4px 8px',
                        backgroundColor: 'rgba(204, 204, 204, 0.1)',
                        color: 'var(--color-light-gray)',
                        fontSize: '0.75rem',
                        borderRadius: '6px'
                      }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Categoria do projeto com cor destacada */}
                  <div 
                    className="text-sm font-medium mb-4 transition-colors duration-300" 
                    style={{ color: 'var(--color-primary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FF4DA6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Botão Ver Detalhes */}
                  <div className="mt-6 text-center">
                    {project.title === "Portfólio Pessoal" ? (
                      <Link href="/">
                        <button 
                          className="project-button"
                          style={{
                            background: 'linear-gradient(90deg, #ff4d8d, #8a4dff)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '15px 50px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease, opacity 0.2s ease',
                            display: 'inline-block',
                            width: 'auto'
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
                          {t('projects.btn.details')}
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => openVideoModal(project.video!, project.title, project.description)}
                        className="project-button"
                        style={{
                          background: 'linear-gradient(90deg, #ff4d8d, #8a4dff)',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '15px 50px',
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: '16px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, opacity 0.2s ease',
                          display: 'inline-block',
                          width: 'auto'
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
                        {t('projects.btn.details')}
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 
          Botão para ver todos os projetos
          Aparece por último com animação delayada
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }} // Delay maior para aparecer por último
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <button 
              className="cta-project-button"
              style={{
                background: 'linear-gradient(90deg, #ff4d8d, #8a4dff)',
                border: 'none',
                borderRadius: '8px',
                padding: '15px 50px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                display: 'inline-block',
                width: 'auto'
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
              {t('projects.btn.all')}
            </button>
          </Link>
        </motion.div>
      </div>
      
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        videoUrl={videoModal.videoUrl}
        projectTitle={videoModal.projectTitle}
        projectDescription={videoModal.projectDescription}
      />

      <style jsx>{`
        .project-button {
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
        
        .cta-project-button {
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
