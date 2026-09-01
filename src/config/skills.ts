/** Stack principal — destaque visual */
export const PRIMARY_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL Server",
  "Tailwind CSS",
] as const;

/** Demais tecnologias agrupadas por domínio */
export const STACK_GROUPS = [
  {
    key: "backend" as const,
    labelKey: "about.skills.backend",
    skills: ["C#", "Java", "PHP", "Express", "Spring Boot", "ASP.NET Core"],
  },
  {
    key: "mobile" as const,
    labelKey: "about.skills.mobile",
    skills: ["JavaScript", "React Native", "Expo"],
  },
  {
    key: "data" as const,
    labelKey: "about.skills.data",
    skills: ["PostgreSQL", "SQLite", "Prisma"],
  },
  {
    key: "tools" as const,
    labelKey: "about.skills.tools",
    skills: ["Vite", "Git", "GitHub Actions", "IIS", "n8n", "Figma", "ScriptCase"],
  },
] as const;
