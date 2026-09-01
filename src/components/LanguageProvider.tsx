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


