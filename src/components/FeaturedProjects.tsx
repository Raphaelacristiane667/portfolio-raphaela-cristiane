"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCaseCard from "@/components/ProjectCaseCard";
import VideoModal from "@/components/VideoModal";
import {
  getFeaturedProjects,
  getAllProjects,
  getProjectsByFilter,
  PROJECT_FILTERS,
  type Project,
  type ProjectFilter,
} from "@/data/projects";

interface FeaturedProjectsProps {
  showAll?: boolean;
}

export default function FeaturedProjects({
  showAll = false,
}: FeaturedProjectsProps): React.ReactElement {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: "",
    projectTitle: "",
    projectDescription: "",
  });

  const baseProjects = showAll
    ? activeFilter === "all"
      ? getAllProjects()
      : getProjectsByFilter(activeFilter)
    : getFeaturedProjects();

  const openVideoModal = (videoUrl: string, title: string, description: string) => {
    setVideoModal({ isOpen: true, videoUrl, projectTitle: title, projectDescription: description });
  };

  const closeVideoModal = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const labels = {
    problem: t("projects.case.problem"),
    solution: t("projects.case.solution"),
    result: t("projects.case.result"),
    watchVideo: t("projects.btn.video"),
    viewProject: t("projects.btn.case"),
    viewCase: t("projects.btn.case"),
    inDev: t("projects.btn.dev"),
  };

  return (
    <section
      id="projects"
      className="section-anchor featured-projects-section py-20"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            id="projects-heading"
            title={t("projects.heading.part1")}
            highlight={t("projects.heading.part2")}
            subtitle={t("projects.subtitle")}
          />
        </motion.div>

        {showAll && (
          <div className="project-filters" role="tablist" aria-label={t("projects.filter.label")}>
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`project-filters__btn ${
                  activeFilter === filter.id ? "project-filters__btn--active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {t(filter.labelKey)}
              </button>
            ))}
          </div>
        )}

        <div className="project-cases-grid">
          {baseProjects.map((project: Project, index) => (
            <motion.div
              key={project.slug}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
              viewport={{ once: true }}
            >
              <ProjectCaseCard
                project={project}
                language={language}
                featured={!showAll}
                labels={labels}
                onVideoClick={openVideoModal}
              />
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              {t("projects.btn.all")}
            </Link>
          </div>
        )}
      </div>

      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        videoUrl={videoModal.videoUrl}
        projectTitle={videoModal.projectTitle}
        projectDescription={videoModal.projectDescription}
      />
    </section>
  );
}
