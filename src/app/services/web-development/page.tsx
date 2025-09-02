import { Metadata } from 'next';
import WebDevelopmentClient from '@/components/WebDevelopmentClient';

export const metadata: Metadata = {
  title: 'Desenvolvimento Web - Raphaela Cristiane',
  description: 'Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.',
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentClient />;
}
