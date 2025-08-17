/**
 * CustomCursor.tsx - Cursor personalizado com efeitos visuais
 * 
 * Este componente implementa um cursor personalizado com:
 * - Múltiplos elementos de cursor
 * - Efeitos de brilho e partículas
 * - Sistema de sparkles (faíscas)
 * - Detecção de dispositivos móveis
 * - Animações otimizadas com requestAnimationFrame
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client";

import { useState, useEffect, useRef } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorParticlesRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const sparkleIdRef = useRef(0);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Função para criar faíscas
  const createSparkles = (x: number, y: number) => {
    if (isMobile) return;
    
    const newSparkles: Sparkle[] = [];
    const sparkleCount = Math.floor(Math.random() * 3) + 2; // 2-4 faíscas
    
    for (let i = 0; i < sparkleCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkleCount + Math.random() * 0.5;
      const speed = Math.random() * 3 + 2;
      
      newSparkles.push({
        id: sparkleIdRef.current++,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 30 + 20,
        size: Math.random() * 4 + 2,
        color: ['#ff4d8d', '#8a4dff', '#06b6d4', '#ffd700', '#ff6b35'][Math.floor(Math.random() * 5)]
      });
    }
    
    setSparkles(prev => [...prev, ...newSparkles]);
  };

  // Função para atualizar faíscas
  const updateSparkles = () => {
    if (isMobile) return;
    
    setSparkles(prev => 
      prev
        .map(sparkle => ({
          ...sparkle,
          x: sparkle.x + sparkle.vx,
          y: sparkle.y + sparkle.vy,
          vy: sparkle.vy + 0.1,
          life: sparkle.life - 1,
          size: sparkle.size * 0.98
        }))
        .filter(sparkle => sparkle.life > 0)
    );
  };

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId: number;
    let lastTime = 0;

    const updateMousePosition = (e: MouseEvent) => {
      // Atualização instantânea sem delay para todos os elementos
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Todos os elementos se movem juntos, sem delays
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = e.clientX + 'px';
        cursorRingRef.current.style.top = e.clientY + 'px';
      }
      
      if (cursorParticlesRef.current) {
        cursorParticlesRef.current.style.left = e.clientX + 'px';
        cursorParticlesRef.current.style.top = e.clientY + 'px';
      }
      
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.left = e.clientX + 'px';
        cursorTrailRef.current.style.top = e.clientY + 'px';
      }

      // Criar faíscas sempre que o mouse se move
      createSparkles(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Adiciona listeners para elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .nav-card, .contact-icon, .card-hover, .btn-primary, input, textarea, .project-button, .cta-button, .modal-close-button, .modal-home-button');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mouseup', handleMouseUp);
    });

    // Listener otimizado para movimento do mouse
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Loop de animação otimizado com requestAnimationFrame
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= 16) { // 60fps
        updateSparkles();
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
      });
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  // Não renderizar em mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Faíscas brilhantes */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            position: 'fixed',
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: '50%',
            background: sparkle.color,
            pointerEvents: 'none',
            zIndex: 10001,
            transform: 'translate(-50%, -50%)',
            opacity: sparkle.life / sparkle.maxLife,
            boxShadow: `0 0 ${sparkle.size * 3}px ${sparkle.color}, 0 0 ${sparkle.size * 6}px ${sparkle.color}`,
            animation: 'sparkleGlow 0.3s ease-in-out infinite',
            filter: 'brightness(1.5) contrast(1.2)',
          }}
        />
      ))}
      
      {/* Rastro de brilho (mais atrás) */}
      <div
        ref={cursorTrailRef}
        className="cursor-trail"
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? '120px' : '60px',
          height: isHovering ? '120px' : '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 77, 141, 0.4) 0%, rgba(138, 77, 255, 0.3) 30%, rgba(6, 182, 212, 0.2) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 9997,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease', // Reduzido de 0.6s para 0.3s
          opacity: isHovering ? 0.8 : 0.3,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Partículas flutuantes */}
      <div
        ref={cursorParticlesRef}
        className="cursor-particles"
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: '100px',
          height: '100px',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.2s ease', // Reduzido de 0.4s para 0.2s
          opacity: isHovering ? 1 : 0,
        }}
      >
        {/* Partícula 1 */}
        <div 
          className="particle"
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#ff4d8d',
            animation: 'particleFloat 3s ease-in-out infinite',
          }}
        />
        
        {/* Partícula 2 */}
        <div 
          className="particle"
          style={{
            position: 'absolute',
            top: '60px',
            right: '20px',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: '#8a4dff',
            animation: 'particleFloat 3s ease-in-out infinite 1s',
          }}
        />
        
        {/* Partícula 3 */}
        <div 
          className="particle"
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: '#06b6d4',
            animation: 'particleFloat 3s ease-in-out infinite 2s',
          }}
        />
      </div>
      
      {/* Anel do cursor com efeito de rastro */}
      <div
        ref={cursorRingRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? '80px' : '40px',
          height: isHovering ? '80px' : '40px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 77, 141, 0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease', // Reduzido de 0.2s para 0.1s
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />
      
      {/* Cursor principal com gradiente animado */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? '50px' : '24px',
          height: isHovering ? '50px' : '24px',
          borderRadius: '50%',
          background: isHovering 
            ? 'linear-gradient(135deg, #ff4d8d, #8a4dff, #06b6d4)'
            : 'linear-gradient(135deg, #ff4d8d, #8a4dff)',
          backgroundSize: isHovering ? '200% 200%' : '100% 100%',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.05s ease', // Reduzido para movimento mais rápido
          willChange: 'transform',
          boxShadow: isHovering 
            ? '0 0 80px rgba(255, 77, 141, 0.9), 0 0 160px rgba(138, 77, 255, 0.7), 0 0 240px rgba(6, 182, 212, 0.5)'
            : '0 0 40px rgba(255, 77, 141, 0.7), 0 0 80px rgba(138, 77, 255, 0.5)',
          animation: isHovering ? 'gradientShift 2s ease infinite' : 'none',
        }}
      />
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translateY(-20px) scale(1.5);
            opacity: 0.7;
          }
        }
        
        /* Efeitos de hover para elementos interativos */
        .custom-cursor.hover {
          animation: gradientShift 2s ease infinite, cursorPulse 1s ease-in-out infinite;
        }
        
        @keyframes cursorPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        /* Efeito de clique */
        .custom-cursor.clicking {
          transform: translate(-50%, -50%) scale(0.7);
          box-shadow: 0 0 100px rgba(255, 77, 141, 1), 0 0 200px rgba(138, 77, 255, 0.8);
        }
        
        /* Efeito de rastro de brilho */
        .cursor-trail {
          animation: trailGlow 2s ease-in-out infinite;
        }
        
        @keyframes trailGlow {
          0%, 100% { 
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
        
        /* Efeito de faíscas brilhantes */
        .sparkle {
          animation: sparkleGlow 0.3s ease-in-out infinite;
        }
        
        @keyframes sparkleGlow {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            filter: brightness(1.5) contrast(1.2);
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.5);
            filter: brightness(2) contrast(1.5);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
          }
        }
      `}</style>
    </>
  );
}
