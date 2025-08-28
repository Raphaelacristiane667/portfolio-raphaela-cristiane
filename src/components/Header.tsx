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
import ThemeToggle from './ThemeToggle';

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b shadow-sm
      bg-white/85 border-black/10 dark:bg-[rgba(0,0,0,0.85)] dark:border-pink-500/20"
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

          {/* Menu Desktop - Design Limpo e Elegante */}
          <nav className="hidden md:flex items-center justify-center" style={{ gap: '2rem' }}>
            {navLinks.map((link, index) => {
              const IconComponent = link.icon;
              const isActive = isActiveLink(link.href);
              
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`nav-card relative px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer overflow-hidden block text-center min-w-[120px] text-sm flex items-center justify-center space-x-2 ${
                      isActive 
                        ? 'text-pink-600 dark:text-white' 
                        : 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    style={{ 
                      textDecoration: 'none',
                      borderBottom: 'none',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(255, 77, 141, 0.15), rgba(138, 77, 255, 0.15))'
                        : 'transparent'
                    }}
                  >
                    <IconComponent size={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', fontSize: '20px' }} />
                    <span>{link.name}</span>
                    
                    {/* Efeito de fundo no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    {/* Borda animada */}
                    <div className={`absolute inset-0 rounded-lg border transition-all duration-300 ${
                      isActive 
                        ? 'border-pink-400/60' 
                        : 'border-transparent group-hover:border-pink-400/40'
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
          <div className="flex items-center gap-2 ml-2 md:ml-4">
            <div className="block mr-1">
              <ThemeToggle />
            </div>
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
