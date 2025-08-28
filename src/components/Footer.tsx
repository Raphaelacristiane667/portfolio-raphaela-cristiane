/**
 * Footer.tsx - Componente de rodapé da aplicação
 * 
 * Este componente renderiza o rodapé com:
 * - Informações de contato
 * - Links para redes sociais
 * - Informações sobre a desenvolvedora
 * - Layout responsivo para mobile e desktop
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

"use client";

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/raphaela_cristianee/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raphaela-cristiane-21b806266", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Raphaelacristiane667", label: "GitHub" },
  ];

  return (
    <footer className="py-12 border-t bg-white dark:bg-black border-black/10 dark:border-pink-500/20 text-black dark:text-gray-300">
      <div className="container-custom">
        {/* Layout horizontal com todas as informações lado a lado em uma linha */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          
          {/* Sobre Raphaela */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Raphaela Cristiane</h3>
            <p className="leading-relaxed max-w-xs text-gray-700 dark:text-gray-300">
              🚀 Criando soluções digitais completas. 
              Desenvolvedora apaixonada por criar experiências digitais únicas.
            </p>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-500 dark:text-[var(--color-secondary)]">Contato</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:raphaelacristiane668@gmail.com"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border text-pink-500 border-pink-500/60 bg-white dark:bg-black"
                title="Enviar email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5534998828211?text=Olá Raphaela! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border text-pink-500 border-pink-500/60 bg-white dark:bg-black"
                title="Conversar no WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-500 dark:text-[var(--color-secondary)]">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 border text-pink-500 border-pink-500/60 bg-white dark:bg-black"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t my-8"
          style={{ borderColor: 'rgba(255, 77, 166, 0.2)' }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p style={{ color: 'var(--color-light-gray)' }}>
            © 2025 <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Raphaela Cristiane</span> - Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
