/**
 * Header.tsx - Componente de cabeçalho responsivo
 * 
 * Este componente renderiza o cabeçalho da aplicação com:
 * - Logo "Raphaela Cristiane" com gradiente
 * - Menu de navegação para desktop
 * - Menu hambúrguer responsivo para mobile
 * - Navegação ativa com indicadores visuais
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FolderOpen, 
  Menu, 
  X,
  User,
  Briefcase,
  Phone
} from 'lucide-react';

export default function Header() {
  // Estado para controlar abertura/fechamento do menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook para obter o caminho atual da rota
  const pathname = usePathname();

  // Array de links de navegação com ícones
  const navLinks = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Sobre', href: '/#about', icon: User },
    { name: 'Serviços', href: '/#services', icon: Briefcase },
    { name: 'Projetos', href: '/#projects', icon: FolderOpen },
    { name: 'Contato', href: '/contact', icon: Phone }
  ];

  /**
   * Verifica se um link está ativo baseado no pathname atual
   * @param href - URL do link
   * @returns boolean indicando se o link está ativo
   */
  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.includes(href.replace('/#', ''));
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(30, 30, 30, 0.85) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: 'none',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Raphaela - Design Elegante e Compacto */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div className="relative group">
              <div 
                className="relative text-2xl font-bold px-4 py-2 rounded-xl border border-pink-300/30 group-hover:border-pink-300/60 transition-all duration-300 cursor-pointer hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ff4d8d, #8a4dff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Raphaela Cristiane
              </div>
            </div>
          </Link>

          {/* Menu Desktop - Interativo (pills, gradiente e animações) */}
          <nav className="hidden md:flex md:flex-row items-center justify-center md:px-6 lg:px-8 md:gap-6 xl:gap-8">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              const isActive = isActiveLink(link.href);
              
              return (
                <div key={link.name} className="relative md:mx-1.5 lg:mx-2">
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-400/60 shadow-[0_8px_24px_rgba(236,72,153,0.25)]'
                        : 'text-gray-300 border-pink-400/30 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 hover:border-pink-400/50 hover:shadow-[0_6px_18px_rgba(236,72,153,0.25)]'
                    }`}
                    style={{ textDecoration: 'none', borderBottom: 'none' }}
                  >
                    <IconComponent size={18} />
                    <span className="whitespace-nowrap">{link.name}</span>
                    <span className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Botão Mobile - Design Simples */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 rounded-lg transition-all duration-300 hover:scale-105 group"
            style={{ 
              background: 'linear-gradient(135deg, #ff4d8d, #8a4dff)',
              color: 'white'
            }}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        {/* Menu Mobile - Design Responsivo */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden border-t py-0.5 mx-0 mb-0.5 rounded-sm"
            style={{ 
              borderColor: 'rgba(255, 77, 141, 0.3)',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.9) 100%)',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
            }}
          >
            <nav className="flex flex-col items-center space-y-0">
              {navLinks.map((link, index) => {
                const IconComponent = link.icon;
                const isActive = isActiveLink(link.href);
                
                return (
                  <div key={link.name} className="relative group w-full">
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`nav-card block font-medium px-0.5 py-0.5 rounded-sm transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden text-center w-full text-xs flex items-center justify-center space-x-0.5 ${
                        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                      style={{ 
                        textDecoration: 'none',
                        borderBottom: 'none',
                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(255, 77, 141, 0.3), rgba(138, 77, 255, 0.3))'
                          : 'transparent'
                      }}
                    >
                      <IconComponent size={10} />
                      <span className="whitespace-nowrap">{link.name}</span>
                      
                      {/* Efeito de fundo no hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      {/* Borda animada */}
                      <div className={`absolute inset-0 rounded-sm border transition-all duration-300 ${
                        isActive 
                          ? 'border-pink-400/80' 
                          : 'border-transparent group-hover:border-pink-400/60'
                      }`}></div>
                      
                      {/* Linha decorativa inferior */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'w-3/4 bg-gradient-to-r from-pink-400 to-purple-400' 
                          : 'w-0 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-3/4'
                      }`}></div>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
