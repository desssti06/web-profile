"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function EducationPage() {
  const { t } = useLanguage();
  const education = [
    { date: t("educationDateCurrent"), institution: "Institut Teknologi Kalimantan", title: "Informatika" },
    { date: t("educationDatePast"), institution: "SMK Negeri 1 Balikpapan", title: "Rekayasa Perangkat Lunak" },
  ];

  return (
    <main className="info-page">
      <Link href="/" className="back-button">
        {t("backHome")}
      </Link>

      <header className="info-header">
        <h1>{t("education")}</h1>
      </header>

      <section className="education-timeline">
        {education.map((item) => (
          <div key={item.date} className="education-item">
            <div className="timeline-date">{item.date}</div>
            <div className="education-institution">{item.institution}</div>

            <div className="timeline-card">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
