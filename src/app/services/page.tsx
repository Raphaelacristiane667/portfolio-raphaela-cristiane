import { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Serviços - Raphaela Cristiane',
  description: 'Soluções digitais completas para transformar suas ideias em realidade. Desenvolvimento web, design UI/UX e integrações.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
