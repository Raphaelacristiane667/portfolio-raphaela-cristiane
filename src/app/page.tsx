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

import Hero from '@/components/Hero';
import ImpactSection from '@/components/ImpactSection';
import About from '@/components/About';
import UniubeShowcase from '@/components/UniubeShowcase';
import WayBrasilShowcase from '@/components/WayBrasilShowcase';
import FeaturedProjects from '@/components/FeaturedProjects';
import FeaturedServices from '@/components/FeaturedServices';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Raphaela Cristiane | Desenvolvedora Full Stack',
  description:
    'Portfólio de Raphaela Cristiane, desenvolvedora Full Stack especializada em sistemas web, APIs, integrações e soluções digitais.',
  keywords:
    'desenvolvedora full stack, sistemas corporativos, APIs, integrações, Next.js, React, TypeScript',
  openGraph: {
    title: 'Raphaela Cristiane | Desenvolvedora Full Stack',
    description:
      'Sistemas web, APIs, integrações e soluções digitais em produção.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactSection />
      <About />
      <UniubeShowcase />
      <WayBrasilShowcase />
      <FeaturedProjects />
      <FeaturedServices />
      <FloatingWhatsApp />
    </main>
  );
}
