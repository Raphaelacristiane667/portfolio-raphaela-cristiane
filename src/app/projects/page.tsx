import { Metadata } from 'next';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProjectsHeader from '@/components/ProjectsHeader';

export const metadata: Metadata = {
  title: 'Projetos - Raphaela Cristiane',
  description: 'Portfólio completo de projetos desenvolvidos por Raphaela Cristiane. Veja todos os trabalhos em desenvolvimento web, mobile e backend.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[var(--color-dark)] text-black dark:text-gray-300">
      {/* Header da página (cliente) */}
      <ProjectsHeader />

      {/* Lista de todos os projetos */}
      <FeaturedProjects />
    </div>
  );
}
