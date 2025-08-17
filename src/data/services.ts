/**
 * services.ts - Dados dos serviços oferecidos
 * 
 * Este arquivo contém as informações dos serviços em destaque:
 * - Desenvolvimento Web
 * - Desenvolvimento Mobile
 * - Design de Interface
 * - Automação e Integração
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

// Interface TypeScript que define a estrutura de um serviço
// Garante consistência nos dados e facilita o desenvolvimento
export interface Service {
  id: number;           // Identificador único do serviço
  title: string;        // Nome/título do serviço
  description: string;  // Descrição detalhada do que é oferecido
  icon: string;         // Emoji ou ícone que representa o serviço
  features: string[];   // Array com os principais recursos/benefícios do serviço
}

// Array com todos os serviços oferecidos
// Cada serviço segue a interface Service definida acima
export const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações responsivas, rápidos e com visual moderno. Desenvolvimento completo desde o design até a implementação.",
    icon: "💻", // Emoji de computador para representar desenvolvimento
    features: [
      "Sites responsivos e otimizados para SEO",
      "Aplicações web com React/Next.js",
      "Integração com APIs e bancos de dados",
      "Performance e velocidade otimizadas"
    ]
  },
  {
    id: 2,
    title: "Design UI/UX",
    description: "Interfaces intuitivas e agradáveis para melhor experiência do usuário. Design focado na usabilidade e estética moderna.",
    icon: "🎨", // Emoji de paleta para representar design
    features: [
      "Design de interfaces responsivas",
      "Prototipagem e wireframes",
      "Testes de usabilidade",
      "Sistemas de design consistentes"
    ]
  },
  {
    id: 3,
    title: "Integrações e Automação",
    description: "Conexão de sistemas e automações para otimizar seu negócio. Integrações com APIs populares e automação de processos.",
    icon: "⚡", // Emoji de raio para representar velocidade e automação
    features: [
      "Integração com APIs (WhatsApp, Stripe, etc.)",
      "Automação de workflows",
      "Sincronização de dados",
      "Webhooks e notificações"
    ]
  },
  {
    id: 4,
    title: "Consultoria Técnica",
    description: "Aconselhamento especializado para escolher as melhores tecnologias e arquiteturas para seu projeto.",
    icon: "🔍", // Emoji de lupa para representar análise e consultoria
    features: [
      "Análise de requisitos técnicos",
      "Escolha de stack tecnológico",
      "Arquitetura de sistemas",
      "Revisão de código e performance"
    ]
  },
  {
    id: 5,
    title: "Manutenção e Suporte",
    description: "Suporte contínuo para manter seu site ou aplicação sempre funcionando perfeitamente e atualizado.",
    icon: "🛠️", // Emoji de ferramentas para representar manutenção
    features: [
      "Monitoramento de performance",
      "Atualizações de segurança",
      "Correção de bugs",
      "Backup e recuperação de dados"
    ]
  },
  {
    id: 6,
    title: "Otimização SEO",
    description: "Melhoria da visibilidade do seu site nos motores de busca para aumentar o tráfego orgânico.",
    icon: "📈", // Emoji de gráfico crescente para representar crescimento
    features: [
      "Análise de palavras-chave",
      "Otimização de conteúdo",
      "Melhoria de performance",
      "Estrutura de dados estruturados"
    ]
  }
];

// Função para obter apenas os serviços em destaque
// Retorna os 3 primeiros serviços para mostrar na página inicial
// Usado para não sobrecarregar a página inicial com muitos serviços
export const getFeaturedServices = (): Service[] => {
  return services.slice(0, 3); // Retorna os 3 primeiros serviços
};

// Função para obter um serviço específico por ID
// Útil para páginas de detalhes de serviços
// Retorna undefined se o ID não for encontrado
export const getServiceById = (id: number): Service | undefined => {
  return services.find(service => service.id === id);
};
