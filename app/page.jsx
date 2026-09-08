"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoleCards from "@/components/RoleCards";
import Contact from "@/components/Contact";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const education = [
    {
      date: t("educationDateCurrent"),
      institution: "Institut Teknologi Kalimantan",
      title: "Informatika",
    },
    {
      date: t("educationDatePast"),
      institution: "SMK Negeri 1 Balikpapan",
      title: "Rekayasa Perangkat Lunak",
    },
  ];

  return (
    <main>

      <Navbar />

      <Hero />

      <section id="education" className="info-page">
        <header className="info-header">
          <h1>{t("education")}</h1>
        </header>

        <div className="education-timeline">
          {education.map((item) => (
            <div key={item.date} className="education-item">
              <div className="timeline-date">{item.date}</div>
              <div className="education-institution">{item.institution}</div>

              <div className="timeline-card">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RoleCards />

      <section id="experience" className="info-page">
        <header className="info-header">
          <h1>{t("experience")}</h1>
        </header>

        <div className="experience-grid">
          {experiences.map((item) => (
            <ExperienceCard
              key={item.slug}
              date={item.date}
              title={item.title}
              organization={item.organization}
              slug={item.slug}
            />
          ))}
        </div>
      </section>

      <Contact />

    </main>
  );
}