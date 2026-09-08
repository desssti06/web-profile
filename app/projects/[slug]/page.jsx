"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import { projects, roles } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectDetail({
  params,
}) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const roleTitle = roles[project.role]?.shortTitle ?? project.role;

  return (
    <main className="project-detail">
      <Link href={`/roles/${project.role}`} className="back-button">
        {t("backProjects")}
      </Link>

      <section className="project-hero">
        <div className="project-hero-content">
          <span className="project-category">{project.category}</span>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            {t("viewGithub")}
          </a>
        </div>

        <div className="project-hero-image">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="project-preview-image"
          />
        </div>
      </section>

      <section className="project-detail-grid">
        <aside className="project-sidebar">
          <div>
            <span>{t("role")}</span>

            <p>{roleTitle}</p>
          </div>

          <div>
            <span>{t("techStack")}</span>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="project-main">
          <section>
            <span className="detail-number">01</span>

            <h2>{t("contribution")}</h2>

            <ul className="contribution-list">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

        </div>
      </section>
    </main>
  );
}
