// Importações necessárias para o layout principal da aplicação
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./header.css";
import "./bb8-toggle.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

// Configuração da fonte Inter do Google Fonts
// Esta fonte é otimizada para leitura em telas e é carregada de forma eficiente
const inter = Inter({ subsets: ["latin"] });

// Metadados globais da aplicação para SEO e compartilhamento social
// Estes dados são aplicados a todas as páginas do site
export const metadata: Metadata = {
  // Título padrão e template para todas as páginas
  title: {
    default: "Raphaela Cristiane | Desenvolvedora Full Stack",
    template: "%s | Raphaela Cristiane",
  },
  description:
    "Portfólio de Raphaela Cristiane, desenvolvedora Full Stack especializada em sistemas web, APIs, integrações e soluções digitais.",
  keywords: [
    "desenvolvedora full stack",
    "sistemas corporativos",
    "APIs",
    "integrações",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Raphaela Cristiane" }],
  creator: "Raphaela Cristiane",
  publisher: "Raphaela Cristiane",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio-raphaela-cristiane.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-raphaela-cristiane.vercel.app",
    title: "Raphaela Cristiane | Desenvolvedora Full Stack",
    description:
      "Sistemas web, APIs, integrações e soluções digitais em produção.",
    siteName: "Raphaela Cristiane — Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaela Cristiane | Desenvolvedora Full Stack",
    description:
      "Sistemas web, APIs, integrações e soluções digitais.",
  },
  
  // Configurações para robôs de busca
  robots: {
    index: true,    // Permite indexação
    follow: true,   // Permite seguir links
    googleBot: {    // Configurações específicas para o Google Bot
      index: true,
      follow: true,
      "max-video-preview": -1,    // Sem limite para preview de vídeo
      "max-image-preview": "large", // Preview grande para imagens
      "max-snippet": -1,          // Sem limite para snippets
    },
  },
  
  // Código de verificação do Google Search Console
  verification: {
    google: "google-site-verification-code",
  },
};

// Layout principal da aplicação que envolve todas as páginas
// Este componente define a estrutura HTML base e componentes globais
export default function RootLayout({
  children, // Conteúdo das páginas individuais
}: Readonly<{
  children: React.ReactNode; // Tipo TypeScript para o conteúdo
}>) {
  return (
    // Elemento HTML raiz com idioma português; o ThemeProvider controla a classe `dark`
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Aplica tema antes da pintura — evita flash e garante dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
        {/* 
          Favicons para diferentes dispositivos e navegadores
          Estes ícones aparecem na aba do navegador e favoritos
        */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        
        {/* Meta tags para forçar atualização */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* CSS crítico mobile — garante header mesmo se chunk CSS atrasar */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@media(max-width:1023px){.site-header__nav{display:none!important}.site-header__menu-btn{display:inline-flex!important}.site-header__mobile-panel{display:none}.site-header__mobile-panel.is-open{display:flex!important}}@media(min-width:1024px){.site-header__menu-btn{display:none!important}.site-header__mobile-panel,.site-header__mobile-panel.is-open{display:none!important}}.bb8-toggle__checkbox{position:absolute;opacity:0;width:0;height:0;pointer-events:none}.site-header{position:fixed;top:0;left:0;right:0;z-index:50;height:64px}`,
          }}
        />
        
        {/* 
          Preconnect para melhorar a performance de carregamento
          Estabelece conexões antecipadas com domínios externos
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      {/* 
        Corpo da página com fonte Inter, fundo preto e texto cinza claro
        antialiased melhora a renderização das fontes
      */}
      <body className={`${inter.className} antialiased bg-white text-black dark:bg-black dark:text-gray-300`}>
        
        {/* 
          Header fixo que permanece visível ao rolar a página
          Contém navegação e informações principais
        */}
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {/* 
              Container principal com padding-top para compensar o header fixo
              Aqui é renderizado o conteúdo específico de cada página
            */}
            <div className="pt-16">
              {children}
            </div>
            {/* 
              Footer com informações de contato e links importantes
              Sempre visível no final da página
            */}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        
        {/* 
          Cursor personalizado com efeito de brilho
          Detecta elementos interativos e aplica efeitos visuais
        */}
        <CustomCursor />
        
      </body>
    </html>
  );
}
