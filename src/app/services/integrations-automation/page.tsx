import { Metadata } from 'next';
import IntegrationsClient from '@/components/IntegrationsClient';

export const metadata: Metadata = {
  title: 'Integrações e Automação - Raphaela Cristiane',
  description: 'Conexão de sistemas e automações para otimizar seu negócio. Integrações com APIs populares e automação de processos.',
};

export default function IntegrationsPage() {
  return <IntegrationsClient />;
}
