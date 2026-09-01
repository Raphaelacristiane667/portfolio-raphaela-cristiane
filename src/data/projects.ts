/**
 * projects.ts - Fonte única de dados dos projetos (cases)
 */

export type VideoStatus = "available" | "pending";

export type ProjectStatus =
  | "production"
  | "evolving"
  | "personal"
  | "completed"
  | "development";

export type ProjectFilter =
  | "all"
  | "systems"
  | "web"
  | "mobile"
  | "integrations"
  | "ai";

export interface Project {
  id: number;
  slug: string;
  title: string;
  /** Resumo curto para cards */
  summary: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  highlights: string[];
  status: ProjectStatus;
  filters: Exclude<ProjectFilter, "all">[];
  technologies: string[];
  image: string;
  video?: string;
  videoStatus?: VideoStatus;
  link?: string;
  featured: boolean;
  category: string;
  hasVideo: boolean;
  professional?: boolean;
}

export const PROJECT_FILTERS: { id: ProjectFilter; labelKey: string }[] = [
  { id: "all", labelKey: "projects.filter.all" },
  { id: "systems", labelKey: "projects.filter.systems" },
  { id: "web", labelKey: "projects.filter.web" },
  { id: "mobile", labelKey: "projects.filter.mobile" },
  { id: "integrations", labelKey: "projects.filter.integrations" },
  { id: "ai", labelKey: "projects.filter.ai" },
];

export const projects: Project[] = [
  {
    id: 7,
    slug: "cronograma-way-brasil",
    title: "Cronograma Way Brasil",
    summary:
      "Plataforma corporativa de gestão de projetos e operações multiunidade para o grupo Way Brasil.",
    description:
      "Plataforma corporativa de cronogramas, projetos, pendências, Gantt/Kanban, RBAC multi-unidade, auditoria, DSP (RQ-154) e integração PaperSign — em produção nas 5 concessionárias Way Brasil.",
    problem:
      "Operações e cronogramas distribuídos entre unidades, com necessidade de visibilidade, rastreabilidade e integração entre pendências, DSP e assinaturas digitais.",
    solution:
      "Sistema com Gantt/Kanban, RBAC por concessionária, auditoria, fluxo DSP → RQ-154 → PaperSign, dashboards multi-unidade e integração ao TOTVS RM.",
    result:
      "Em produção nas 5 concessionárias Way Brasil (WAY 364, 153, 112, 306 e 262), apoiando gestão de projetos e processos internos.",
    highlights: ["5 concessionárias", "RBAC", "Gantt/Kanban", "PaperSign", "Auditoria"],
    status: "production",
    filters: ["systems", "integrations"],
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
    featured: true,
    category: "Sistema Corporativo",
    hasVideo: false,
    professional: true,
  },
  {
    id: 11,
    slug: "rq08-treinamentos",
    title: "RQ08 — Gestão de Treinamentos",
    summary:
      "Gestão de treinamentos corporativos com design system unificado e integração com IA.",
    description:
      "Sistema corporativo de gestão de treinamentos Way Brasil, com frontend alinhado ao design system PaperSign/Cronograma e integração com IA.",
    problem:
      "Capacitação e treinamentos corporativos precisavam de um fluxo digital integrado, com apoio inteligente e consistência visual entre sistemas.",
    solution:
      "Plataforma com design system compartilhado, gestão de treinamentos, dashboards e integração com IA para apoio aos fluxos de capacitação.",
    result:
      "Sistema em evolução, estendendo o ecossistema Way Brasil com foco em treinamentos e automação inteligente.",
    highlights: ["Design system", "IA integrada", "Prisma", "Recharts"],
    status: "development",
    filters: ["systems", "ai"],
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
      "Inteligência Artificial",
    ],
    image: "/projects/rq08.png",
    featured: true,
    category: "Sistema Corporativo",
    hasVideo: false,
    professional: true,
  },
  {
    id: 8,
    slug: "papersign",
    title: "PaperSign",
    summary:
      "Aprovações e assinaturas digitais ICP-Brasil integradas ao ecossistema corporativo Way Brasil.",
    description:
      "Sistema de aprovações, assinaturas digitais (PlugSign/ICP-Brasil) e fluxos documentais integrado ao TOTVS RM e ao Cronograma — em uso nas 5 concessionárias.",
    problem:
      "Fluxos de aprovação e assinatura documental exigiam rastreabilidade, conformidade ICP-Brasil e integração com ERP e cronograma de projetos.",
    solution:
      "Plataforma de assinaturas digitais com fluxos documentais, integração TOTVS RM, Cronograma e controle por unidade.",
    result:
      "Em uso nas 5 concessionárias Way Brasil, conectando aprovações digitais ao ecossistema de gestão.",
    highlights: ["ICP-Brasil", "TOTVS RM", "5 concessionárias", "Fluxos documentais"],
    status: "production",
    filters: ["systems", "integrations"],
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
    featured: true,
    category: "Sistema Corporativo",
    hasVideo: false,
    professional: true,
  },
  {
    id: 12,
    slug: "indicadores-corporativos",
    title: "Sistema de Indicadores Corporativos",
    summary: "Plataforma de KPIs corporativos com metas, relatórios e alertas automatizados.",
    description:
      "Plataforma de KPIs com categorias, metas, lançamento de valores, relatórios PDF/Excel, RBAC e disparos agendados por e-mail.",
    problem:
      "Indicadores corporativos espalhados em planilhas e processos manuais, dificultando acompanhamento, metas e alertas.",
    solution:
      "Sistema de KPIs com categorias, metas, RBAC, relatórios PDF/Excel e disparos agendados por e-mail.",
    result:
      "Stack Node.js + React e versão em produção com ScriptCase/PHP no IIS para operação corporativa.",
    highlights: ["KPIs", "RBAC", "PDF/Excel", "Alertas por e-mail"],
    status: "production",
    filters: ["systems"],
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
    id: 9,
    slug: "app-cigam",
    title: "App Cigam — Força de Vendas",
    summary: "App mobile de força de vendas com catálogo offline e sincronização com ERP Cigam.",
    description:
      "App mobile de força de vendas com catálogo offline, fila de pedidos e sincronização quando há conexão, integrado ao ERP Cigam.",
    problem:
      "Equipes de vendas precisavam operar com catálogo e pedidos mesmo sem conexão estável, sincronizando depois com o ERP.",
    solution:
      "App mobile com catálogo offline, fila de pedidos, sincronização e integração com ERP Cigam via API.",
    result:
      "Solução mobile em desenvolvimento para apoiar força de vendas em campo.",
    highlights: ["Offline-first", "ERP Cigam", "SQLite", "React Native"],
    status: "development",
    filters: ["mobile", "integrations"],
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
    category: "Mobile",
    hasVideo: false,
    professional: true,
  },
  {
    id: 10,
    slug: "geeky",
    title: "Geeky — Ecossistema Geek",
    summary: "Plataforma geek gamificada e georreferenciada com perfis e comunidade.",
    description:
      "Plataforma geek gamificada e georreferenciada com autenticação JWT, perfil público, interesses e seguidores.",
    problem:
      "Criar um ecossistema digital para comunidade geek com perfis, interesses e experiência gamificada.",
    solution:
      "Plataforma com autenticação JWT, perfil público, mapas georreferenciados, interesses e sistema de seguidores.",
    result:
      "Projeto em desenvolvimento com stack Java/Spring Boot no backend e React no frontend.",
    highlights: ["Gamificação", "Georreferência", "JWT", "PWA"],
    status: "development",
    filters: ["web", "mobile"],
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
    category: "Web / Mobile",
    hasVideo: false,
  },
  {
    id: 1,
    slug: "barbearia",
    title: "Sistema de Agendamento para Barbearia",
    summary: "Agendamento online com integração WhatsApp e notificações automáticas.",
    description:
      "Aplicação web responsiva para agendamento online com integração ao WhatsApp e notificações automáticas.",
    problem:
      "Barbearia precisava de agendamento digital acessível, com confirmações e comunicação automatizada.",
    solution:
      "App web responsivo com reservas online, integração WhatsApp via n8n e notificações automáticas.",
    result:
      "Sistema web funcional para gestão de agendamentos e comunicação com clientes.",
    highlights: ["WhatsApp", "n8n", "Responsivo", "Firebase"],
    status: "completed",
    filters: ["web", "integrations"],
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "n8n", "TypeScript"],
    image: "/projects/barberia.jpg",
    video: "/videos/barbearia.mp4",
    videoStatus: "available",
    featured: false,
    category: "Sistema Web",
    hasVideo: true,
  },
  {
    id: 3,
    slug: "opensource-api",
    title: "OpenSource-API Backend",
    summary: "API REST com autenticação JWT, roles e gestão de conteúdo.",
    description:
      "API REST para gestão de usuários, posts e comentários com autenticação JWT, sistema de roles e banco SQLite.",
    problem:
      "Demonstrar backend estruturado com autenticação, autorização e CRUD completo.",
    solution:
      "API REST com JWT, roles, SQLite e endpoints para usuários, posts e comentários.",
    result:
      "API open source publicada no GitHub como referência de arquitetura backend.",
    highlights: ["REST API", "JWT", "Roles", "SQLite"],
    status: "personal",
    filters: ["web"],
    technologies: ["Node.js", "Express", "SQLite", "JWT", "REST API"],
    image: "/projects/OpenSouce.jpg",
    video: "/videos/OpenSource.mp4",
    videoStatus: "available",
    link: "https://github.com/Raphaelacristiane667/OpenSource-API",
    featured: false,
    category: "Backend API",
    hasVideo: true,
  },
  {
    id: 2,
    slug: "portfolio",
    title: "Portfólio Pessoal",
    summary: "Este site — portfólio profissional com i18n, animações e cases reais.",
    description:
      "Portfólio profissional com Next.js, animações, i18n PT/EN e foco em projetos reais.",
    problem:
      "Apresentar de forma profissional projetos, stack e trajetória como desenvolvedora Full Stack.",
    solution:
      "Site com Next.js, tema dark premium, internacionalização, cases de projetos e contato direto.",
    result:
      "Portfólio vivo que documenta sistemas corporativos, integrações e projetos em produção.",
    highlights: ["Next.js", "i18n", "Framer Motion", "Cases"],
    status: "personal",
    filters: ["web"],
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

export const getProjectsByFilter = (filter: ProjectFilter): Project[] => {
  if (filter === "all") return projects;
  return projects.filter((p) => p.filters.includes(filter));
};

export const getCategories = (): string[] =>
  [...new Set(projects.map((p) => p.category))];

export const getProjectsWithVideos = (): Project[] =>
  projects.filter((p) => p.hasVideo);

export const RESERVED_VIDEO_PATHS = {
  cronograma: "/videos/cronograma-way-brasil.mp4",
  papersign: "/videos/papersign.mp4",
} as const;
