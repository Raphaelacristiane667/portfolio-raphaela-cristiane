/**
 * Hero.tsx - Componente de seção principal da página inicial
 * 
 * Este componente renderiza a seção hero com:
 * - Título principal com gradiente animado
 * - Subtítulo descritivo
 * - Botão de call-to-action
 * - Efeitos visuais e animações
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client"; // Diretiva para indicar que este é um componente do lado do cliente

// Importações necessárias para animações e navegação
import { motion } from 'framer-motion'; // Biblioteca para animações suaves
import Link from 'next/link'; // Componente de navegação do Next.js
import { useLanguage } from '@/components/LanguageProvider';


// Componente Hero - Seção principal de abertura do portfólio
// Esta é a primeira seção que os visitantes veem, deve ser impactante
export default function Hero() {
  const { t } = useLanguage();
  return (
    // Seção principal com altura mínima da tela, centralizada e com overflow oculto
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-dark)' }}>
      
      {/* 
        Fundo com partículas animadas para dar vida à seção
        As partículas têm diferentes tamanhos e delays para criar movimento
      */}
      <div className="absolute inset-0 opacity-30">
        {/* Partícula 1: Topo esquerdo - Rosa */}
        <div className="absolute top-20 left-20 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary)' }}></div>
        
        {/* Partícula 2: Topo direito - Roxo com delay */}
        <div className="absolute top-40 right-32 w-2 h-2 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
        
        {/* Partícula 3: Centro esquerdo - Azul ciano */}
        <div className="absolute top-1/2 left-32 w-2.5 h-2.5 rounded-full animate-pulse delay-2000" style={{ backgroundColor: 'var(--color-accent)' }}></div>
        
        {/* Partícula 4: Centro direito - Rosa */}
        <div className="absolute top-1/2 right-32 w-2 h-2 rounded-full animate-pulse delay-3000" style={{ backgroundColor: 'var(--color-primary)' }}></div>
        
        {/* Partícula 5: Baixo esquerdo - Roxo */}
        <div className="absolute bottom-32 left-32 w-3 h-3 rounded-full animate-pulse delay-1500" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
        
        {/* Partícula 6: Baixo direito - Azul ciano */}
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 rounded-full animate-pulse delay-2500" style={{ backgroundColor: 'var(--color-accent)' }}></div>
      </div>

      {/* Container principal com conteúdo centralizado e z-index para ficar acima do fundo */}
      <div className="container-custom text-center relative z-10">
        
        {/* 
          Título principal com animação de entrada
          Usa motion.h1 para animações suaves de fade-in e slide-up
        */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          <span style={{ color: 'var(--color-light-gray)' }}>{t('hero.headline.line1')}</span>
          <br />
          <span className="text-gradient">{t('hero.headline.line2')}</span>
        </motion.h1>

        {/* 
          Subtítulo explicativo com animação
          Apresenta Raphaela e sua localização
        */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--color-light-gray)' }}
        >
          {t('hero.subtitle')}
          <br />
          <span style={{ color: 'var(--color-accent)', fontSize: '1rem', opacity: '0.9' }}>{t('hero.subtitle.tag')}</span>
        </motion.p>

        {/* 
          Botões de ação principais
          Link para portfólio e contato com animações
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }} // Delay maior que o subtítulo
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {/* Botão principal para ver o portfólio */}
          <Link 
            href="/projects"
            style={{ textDecoration: 'none', borderBottom: 'none' }}
          >
            <button 
              className="btn-primary text-lg px-8 py-4"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                width: 'auto',
                minWidth: '200px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 77, 166, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t('hero.cta.projects')}
            </button>
          </Link>
          
          {/* Botão secundário para contato */}
          <Link 
            href="/contact"
            style={{ textDecoration: 'none', borderBottom: 'none' }}
          >
            <button 
              className="btn-secondary text-lg px-8 py-4"
            >
              {t('hero.cta.contact')}
            </button>
          </Link>
        </motion.div>

        {/* 
          Indicador de scroll animado
          Sugere ao usuário que role para baixo para ver mais conteúdo
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }} // Aparece por último
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* Container do indicador com borda arredondada */}
          <motion.div
            animate={{ y: [0, 10, 0] }} // Animação de movimento vertical
            transition={{ duration: 2, repeat: Infinity }} // Repete infinitamente
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: 'var(--color-primary)' }}
          >
            {/* Bolinha interna que se move */}
            <motion.div
              animate={{ y: [0, 12, 0] }} // Movimento interno da bolinha
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
