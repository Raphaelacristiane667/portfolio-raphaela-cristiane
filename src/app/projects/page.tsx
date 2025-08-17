import { Metadata } from 'next';
import FeaturedProjects from '@/components/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Projetos - Raphaela Cristiane',
  description: 'Portfólio completo de projetos desenvolvidos por Raphaela Cristiane. Veja todos os trabalhos em desenvolvimento web, mobile e backend.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-dark)' }}>
      {/* Header da página */}
      <div className="pt-20 pb-16 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--color-light-gray)' }}>Meus </span>
            <span className="text-gradient">Projetos</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(204, 204, 204, 0.8)' }}>
            Uma coleção dos meus melhores trabalhos em desenvolvimento web, mobile e backend. 
            Cada projeto representa uma solução única para um desafio específico.
          </p>
        </div>
      </div>

      {/* Lista de todos os projetos */}
      <FeaturedProjects />
    </div>
  );
}
