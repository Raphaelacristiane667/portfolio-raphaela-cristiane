/**
 * page.tsx - Página principal da aplicação
 * 
 * Esta página renderiza a página inicial com:
 * - Seção Hero
 * - Seção Sobre
 * - Seção Serviços
 * - Seção Projetos
 * - Componentes responsivos
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

// Importações dos componentes da página
import Hero from '@/components/Hero';                    // Seção principal com foto e apresentação
import About from '@/components/About';                  // Seção sobre mim
import FeaturedProjects from '@/components/FeaturedProjects'; // Projetos em destaque
import FeaturedServices from '@/components/FeaturedServices'; // Serviços oferecidos
import FloatingWhatsApp from '@/components/FloatingWhatsApp'; // Botão WhatsApp flutuante
import CustomCursor from '@/components/CustomCursor';    // Cursor personalizado com blur/glow

// Metadados da página para SEO
export const metadata = {
  title: 'Raphaela Cristiane - Desenvolvedora Full Stack | Portfólio',
  description: 'Portfólio de Raphaela Cristiane, desenvolvedora Full Stack apaixonada por criar soluções digitais únicas e experiências web inovadoras.',
  keywords: 'desenvolvedora, full stack, portfólio, web development, React, Next.js, TypeScript',
  authors: [{ name: 'Raphaela Cristiane' }],
  openGraph: {
    title: 'Raphaela Cristiane - Desenvolvedora Full Stack',
    description: 'Portfólio profissional com projetos e serviços de desenvolvimento web',
    type: 'website',
  },
};

// Componente principal da página inicial
export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Cursor personalizado com blur/glow */}
      <CustomCursor />
      
      {/* Seção Hero - Apresentação principal */}
      <Hero />
      
      {/* Seção Sobre - Informações pessoais e profissionais */}
      <About />
      
      {/* Seção Projetos - Trabalhos em destaque */}
      <FeaturedProjects />
      
      {/* Seção Serviços - O que ofereço */}
      <FeaturedServices />
      
      {/* Botão WhatsApp Flutuante - Contato rápido */}
      <FloatingWhatsApp />
    </main>
  );
}
