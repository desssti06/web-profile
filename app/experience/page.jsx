"use client";

import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <main className="info-page">
      <Link href="/" className="back-button">
        {t("backHome")}
      </Link>

      <header className="info-header">
        <h1>{t("experience")}</h1>
      </header>

      <section className="experience-grid">
        {experiences.map((item) => (
          <ExperienceCard
            key={item.slug}
            date={item.date}
            title={item.title}
            organization={item.organization}
            slug={item.slug}
          />
        ))}
      </section>
    </main>
  );
}
