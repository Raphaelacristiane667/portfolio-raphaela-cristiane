"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "pt" | "en";

type TranslationDictionary = Record<string, Record<Language, string>>;

const translations: TranslationDictionary = {
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.services": { pt: "Serviços", en: "Services" },
  "nav.projects": { pt: "Projetos", en: "Projects" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  "hero.headline.line1": { pt: "Transformando ideias em", en: "Transforming ideas into" },
  "hero.headline.line2": { pt: "experiências digitais", en: "digital experiences" },
  "hero.subtitle": {
    pt: "Sou Raphaela Cristiane, desenvolvedora e criadora de soluções digitais que combinam design moderno e funcionalidade. Transformo suas ideias em realidade.",
    en: "I'm Raphaela Cristiane, a developer who creates digital solutions combining modern design and functionality. I turn your ideas into reality."
  },
  "hero.cta.projects": { pt: "Ver Projetos", en: "View Projects" },
  "hero.cta.contact": { pt: "Entre em Contato", en: "Get in Touch" },
  "hero.subtitle.tag": {
    pt: "🚀 Desenvolvemos soluções digitais únicas para que o seu negócio seja inesquecível.",
    en: "🚀 We build unique digital solutions so your business is unforgettable."
  },

  // About
  "about.title": { pt: "Sobre Mim", en: "About Me" },
  "about.p1": {
    pt: "Sou Raphaela Cristiane, desenvolvedora web full stack dedicada a criar soluções digitais completas e exclusivas. Do frontend moderno e intuitivo ao backend sólido e escalável, passando por APIs e automações inteligentes, eu cuido de cada detalhe para transformar ideias em resultados reais.",
    en: "I'm Raphaela Cristiane, a full‑stack web developer dedicated to building complete and unique digital solutions. From modern, intuitive frontends to solid, scalable backends, APIs and smart automations, I take care of every detail to turn ideas into real results."
  },
  "about.p2": {
    pt: "Acredito que um projeto digital precisa ser mais do que um simples sistema: ele deve ser estratégico, único e feito sob medida para impulsionar o seu negócio. Cada interface que desenvolvo é pensada para ser clara e envolvente, enquanto cada automação e integração no backend é construída para trazer eficiência, praticidade e crescimento.",
    en: "I believe a digital project must be more than just a system: it should be strategic, unique and tailored to boost your business. Every interface I build is designed to be clear and engaging, while each backend automation and integration brings efficiency, practicality and growth."
  },
  "about.p3": {
    pt: "Minha missão é entregar muito mais do que tecnologia — é criar uma solução digital que faça o seu negócio se destacar, crescer e ser lembrado. Estou em constante evolução, aplicando as melhores práticas e ferramentas modernas para garantir projetos que não só funcionam, mas fazem a diferença no dia a dia de quem os utiliza.",
    en: "My mission is to deliver much more than technology — to create a digital solution that makes your business stand out, grow and be remembered. I'm constantly evolving, applying best practices and modern tools to ensure projects that not only work, but truly make a difference."
  },
  "about.skills": { pt: "Habilidades Técnicas", en: "Technical Skills" },
  "about.frontend": { pt: "Frontend", en: "Frontend" },
  "about.backend": { pt: "Backend", en: "Backend" },
  "about.tools": { pt: "Ferramentas", en: "Tools" },

  // Way Brasil showcase
  "way.badge": { pt: "Grupo Way Brasil · 5 concessionárias", en: "Way Brasil Group · 5 concessions" },
  "way.title.part1": { pt: "Ecossistema ", en: "Corporate " },
  "way.title.part2": { pt: "Corporativo", en: "Ecosystem" },
  "way.subtitle": {
    pt: "Cronograma e PaperSign formam um ecossistema integrado de gestão de projetos e assinaturas digitais, em uso nas cinco concessionárias do grupo Way Brasil — com RBAC por unidade, rastreabilidade e integração ao TOTVS RM.",
    en: "Cronograma and PaperSign form an integrated ecosystem for project management and digital signatures, deployed across all five Way Brasil group concessions — with per-unit RBAC, traceability, and TOTVS RM integration."
  },
  "way.units.label": { pt: "Concessionárias atendidas", en: "Served concessions" },
  "way.cronograma.title": { pt: "Cronograma Way Brasil", en: "Cronograma Way Brasil" },
  "way.cronograma.desc": {
    pt: "Gestão de projetos, Gantt/Kanban, pendências, DSP → RQ-154 → PaperSign e dashboards multi-unidade.",
    en: "Project management, Gantt/Kanban, pending tasks, DSP → RQ-154 → PaperSign, and multi-unit dashboards."
  },
  "way.papersign.title": { pt: "PaperSign", en: "PaperSign" },
  "way.papersign.desc": {
    pt: "Aprovações e assinaturas digitais ICP-Brasil, fluxos documentais e integração com RM e Cronograma.",
    en: "ICP-Brasil digital approvals and signatures, document workflows, and integration with RM and Cronograma."
  },
  "way.expand": { pt: "Ampliar infográfico", en: "Expand infographic" },
  "way.close": { pt: "Fechar", en: "Close" },
  "way.footnote": {
    pt: "Os cards abaixo detalham cada sistema, tecnologias e demonstrações em vídeo.",
    en: "The project cards below detail each system, tech stack, and video demos."
  },

  // Uniube — apresentação acadêmica
  "uniube.badge": { pt: "Uniube · Formação & compartilhamento", en: "Uniube · Education & sharing" },
  "uniube.title.part1": { pt: "Da sala de aula ", en: "From the classroom " },
  "uniube.title.part2": { pt: "ao palco", en: "to the stage" },
  "uniube.subtitle": {
    pt: "Retornar à universidade para compartilhar minha trajetória com futuros profissionais de TI conecta formação acadêmica e prática no mercado.",
    en: "Returning to university to share my journey with future IT professionals bridges academic training and real-world practice."
  },
  "uniube.tags.label": { pt: "Contexto da apresentação", en: "Presentation context" },
  "uniube.tag.degree": { pt: "Sistemas de Informação", en: "Information Systems" },
  "uniube.tag.uniube": { pt: "Uniube presencial", en: "Uniube on-campus" },
  "uniube.tag.talk": { pt: "Apresentação sobre cursos de TI", en: "IT programs presentation" },
  "uniube.video.label": { pt: "Registro da apresentação", en: "Presentation recording" },
  "uniube.video.aria": {
    pt: "Vídeo da apresentação sobre cursos de TI na Uniube",
    en: "Video of the IT programs presentation at Uniube"
  },
  "uniube.video.fallback": {
    pt: "Seu navegador não suporta reprodução de vídeo.",
    en: "Your browser does not support video playback."
  },
  "uniube.p1": {
    pt: "Estou no último período de Sistemas de Informação presencial e tive a oportunidade de voltar à Uniube não apenas como aluna, mas como alguém que pôde compartilhar um pouco da própria trajetória com quem está começando.",
    en: "I'm in my final semester of on-campus Information Systems and had the chance to return to Uniube not only as a student, but as someone who could share a bit of her own journey with those just starting out."
  },
  "uniube.p2": {
    pt: "Participei de uma apresentação sobre os cursos de Tecnologia da Informação da universidade, mostrando aos alunos como os conhecimentos construídos na graduação saem da sala de aula e se transformam em projetos reais, soluções e resultados que desenvolvo e aplico no meu trabalho.",
    en: "I took part in a presentation about the university's Information Technology programs, showing students how knowledge built during the degree leaves the classroom and becomes real projects, solutions, and outcomes I develop and apply at work."
  },
  "uniube.p3": {
    pt: "Grande parte da base que utilizo no meu dia a dia profissional começou durante a graduação. Momentos como esse mostram que existem muitos caminhos possíveis dentro da área de TI — e que a formação pode ser o ponto de partida para construir soluções e transformar conhecimento em prática.",
    en: "Much of the foundation I use in my daily professional work began during my degree. Moments like this show there are many paths within IT — and that education can be the starting point for building solutions and turning knowledge into practice."
  },
  "uniube.quote": {
    pt: "Um dia você está sentado na sala de aula aprendendo. Em outro, está na frente dela compartilhando aquilo que aprendeu.",
    en: "One day you're sitting in class learning. On another, you're standing in front of it sharing what you've learned."
  },
  "uniube.team": {
    pt: "Participei desse momento ao lado do Luiz Paiva, Diretor dos cursos de TI presenciais da Uniube, e da minha colega Júlia Borges, aluna de Ciência da Computação presencial.",
    en: "I shared this moment alongside Luiz Paiva, Director of Uniube's on-campus IT programs, and my colleague Júlia Borges, an on-campus Computer Science student."
  },
  "uniube.closing": {
    pt: "Ainda tenho muito a aprender e muitos caminhos para percorrer, mas poder olhar para essa trajetória e compartilhá-la já representa uma conquista enorme. Obrigada, Uniube, pela formação, pela oportunidade e por fazer parte dessa caminhada.",
    en: "I still have much to learn and many paths ahead, but being able to look back at this journey and share it is already a huge achievement. Thank you, Uniube, for the education, the opportunity, and being part of this path."
  },

  // Featured Services
  "services.heading": { pt: "Serviços em Destaque", en: "Featured Services" },
  "services.subtitle": { pt: "Soluções digitais completas para transformar suas ideias em realidade", en: "Complete digital solutions to turn your ideas into reality" },
  "services.button.details": { pt: "Ver Detalhes", en: "View Details" },
  "services.button.all": { pt: "Ver Todos os Serviços", en: "View All Services" },

  // Featured Projects
  "projects.heading.part1": { pt: "Projetos em ", en: "Featured " },
  "projects.heading.part2": { pt: "Destaque", en: "Projects" },
  "projects.subtitle": { pt: "Alguns dos meus trabalhos mais recentes e impactantes. Cada projeto representa uma solução única para um desafio específico.", en: "Some of my most recent and impactful work. Each project represents a unique solution to a specific challenge." },
  "projects.btn.video": { pt: "Ver Vídeo", en: "Watch Video" },
  "projects.btn.project": { pt: "Ver Projeto", en: "View Project" },
  "projects.btn.dev": { pt: "Em Desenvolvimento", en: "In Development" },
  "projects.btn.details": { pt: "Ver Detalhes", en: "View Details" },
  "projects.btn.all": { pt: "Ver Todos os Projetos", en: "View All Projects" },
  "projects.btn.videoSoon": { pt: "Vídeo em breve", en: "Video coming soon" },
  "projects.video.reserved": { pt: "Demonstração em gravação", en: "Demo recording in progress" },

  // Projects page header
  "projects.page.title.part1": { pt: "Meus ", en: "My " },
  "projects.page.title.part2": { pt: "Projetos", en: "Projects" },
  "projects.page.subtitle": { pt: "Uma coleção dos meus melhores trabalhos em desenvolvimento web, mobile e backend. Cada projeto representa uma solução única para um desafio específico.", en: "A collection of my best work in web, mobile and backend development. Each project represents a unique solution to a specific challenge." },

  // Contact page
  "contact.title.part1": { pt: "Entre em ", en: "Get in " },
  "contact.title.part2": { pt: "Contato", en: "Touch" },
  "contact.subtitle": {
    pt: "Tem um projeto, dúvida ou oportunidade? Escolha o canal que preferir — respondo o mais breve possível.",
    en: "Have a project, question, or opportunity? Choose your preferred channel — I'll reply as soon as possible."
  },
  "contact.channels.title": { pt: "Canais de contato", en: "Contact channels" },
  "contact.whatsapp.title": { pt: "WhatsApp", en: "WhatsApp" },
  "contact.whatsapp.desc": { pt: "Conversa rápida sobre projetos, prazos e orçamentos.", en: "Quick chat about projects, timelines, and estimates." },
  "contact.whatsapp.cta": { pt: "Iniciar conversa", en: "Start chat" },
  "contact.email.title": { pt: "E-mail", en: "Email" },
  "contact.email.desc": { pt: "Envie briefing, documentos ou propostas formais.", en: "Send briefs, documents, or formal proposals." },
  "contact.email.cta": { pt: "Enviar e-mail", en: "Send email" },
  "contact.linkedin.title": { pt: "LinkedIn", en: "LinkedIn" },
  "contact.linkedin.desc": { pt: "Conecte-se e acompanhe minha trajetória profissional.", en: "Connect and follow my professional journey." },
  "contact.linkedin.cta": { pt: "Ver perfil", en: "View profile" },
  "contact.help.title": { pt: "Como posso ajudar", en: "How I can help" },
  "contact.help.web": { pt: "Desenvolvimento web e sistemas corporativos sob medida.", en: "Custom web development and corporate systems." },
  "contact.help.integration": { pt: "Integrações, automações e APIs entre plataformas.", en: "Integrations, automations, and cross-platform APIs." },
  "contact.help.consulting": { pt: "Consultoria técnica, evolução de produtos e suporte.", en: "Technical consulting, product evolution, and support." },
  "contact.info.title": { pt: "Informações", en: "Details" },
  "contact.info.location": { pt: "Brasil · atendimento remoto", en: "Brazil · remote work" },
  "contact.info.response": { pt: "Resposta em até 24 horas úteis", en: "Reply within 24 business hours" },
  "contact.info.availability": { pt: "Disponível para projetos e parcerias", en: "Available for projects and partnerships" },

  // Footer
  "footer.about.title": { pt: "Raphaela Cristiane", en: "Raphaela Cristiane" },
  "footer.about.text": { pt: "🚀 Criando soluções digitais completas. Desenvolvedora apaixonada por criar experiências digitais únicas.", en: "🚀 Building complete digital solutions. Developer passionate about crafting unique digital experiences." },
  "footer.contact": { pt: "Contato", en: "Contact" },
  "footer.social": { pt: "Redes Sociais", en: "Social" },
  "footer.copyright": { pt: "© 2025 Raphaela Cristiane - Todos os direitos reservados", en: "© 2025 Raphaela Cristiane - All rights reserved" }
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("language") as Language)) || null;
    if (saved === "pt" || saved === "en") {
      setLanguageState(saved);
      if (typeof document !== "undefined") document.documentElement.lang = saved;
    } else {
      if (typeof document !== "undefined") document.documentElement.lang = "pt";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") localStorage.setItem("language", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  };

  const t = (key: keyof typeof translations): string => {
    const entry = translations[key];
    if (!entry) return String(key);
    return entry[language] ?? entry.pt;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  return ctx;
}


