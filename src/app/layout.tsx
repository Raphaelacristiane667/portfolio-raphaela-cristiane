// Importações necessárias para o layout principal da aplicação
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

// Configuração da fonte Inter do Google Fonts
// Esta fonte é otimizada para leitura em telas e é carregada de forma eficiente
const inter = Inter({ subsets: ["latin"] });

// Metadados globais da aplicação para SEO e compartilhamento social
// Estes dados são aplicados a todas as páginas do site
export const metadata: Metadata = {
  // Título padrão e template para todas as páginas
  title: {
      default: "Raphaela Cristiane - Desenvolvedora Web", // Título padrão
  template: "%s | Raphaela Cristiane - Desenvolvedora Web" // Template para outras páginas
  },
  
  // Descrição geral do site para motores de busca
      description: "Portfólio de Raphaela Cristiane, desenvolvedora web especializada em Next.js, React e design moderno.",
  
  // Palavras-chave para melhorar o ranking nos motores de busca
  keywords: ["desenvolvedora web", "Next.js", "React", "TypeScript", "Tailwind CSS", "portfólio"],
  
  // Informações sobre o autor e criador do site
      authors: [{ name: "Raphaela Cristiane" }],
    creator: "Raphaela Cristiane",
    publisher: "Raphaela Cristiane",
  
  // Desabilita a detecção automática de informações de contato
  formatDetection: {
    email: false,      // Não detecta emails automaticamente
    address: false,    // Não detecta endereços automaticamente
    telephone: false,  // Não detecta telefones automaticamente
  },
  
  // URL base para todos os metadados
  metadataBase: new URL("https://raphaela-portfolio.com"),
  
  // URL canônica para evitar conteúdo duplicado
  alternates: {
    canonical: "/",
  },
  
  // Configurações para compartilhamento em redes sociais (Open Graph)
  openGraph: {
    type: "website",           // Tipo de conteúdo
    locale: "pt_BR",          // Idioma (Português do Brasil)
    url: "https://raphaela-portfolio.com", // URL do site
    title: "Raphaela Cristiane - Desenvolvedora Web", // Título para compartilhamento
    description: "Transformando ideias em experiências digitais", // Descrição para compartilhamento
    siteName: "Raphaela Portfolio", // Nome do site
  },
  
  // Configurações específicas para Twitter/X
  twitter: {
    card: "summary_large_image", // Tipo de card do Twitter
    title: "Raphaela Cristiane - Desenvolvedora Web",
    description: "Transformando ideias em experiências digitais",
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
    // Elemento HTML raiz com idioma português e tema escuro
    <html lang="pt-BR" className="dark">
      <head>
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
        
        {/* 
          Preconnect para melhorar a performance de carregamento
          Estabelece conexões antecipadas com domínios externos
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
          <div className="fixed right-3 top-3 z-[60] md:right-4 md:top-4">
            <ThemeToggle />
          </div>
          <Header />
        </ThemeProvider>
        
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
        
        {/* 
          Cursor personalizado com efeito de brilho
          Detecta elementos interativos e aplica efeitos visuais
        */}
        <CustomCursor />
        
      </body>
    </html>
  );
}
