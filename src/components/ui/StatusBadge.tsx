import type { ProjectStatus } from "@/data/projects";

const STATUS_CONFIG: Record<
  ProjectStatus,
  { dot: string; labelPt: string; labelEn: string }
> = {
  production: { dot: "status-badge__dot--green", labelPt: "Em produção", labelEn: "In production" },
  evolving: { dot: "status-badge__dot--yellow", labelPt: "Em evolução", labelEn: "Evolving" },
  personal: { dot: "status-badge__dot--blue", labelPt: "Projeto pessoal", labelEn: "Personal project" },
  completed: { dot: "status-badge__dot--gray", labelPt: "Concluído", labelEn: "Completed" },
  development: { dot: "status-badge__dot--purple", labelPt: "Em desenvolvimento", labelEn: "In development" },
};

interface StatusBadgeProps {
  status: ProjectStatus;
  language?: "pt" | "en";
}

export default function StatusBadge({
  status,
  language = "pt",
}: StatusBadgeProps): React.ReactElement {
  const config = STATUS_CONFIG[status];
  const label = language === "en" ? config.labelEn : config.labelPt;

  return (
    <span className="status-badge">
      <span className={`status-badge__dot ${config.dot}`} aria-hidden />
      {label}
    </span>
  );
}
