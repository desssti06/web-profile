"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import { projects, roles } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function RolePage({ params }) {
  const { role } = use(params);
  const { t } = useLanguage();

  if (!(role in roles)) {
    notFound();
  }

  const roleKey = role;

  const roleData = roles[roleKey];

  const roleProjects = projects.filter(
    (project) => project.role === roleKey
  );

  return (
    <main className="role-page">

      <Link href="/" className="back-button">
        {t("backRoles")}
      </Link>

      <section className="role-header">
        <h1>
          {roleData.title}
        </h1>

        <div className="hero-line" />

        <p>
          {roleData.description}
        </p>

        <div className="project-count">
          {roleProjects.length} {t("projects")}
        </div>

      </section>

      <section className="projects-list">

        {roleProjects.map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="project-row"
          >

            <span className="project-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="project-visual">
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="project-preview-image"
                />
              </div>

              <span className="project-detail-link">
                {t("viewDetails")}
              </span>
            </div>

            <div className="project-info">

              <span className="project-category">
                {project.category}
              </span>

              <h2>
                {project.title}
              </h2>

              <p>
                {project.shortDescription}
              </p>

              <div className="tech-list">

                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </Link>
        ))}

      </section>

    </main>
  );
}