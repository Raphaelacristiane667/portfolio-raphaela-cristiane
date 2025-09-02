import { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contato - Raphaela Cristiane',
  description: 'Entre em contato com Raphaela Cristiane para discutir seu projeto de desenvolvimento web. Vamos transformar suas ideias em realidade!',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
