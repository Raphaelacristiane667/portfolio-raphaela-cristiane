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

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from './LanguageProvider';

// Configuração dos itens de navegação
const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/#about', label: 'Sobre' },
  { href: '/#services', label: 'Serviços' },
  { href: '/#projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
];

// Configuração dos itens em inglês
const NAV_ITEMS_EN = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  // Verificar se um link está ativo
  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.includes(href.replace('/#', ''));
  };

  const changeLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang);
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'pt' : 'en');
  };

  // Usar os itens corretos baseado no idioma
  const currentNavItems = language === 'en' ? NAV_ITEMS_EN : NAV_ITEMS;

  return (
    <>
      {/* Header Desktop - Baseado na imagem de referência */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            
            {/* Logo/Marca - Esquerda */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="Ir para página inicial"
            >
              {/* Nome da marca */}
              <span 
                className="text-white font-semibold text-xl"
                style={{
                  background: 'linear-gradient(135deg, #ff4d8d, #8a4dff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Raphaela Cristiane
              </span>
            </Link>

            {/* Links de Navegação - Centro (desktop) */}
            <div className="hidden md:flex items-center space-x-20 mx-6">
              {currentNavItems.map((item, index) => {
                const isActive = isActiveLink(item.href);
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative transition-all duration-300 font-medium px-6 py-3 rounded-lg
                      text-black dark:text-white hover:text-pink-600 dark:hover:text-pink-400
                      hover:bg-black/5 dark:hover:bg-gray-800/30 active:bg-black/10 dark:active:bg-gray-800/50 active:scale-95
                      hover:scale-105 transform
                      ${isActive ? 'text-pink-600 dark:text-pink-400' : ''}
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Efeito de underline no hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 dark:bg-pink-400 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></div>
                    
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                );
              })}
            </div>

            {/* Botões de Utilidade - Direita */}
            <div className="flex items-center space-x-4 ml-auto">
              {/* Idioma: visível no desktop e no mobile quando o menu está fechado */}
              <button
                onClick={toggleLanguage}
                className={`nav-icon-btn ${isMobileMenuOpen ? 'hidden' : 'inline-flex'} md:inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 border text-black dark:text-white`}
                aria-label="Alterar idioma"
              >
                <Globe size={20} />
              </button>
              {/* Tema: visível no desktop e no mobile quando o menu está fechado */}
              <span className={`${isMobileMenuOpen ? 'hidden' : 'inline-flex'} md:inline-flex`}>
                <ThemeToggle />
              </span>
              {/* Menu / Fechar: hambúrguer vira X quando aberto */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="nav-icon-btn inline-flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-all duration-200 border text-black dark:text-white"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon size={20} />
                ) : (
                  <MenuIcon size={20} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-2xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative z-10 h-full w-full flex flex-col">
            <nav className="flex-1 flex items-center justify-center overflow-y-auto">
              <ul className="w-full max-w-xs px-6 space-y-4 text-center">
                {currentNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center text-lg font-medium py-3 rounded-xl transition-all duration-300 active:scale-95 text-black dark:text-white hover:text-pink-600 dark:hover:text-pink-400 hover:bg-black/5 dark:hover:bg-gray-800/30 active:bg-black/10 dark:active:bg-gray-800/50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
