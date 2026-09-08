"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperienceDetailPage({ params }) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <main className="experience-detail">
      <Link href="/experience" className="back-button">
        {t("backExperience")}
      </Link>

      <header className="experience-detail-header">
        <span className="experience-date">{experience.date}</span>
        <p>{experience.organization}</p>
        <h1>{experience.title}</h1>
        <div className="hero-line" />
        <p>{experience.description}</p>
      </header>

      <section className="experience-detail-section">
        <span className="detail-number">01</span>
        <h2>{t("myRole")}</h2>
        <ul className="contribution-list">
          {experience.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </section>

      <section className="experience-detail-section">
        <span className="detail-number">02</span>
        <h2>{t("gallery")}</h2>
        <div className="experience-gallery">
          {experience.gallery.map((item) => (
            <div key={item.label} className="experience-gallery-item">
              <span>{item.label}</span>
              <strong>{item.title}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}