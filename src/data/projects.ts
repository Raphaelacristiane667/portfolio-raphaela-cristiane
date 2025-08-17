/**
 * projects.ts - Dados dos projetos em destaque
 * 
 * Este arquivo contém as informações dos projetos:
 * - Portfólio Pessoal
 * - Barbearia Online
 * - Open Source
 * - Cada projeto com detalhes completos
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

// Interface TypeScript que define a estrutura de um projeto
// Garante consistência nos dados e facilita o desenvolvimento
export interface Project {
  id: number;           // Identificador único do projeto
  title: string;        // Título/nome do projeto
  description: string;  // Descrição detalhada do projeto
  technologies: string[]; // Array com as tecnologias utilizadas
  image: string;        // Caminho da imagem do projeto
  video?: string;       // URL do vídeo demonstrativo (opcional)
  link?: string;        // URL para acessar o projeto (opcional)
  featured: boolean;    // Se o projeto deve aparecer em destaque
  category: string;     // Categoria do projeto (ex: Sistema Web, E-commerce)
  hasVideo: boolean;    // Se o projeto tem vídeo demonstrativo
}

// Array com todos os projetos do portfólio
// Cada projeto segue a interface Project definida acima
export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Agendamento para Barbearia",
    description: "Aplicação web responsiva para agendamento online com integração ao WhatsApp e notificações automáticas. Sistema completo de gestão de clientes e horários.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "n8n", "TypeScript"],
    image: "/projects/barberia.jpg",
    video: "/videos/barbearia.mp4", // Vídeo local da barbearia
    link: undefined, // Site não publicado
    featured: true,     // Projeto em destaque na página inicial
    category: "Sistema Web",
    hasVideo: true
  },
  {
    id: 2,
    title: "Portfólio Pessoal",
    description: "Meu próprio site profissional, destacando meus projetos, habilidades e serviços. Design moderno com animações suaves e otimizado para SEO.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/projects/portfolio.jpg",
    video: "/videos/portfolio.mp4", // Vídeo local do portfólio
    link: "#",          // Link interno (não abre em nova aba)
    featured: true,     // Projeto em destaque na página inicial
    category: "Portfólio",
    hasVideo: true
  },
  {
    id: 3,
    title: "OpenSource-API Backend",
    description: "API REST completa para gestão de usuários, posts e comentários com autenticação JWT, sistema de roles e banco SQLite. Projeto acadêmico com arquitetura robusta e documentação completa.",
    technologies: ["Node.js", "Express", "SQLite", "JWT", "REST API"],
    image: "/projects/OpenSouce.jpg", // Imagem específica para o projeto de API
    video: "/videos/OpenSource.mp4", // Vídeo local da API OpenSource
    link: "https://github.com/Raphaelacristiane667/OpenSource-API", // Link para o GitHub
    featured: true,    // Projeto em destaque!
    category: "Backend API",
    hasVideo: true
  },
  {
    id: 4,
    title: "Dashboard de Analytics",
    description: "Painel administrativo com gráficos interativos e métricas em tempo real. Ideal para monitoramento de negócios e tomada de decisões.",
    technologies: ["React", "Chart.js", "Node.js", "MongoDB", "Express"],
    image: "/projects/portfolio.jpg", // Usando imagem existente como placeholder
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Vídeo demonstrativo do dashboard
    link: undefined,
    featured: false,    // Não é destaque, aparece apenas na página de projetos
    category: "Dashboard",
    hasVideo: true
  },
  {
    id: 5,
    title: "App de Delivery",
    description: "Aplicativo móvel para delivery de comida com geolocalização e pagamentos. Sistema completo de pedidos e rastreamento em tempo real.",
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
    image: "/projects/delivery.jpg",
    video: "https://www.youtube.com/watch?v=exemplo-delivery", // Vídeo demonstrativo
    link: undefined, // App não publicado
    featured: false,
    category: "Mobile",
    hasVideo: true
  },
  {
    id: 6,
    title: "Blog Corporativo",
    description: "Blog moderno com sistema de CMS, SEO otimizado e design responsivo. Perfeito para empresas que querem compartilhar conteúdo relevante.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "TypeScript"],
    image: "/projects/blog.jpg",
    video: "https://www.youtube.com/watch?v=exemplo-blog", // Vídeo demonstrativo
    link: undefined, // Site não publicado
    featured: false,
    category: "Blog",
    hasVideo: true
  }
];

// Função para obter apenas os projetos em destaque
// Retorna um array filtrado com projetos onde featured = true
// Usado na página inicial para mostrar os melhores trabalhos
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Função para obter projetos por categoria específica
// Útil para filtrar projetos na página de projetos
// Ex: getProjectsByCategory("E-commerce") retorna apenas projetos de e-commerce
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
};

// Função para obter todas as categorias únicas disponíveis
// Usado para criar filtros e navegação por categoria
// Retorna um array com nomes únicos de categorias
export const getCategories = (): string[] => {
  // Usa Set para remover duplicatas e spread operator para converter de volta para array
  return [...new Set(projects.map(project => project.category))];
};

// Função para obter projetos com vídeos
// Útil para mostrar projetos que têm demonstrações em vídeo
export const getProjectsWithVideos = (): Project[] => {
  return projects.filter(project => project.hasVideo);
};
