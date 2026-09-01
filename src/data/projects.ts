/**
 * projects.ts - Fonte única de dados dos projetos
 */

export type VideoStatus = "available" | "pending";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  /** Caminho reservado ou URL do vídeo demonstrativo */
  video?: string;
  /** pending = área reservada, aguardando gravação/upload */
  videoStatus?: VideoStatus;
  link?: string;
  featured: boolean;
  category: string;
  hasVideo: boolean;
  professional?: boolean;
}

export const projects: Project[] = [
  {
    id: 7,
    slug: "cronograma-way-brasil",
    title: "Cronograma Way Brasil",
    description:
      "Plataforma corporativa de cronogramas, projetos, pendências, Gantt/Kanban, RBAC multi-unidade, auditoria, DSP (RQ-154) e integração PaperSign. Tecnologias: React 19, Vite, JavaScript, Node.js, Express, Microsoft SQL Server, SAML, IIS e GitHub Actions.",
    technologies: [
      "React 19",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "Microsoft SQL Server",
      "SAML",
      "IIS",
      "GitHub Actions",
    ],
    image: "/projects/cronograma.png",
    video: "/videos/cronograma-way-brasil.mp4",
    videoStatus: "pending",
    featured: true,
    category: "Sistema Corporativo",
    hasVideo: true,
    professional: true,
  },
  {
    id: 8,
    slug: "papersign",
    title: "PaperSign",
    description:
      "Sistema de aprovações, assinaturas digitais (PlugSign/ICP-Brasil) e fluxos documentais integrado ao TOTVS RM e ao ecossistema Cronograma, multi-unidade Way Brasil. Tecnologias: Next.js, React 19, TypeScript, Tailwind CSS, ASP.NET Core, C#, Microsoft SQL Server e react-pdf.",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "Microsoft SQL Server",
      "TanStack Table",
      "react-pdf",
    ],
    image: "/projects/papersign.png",
    video: "/videos/papersign.mp4",
    videoStatus: "pending",
    featured: true,
    category: "Sistema Corporativo",
    hasVideo: true,
    professional: true,
  },
  {
    id: 12,
    slug: "indicadores-corporativos",
    title: "Sistema de Indicadores Corporativos",
    description:
      "Plataforma de KPIs com categorias, metas, lançamento de valores, relatórios PDF/Excel, RBAC e disparos agendados por e-mail. Stack Node.js + React e versão em produção com ScriptCase/PHP no IIS. Tecnologias: React, Vite, Material UI, Node.js, Express, SQL Server, ScriptCase e PHP.",
    technologies: [
      "React",
      "Vite",
      "Material UI",
      "Recharts",
      "Node.js",
      "Express",
      "Microsoft SQL Server",
      "ScriptCase",
      "PHP",
      "JWT",
    ],
    image: "/projects/portfolio.jpg",
    featured: true,
    category: "Sistema Corporativo",
    hasVideo: false,
    professional: true,
  },
  {
    id: 11,
    slug: "rq08-treinamentos",
    title: "RQ08 — Gestão de Treinamentos",
    description:
      "Sistema corporativo de gestão de treinamentos Way Brasil, com frontend alinhado ao design system PaperSign/Cronograma. Tecnologias: React 19, TypeScript, Vite, Tailwind CSS, Node.js, Express, Prisma, Microsoft SQL Server e Recharts.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "Microsoft SQL Server",
      "Recharts",
    ],
    image: "/projects/rq08.png",
    featured: true,
    category: "Em Desenvolvimento",
    hasVideo: false,
    professional: true,
  },
  {
    id: 9,
    slug: "app-cigam",
    title: "App Cigam — Força de Vendas",
    description:
      "App mobile de força de vendas com catálogo offline, fila de pedidos e sincronização quando há conexão, integrado ao ERP Cigam. Tecnologias: Expo, React Native, SQLite, Node.js, Express, PostgreSQL e JWT.",
    technologies: [
      "Expo",
      "React Native",
      "SQLite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],
    image: "/projects/cigam.png",
    featured: true,
    category: "Em Desenvolvimento",
    hasVideo: false,
    professional: true,
  },
  {
    id: 10,
    slug: "geeky",
    title: "Geeky — Ecossistema Geek",
    description:
      "Plataforma geek gamificada e georreferenciada com autenticação JWT, perfil público, interesses e seguidores. Tecnologias: Java, Spring Boot, PostgreSQL, React, TypeScript, Vite, Tailwind CSS e Leaflet.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Leaflet",
      "PWA",
    ],
    image: "/projects/geeky.png",
    featured: true,
    category: "Em Desenvolvimento",
    hasVideo: false,
  },
  {
    id: 1,
    slug: "barbearia",
    title: "Sistema de Agendamento para Barbearia",
    description:
      "Aplicação web responsiva para agendamento online com integração ao WhatsApp e notificações automáticas. Tecnologias: Next.js, Firebase, Tailwind CSS, n8n e TypeScript.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "n8n", "TypeScript"],
    image: "/projects/barberia.jpg",
    video: "/videos/barbearia.mp4",
    videoStatus: "available",
    featured: true,
    category: "Sistema Web",
    hasVideo: true,
  },
  {
    id: 3,
    slug: "opensource-api",
    title: "OpenSource-API Backend",
    description:
      "API REST para gestão de usuários, posts e comentários com autenticação JWT, sistema de roles e banco SQLite. Tecnologias: Node.js, Express, SQLite, JWT e REST API.",
    technologies: ["Node.js", "Express", "SQLite", "JWT", "REST API"],
    image: "/projects/OpenSouce.jpg",
    video: "/videos/OpenSource.mp4",
    videoStatus: "available",
    link: "https://github.com/Raphaelacristiane667/OpenSource-API",
    featured: true,
    category: "Backend API",
    hasVideo: true,
  },
  {
    id: 2,
    slug: "portfolio",
    title: "Portfólio Pessoal",
    description:
      "Este site: portfólio profissional com Next.js, animações, i18n PT/EN e foco em projetos reais. Tecnologias: Next.js, Tailwind CSS, Framer Motion e TypeScript.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/projects/portfolio.jpg",
    video: "/videos/portfolio.mp4",
    videoStatus: "available",
    link: "/",
    featured: false,
    category: "Portfólio",
    hasVideo: true,
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getAllProjects = (): Project[] => projects;

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

export const getCategories = (): string[] =>
  [...new Set(projects.map((p) => p.category))];

export const getProjectsWithVideos = (): Project[] =>
  projects.filter((p) => p.hasVideo);

/** Caminhos de vídeo reservados — substituir arquivos em public/videos/ quando prontos */
export const RESERVED_VIDEO_PATHS = {
  cronograma: "/videos/cronograma-way-brasil.mp4",
  papersign: "/videos/papersign.mp4",
} as const;
