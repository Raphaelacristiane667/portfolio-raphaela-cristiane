"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";

interface ProjectCaseCardProps {
  project: Project;
  language: "pt" | "en";
  featured?: boolean;
  labels: {
    problem: string;
    solution: string;
    result: string;
    watchVideo: string;
    viewProject: string;
    viewCase: string;
    inDev: string;
  };
  onVideoClick?: (videoUrl: string, title: string, description: string) => void;
}

export default function ProjectCaseCard({
  project,
  language,
  featured = false,
  labels,
  onVideoClick,
}: ProjectCaseCardProps): React.ReactElement {
  const isHighlight = featured && project.slug === "cronograma-way-brasil";

  return (
    <article
      className={`project-case-card ${isHighlight ? "project-case-card--highlight" : ""}`}
    >
      <div className="project-case-card__media">
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={360}
          className="project-case-card__image"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <StatusBadge status={project.status} language={language} />
      </div>

      <div className="project-case-card__body">
        <h3 className="project-case-card__title">{project.title}</h3>
        <p className="project-case-card__summary">{project.summary}</p>

        <div className="project-case-card__case">
          <div>
            <span className="project-case-card__label">{labels.problem}</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="project-case-card__label">{labels.solution}</span>
            <p>{project.solution}</p>
          </div>
          <div>
            <span className="project-case-card__label">{labels.result}</span>
            <p>{project.result}</p>
          </div>
        </div>

        {project.highlights.length > 0 && (
          <ul className="project-case-card__highlights" aria-label="Destaques">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="project-case-card__tech">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-badge tech-badge--muted">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="project-case-card__actions">
          {project.hasVideo && project.video && onVideoClick ? (
            <button
              type="button"
              className="btn-primary project-case-card__btn"
              onClick={() =>
                onVideoClick(project.video!, project.title, project.description)
              }
            >
              <Play size={16} aria-hidden />
              {labels.watchVideo}
            </button>
          ) : project.link ? (
            <Link
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-primary project-case-card__btn"
            >
              <ExternalLink size={16} aria-hidden />
              {labels.viewProject}
            </Link>
          ) : (
            <span className="project-case-card__dev-label">{labels.inDev}</span>
          )}
        </div>
      </div>
    </article>
  );
}
