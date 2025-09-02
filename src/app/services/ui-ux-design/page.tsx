import { Metadata } from 'next';
import UIDesignClient from '@/components/UIDesignClient';

export const metadata: Metadata = {
  title: 'Design UI/UX - Raphaela Cristiane',
  description: 'Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.',
};

export default function UIDesignPage() {
  return <UIDesignClient />;
}
