# 🚀 Portfólio Pessoal - Raphaela Cristiane

## 📋 Descrição

Portfólio profissional desenvolvido com **Next.js 14**, **TypeScript** e **Tailwind CSS**. Este projeto apresenta os trabalhos, serviços e habilidades da desenvolvedora Raphaela Cristiane, com foco em desenvolvimento web, mobile e backend.

## ✨ Características Principais

### 🎨 **Design e Interface**
- **Design Moderno**: Interface elegante com gradientes e efeitos visuais
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações**: Transições suaves com Framer Motion
- **Cursor Personalizado**: Efeitos visuais únicos no desktop

### 🚀 **Funcionalidades**
- **Carrossel Infinito**: Serviços em destaque com scroll contínuo
- **Modal de Vídeo**: Exibição de projetos com controles personalizados
- **Navegação Ativa**: Indicadores visuais para rotas ativas
- **Botão WhatsApp**: Contato direto integrado
- **SEO Otimizado**: Metadados e estrutura semântica

### 📱 **Responsividade**
- **Mobile-First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação automática para diferentes tamanhos de tela
- **Touch-Friendly**: Interface otimizada para toque

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Biblioteca de animações
- **Lucide React**: Ícones modernos e consistentes

### **Componentes UI**
- **shadcn/ui**: Componentes reutilizáveis
- **Radix UI**: Primitivos acessíveis
- **Class Variance Authority**: Sistema de variantes

### **Ferramentas de Desenvolvimento**
- **ESLint**: Linting de código
- **PostCSS**: Processamento de CSS
- **Autoprefixer**: Prefixos CSS automáticos

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página inicial
│   │   ├── contact/           # Página de contato
│   │   ├── projects/          # Página de projetos
│   │   └── services/          # Página de serviços
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base (Button, Card)
│   │   ├── Header.tsx        # Cabeçalho responsivo
│   │   ├── Hero.tsx          # Seção principal
│   │   ├── About.tsx         # Seção sobre mim
│   │   ├── FeaturedServices.tsx # Serviços em destaque
│   │   ├── FeaturedProjects.tsx # Projetos em destaque
│   │   ├── VideoModal.tsx    # Modal de vídeo
│   │   ├── Footer.tsx        # Rodapé
│   │   ├── FloatingWhatsApp.tsx # Botão WhatsApp
│   │   └── CustomCursor.tsx  # Cursor personalizado
│   ├── data/                 # Dados estáticos
│   │   ├── services.ts       # Dados dos serviços
│   │   └── projects.ts       # Dados dos projetos
│   └── lib/                  # Utilitários
│       └── utils.ts          # Funções auxiliares
├── public/                    # Arquivos estáticos
├── tailwind.config.ts         # Configuração do Tailwind
├── tsconfig.json             # Configuração do TypeScript
└── package.json              # Dependências do projeto
```

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre no diretório
cd portfolio

# Instale as dependências
npm install
# ou
yarn install
```

### **Desenvolvimento**
```bash
# Execute em modo de desenvolvimento
npm run dev
# ou
yarn dev

# Abra http://localhost:3000 no navegador
```

### **Build de Produção**
```bash
# Build para produção
npm run build
# ou
yarn build

# Execute em produção
npm start
# ou
yarn start
```

## 🎯 Funcionalidades Detalhadas

### **Header Responsivo**
- Logo com gradiente animado
- Menu de navegação para desktop
- Menu hambúrguer para mobile
- Indicadores de rota ativa

### **Seção Hero**
- Título principal com gradiente
- Descrição profissional
- Botão de call-to-action
- Animações de entrada

### **Sobre Mim**
- Foto de perfil responsiva
- Descrição pessoal e profissional
- Habilidades técnicas organizadas
- Animações sequenciais

### **Serviços em Destaque**
- Carrossel infinito e contínuo
- Cards com efeitos hover
- Botões de ação com gradiente
- Pausa automática no hover

### **Projetos em Destaque**
- Grid responsivo de projetos
- Modal de vídeo para projetos
- Redirecionamento inteligente
- Botões de ação personalizados

### **Modal de Vídeo**
- Vídeo em tela cheia
- Controles personalizados
- Bloqueio de scroll da página
- Animações de entrada/saída

### **Footer**
- Informações de contato
- Links para redes sociais
- Layout responsivo
- Design elegante

### **Botão WhatsApp**
- Posicionamento fixo no desktop
- Posicionamento estático no mobile
- Link direto para WhatsApp
- Design responsivo

### **Cursor Personalizado**
- Múltiplos elementos de cursor
- Efeitos de brilho e partículas
- Sistema de sparkles
- Otimizado para desktop

## 📱 Responsividade

### **Breakpoints**
- **Mobile**: `max-width: 768px`
- **Tablet**: `max-width: 1024px`
- **Desktop**: `min-width: 1025px`

### **Adaptações Mobile**
- Menu hambúrguer compacto
- Layout em coluna única
- Tamanhos de fonte otimizados
- Espaçamentos reduzidos

### **Adaptações Desktop**
- Menu horizontal completo
- Layout em grid
- Tamanhos de fonte maiores
- Espaçamentos generosos

## 🎨 Sistema de Design

### **Cores**
- **Primária**: `#ff4d8d` (Rosa)
- **Secundária**: `#8a4dff` (Roxo)
- **Texto**: `#ffffff` (Branco)
- **Fundo**: `#000000` (Preto)

### **Tipografia**
- **Fonte Principal**: Inter (Google Fonts)
- **Tamanhos**: `text-xs` a `text-6xl`
- **Pesos**: `font-light` a `font-black`

### **Espaçamentos**
- **Sistema**: Baseado em múltiplos de 4px
- **Margens**: `m-1` a `m-32`
- **Padding**: `p-1` a `p-32`

## 🔧 Configurações

### **Tailwind CSS**
- **Modo JIT**: Compilação just-in-time
- **Purge CSS**: Remoção de classes não utilizadas
- **Plugins**: Autoprefixer, PostCSS

### **TypeScript**
- **Strict Mode**: Verificações rigorosas
- **Path Mapping**: Aliases para imports
- **ESLint**: Regras de qualidade de código

### **Next.js**
- **App Router**: Nova arquitetura de roteamento
- **Image Optimization**: Otimização automática de imagens
- **Font Optimization**: Otimização de fontes

## 📊 Performance

### **Otimizações**
- **Lazy Loading**: Carregamento sob demanda
- **Code Splitting**: Divisão automática de código
- **Image Optimization**: Otimização de imagens
- **Font Optimization**: Otimização de fontes

### **Métricas**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deploy

### **Vercel (Recomendado)**
```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Build
npm run build

# Deploy da pasta .next
```

### **Outros**
- **GitHub Pages**: Configuração manual
- **AWS S3**: Upload da pasta build
- **Docker**: Containerização

## 🤝 Contribuição

### **Como Contribuir**
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

### **Padrões de Código**
- **ESLint**: Regras configuradas
- **Prettier**: Formatação automática
- **TypeScript**: Tipagem obrigatória
- **Conventional Commits**: Padrão de commits

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Raphaela Cristiane**
- **Email**: [EMAIL]
- **LinkedIn**: [LINKEDIN]
- **GitHub**: [GITHUB]
- **Portfólio**: [URL_DO_PORTFOLIO]

## 🙏 Agradecimentos

- **Next.js Team**: Framework incrível
- **Tailwind CSS**: Sistema de design utilitário
- **Framer Motion**: Animações suaves
- **shadcn/ui**: Componentes de qualidade
- **Comunidade Open Source**: Suporte e inspiração

---

**⭐ Se este projeto te ajudou, considere dar uma estrela!**


