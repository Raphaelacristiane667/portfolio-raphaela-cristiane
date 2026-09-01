import { Metadata } from 'next';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProjectsHeader from '@/components/ProjectsHeader';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Cases profissionais de Raphaela Cristiane — sistemas corporativos, integrações, mobile e APIs documentados com problema, solução e resultado.',
};

export default function ProjectsPage() {
  return (
    <div className="theme-page">
      {/* Header da página (cliente) */}
      <ProjectsHeader />

      {/* Lista de todos os projetos */}
      <FeaturedProjects showAll />
    </div>
  );
}
