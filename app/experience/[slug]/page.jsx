"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useRef } from "react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperienceDetailPage({ params }) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const galleryRef = useRef(null);
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  function scrollGallery(direction) {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <main className="experience-detail">
      <Link href="/experience" className="back-button">
        {t("backExperience")}
      </Link>

      <section className="experience-hero">
        <div className="experience-hero-content">
          <span className="project-category">{experience.organization}</span>
          <h1>{experience.title}</h1>
          <p>{experience.description}</p>
        </div>

        <div className="experience-hero-visual">
          <span>{experience.date}</span>
          <strong>{experience.gallery.length}</strong>
          <small>{t("gallery")}</small>
        </div>
      </section>

      <section className="experience-detail-grid">
        <aside className="experience-sidebar">
          <div>
            <span>{t("role")}</span>
            <p>{experience.title}</p>
          </div>
          <div>
            <span>{t("organization")}</span>
            <p>{experience.organization}</p>
          </div>
          <div>
            <span>{t("date")}</span>
            <p>{experience.date}</p>
          </div>
        </aside>

        <div className="experience-main">
          <section className="experience-detail-section">
            <span className="detail-number">01</span>
            <h2>{t("myRole")}</h2>
            <ul className="contribution-list">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="experience-gallery-section">
        <div className="experience-gallery-frame">
          <button type="button" className="gallery-arrow gallery-arrow-left" onClick={() => scrollGallery(-1)} aria-label="Previous activity">
            &#8592;
          </button>

          <div ref={galleryRef} className="experience-gallery" tabIndex="0">
            {experience.gallery.map((item, index) => (
              <article key={item.label} className={`experience-gallery-item gallery-tone-${index + 1}`}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <i aria-hidden="true">0{index + 1}</i>
              </article>
            ))}
          </div>

          <button type="button" className="gallery-arrow gallery-arrow-right" onClick={() => scrollGallery(1)} aria-label="Next activity">
            &#8594;
          </button>
        </div>
      </section>
    </main>
  );
}