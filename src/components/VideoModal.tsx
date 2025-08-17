/**
 * VideoModal.tsx - Modal para exibição de vídeos de projetos
 * 
 * Este componente renderiza um modal responsivo com:
 * - Vídeo em tela cheia
 * - Botões de ação (fechar e voltar ao início)
 * - Controle de scroll da página
 * - Efeitos visuais e animações
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client";

import { X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  projectTitle: string;
  projectDescription: string;
}

export default function VideoModal({ 
  isOpen, 
  onClose, 
  videoUrl, 
  projectTitle, 
  projectDescription 
}: VideoModalProps) {
  const router = useRouter();
  
  // Função para voltar para a página inicial
  const handleGoHome = () => {
    console.log('🏠 Redirecionando para página inicial...');
    onClose(); // Fecha o modal primeiro
    // Navegação direta sem delay
    router.push('/');
  };
  
  // Detectar quando o usuário usa o botão voltar do navegador
  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll da página quando modal estiver aberto
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      
      // Adiciona uma entrada no histórico quando o modal abre
      window.history.pushState({ modal: 'open' }, '', window.location.pathname);
      
      // Função para lidar com o botão voltar
      const handlePopState = (event: PopStateEvent) => {
        if (event.state?.modal === 'open') {
          // Se o usuário clicou no botão voltar, vai para a página inicial
          handleGoHome();
        }
      };
      
      // Adiciona o listener
      window.addEventListener('popstate', handlePopState);
      
      // Cleanup quando o modal fecha
      return () => {
        window.removeEventListener('popstate', handlePopState);
        // Restaurar scroll da página
        document.body.style.overflow = 'unset';
        document.body.classList.remove('modal-open');
      };
    } else {
      // Restaurar scroll da página quando modal fechar
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);
  
  // Debug: mostrar props recebidas
  console.log('🎬 VideoModal props:', { isOpen, videoUrl, projectTitle, projectDescription });
  
  // Verifica se é um vídeo local ou YouTube
  const isLocalVideo = videoUrl.startsWith('/videos/');
  
  // Extrai o ID do vídeo do YouTube da URL ou usa o vídeo local
  const getVideoUrl = (url: string) => {
    if (isLocalVideo) {
      console.log('📹 Vídeo local detectado:', url);
      return url; // Retorna o caminho local direto
    }
    console.log('🌐 Vídeo do YouTube detectado:', url);
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : url;
  };

  const videoUrlFinal = getVideoUrl(videoUrl);
  console.log('🎯 URL final do vídeo:', videoUrlFinal);

  console.log('🎭 Renderizando VideoModal, isOpen:', isOpen);
  
  // Se não estiver aberto, não renderiza nada
  if (!isOpen) {
    console.log('🚫 Modal não está aberto, não renderizando');
    return null;
  }
  
  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 video-modal-overlay"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop"
        onClick={onClose}
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 99999,
          cursor: 'pointer'
        }}
      ></div>

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl video-modal-content"
        style={{ 
          border: '2px solid rgba(255, 77, 166, 0.3)',
          boxShadow: '0 0 50px rgba(255, 77, 166, 0.3), 0 0 100px rgba(139, 92, 246, 0.2)',
          zIndex: 100000,
          position: 'relative',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        {/* Header do modal */}
        <div className="flex items-center justify-between p-6 border-b border-pink-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse"></div>
            <h2 
              className="text-xl font-bold text-white"
            >
              {projectTitle}
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="hover:bg-pink-500/20 transition-colors duration-200"
            style={{ 
              color: '#FF4DA6',
              background: 'transparent',
              border: 'none',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo do modal */}
        <div className="p-6">
          {/* Descrição do projeto */}
          <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            {projectDescription}
          </p>

          {/* Container do vídeo */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black mx-auto" style={{ maxWidth: '100%' }}>
            {isLocalVideo ? (
              // Vídeo local com controles nativos
              <video
                src={videoUrlFinal}
                title={`Vídeo demonstrativo - ${projectTitle}`}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                style={{ 
                  backgroundColor: '#000',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  display: 'block'
                }}
                onLoadStart={() => console.log('🚀 Iniciando carregamento do vídeo')}
                onLoadedData={() => console.log('✅ Vídeo carregado com sucesso')}
                onError={(e) => console.error('❌ Erro ao carregar vídeo:', e)}
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
            ) : (
              // Vídeo do YouTube
              <iframe
                src={videoUrlFinal}
                title={`Vídeo demonstrativo - ${projectTitle}`}
                className="w-full h-full"
                style={{
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  display: 'block',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onClose}
              className="modal-close-button"
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
                width: 'auto',
                minWidth: '180px'
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
              Fechar Vídeo
            </button>
            
            <button
              onClick={handleGoHome}
              className="modal-home-button"
              style={{
                background: 'linear-gradient(90deg, #8a4dff, #ff4d8d)',
                border: 'none',
                borderRadius: '8px',
                padding: '15px 50px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                display: 'inline-block',
                width: 'auto',
                minWidth: '180px'
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
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Garantir que o modal fique sempre no topo */
        :global(.video-modal-overlay) {
          z-index: 999999 !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          cursor: default !important;
        }
        
        /* Garantir que o modal não seja afetado por scroll */
        :global(.video-modal-content) {
          z-index: 1000000 !important;
          position: relative !important;
          cursor: default !important;
        }
        
        /* Prevenir que outras seções apareçam sobre o modal */
        :global(body.modal-open) {
          overflow: hidden !important;
        }
        
        /* Garantir que o cursor funcione em todos os elementos do modal */
        :global(.video-modal-overlay *) {
          cursor: inherit !important;
        }
        
        /* Cursor específico para botões */
        :global(.video-modal-overlay button) {
          cursor: pointer !important;
        }
        
        /* Cursor para vídeos */
        :global(.video-modal-overlay video),
        :global(.video-modal-overlay iframe) {
          cursor: pointer !important;
        }
        
        /* Cursor para backdrop */
        :global(.video-modal-overlay .backdrop) {
          cursor: pointer !important;
        }
        
        /* Estilos específicos para os botões do modal */
        :global(.modal-close-button) {
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
          min-width: 180px !important;
          box-shadow: 0 4px 15px rgba(255, 77, 141, 0.3) !important;
        }
        
        :global(.modal-home-button) {
          background: linear-gradient(90deg, #8a4dff, #ff4d8d) !important;
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
          min-width: 180px !important;
          box-shadow: 0 4px 15px rgba(138, 77, 255, 0.3) !important;
        }
        
        /* Efeitos hover para os botões */
        :global(.modal-close-button:hover),
        :global(.modal-home-button:hover) {
          transform: scale(1.05) !important;
          opacity: 0.9 !important;
          box-shadow: 0 6px 20px rgba(255, 77, 141, 0.4) !important;
        }
        
        /* Responsividade para mobile */
        @media (max-width: 640px) {
          :global(.modal-close-button),
          :global(.modal-home-button) {
            min-width: 160px !important;
            padding: 12px 40px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}

