"use client";

import { createContext, startTransition, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    education: "Education",
    projects: "Projects",
    experience: "Organization & Volunteer",
    contact: "Contact",
    hello: "Hello, I am",
    heroRole: "AI Engineer, Data Analyst & Frontend Developer",
    heroDescription: "I build intelligent systems, transform data into insights, and create interactive digital experiences.",
    viewCv: "View CV",
    exploreWork: "Explore My Work",
    choosePath: "Choose a path to see my selected projects in each field.",
    viewProjects: "View Projects",
    viewActivities: "View Activities",
    backHome: "Back to Home",
    backRoles: "Back to Roles",
    backProjects: "Back to Projects",
    backExperience: "Back to Experience",
    viewDetails: "View Details",
    viewGithub: "View on GitHub",
    role: "Role",
    techStack: "Tech Stack",
    contribution: "My Contribution",
    myRole: "My Role",
    gallery: "Activity Gallery",
    projectPreview: "Project Preview",
    contactTitle: "Let's Build Something Together",
    contactDescription: "I'm open to opportunities, collaborations, and interesting projects in AI, Machine Learning, and Software Engineering.",
    emailMe: "Email Me",
    educationDateCurrent: "August 2022 - Present",
    educationDatePast: "July 2019 - May 2022",
  },
  id: {
    education: "Pendidikan",
    projects: "Proyek",
    experience: "Organisasi & Relawan",
    contact: "Kontak",
    hello: "Halo, saya",
    heroRole: "Insinyur AI, Analis Data & Pengembang Frontend",
    heroDescription: "Saya membangun sistem cerdas, mengubah data menjadi wawasan, dan menciptakan pengalaman digital yang interaktif.",
    viewCv: "Lihat CV",
    exploreWork: "Lihat Karya Saya",
    choosePath: "Pilih bidang untuk melihat proyek pilihan saya.",
    viewProjects: "Lihat Proyek",
    viewActivities: "Lihat Kegiatan",
    backHome: "Kembali ke Beranda",
    backRoles: "Kembali ke Role",
    backProjects: "Kembali ke Proyek",
    backExperience: "Kembali ke Pengalaman",
    viewDetails: "Lihat Detail",
    viewGithub: "Lihat di GitHub",
    role: "Peran",
    techStack: "Teknologi",
    contribution: "Kontribusi Saya",
    myRole: "Peran Saya",
    gallery: "Galeri Kegiatan",
    projectPreview: "Pratinjau Proyek",
    contactTitle: "Mari Bangun Sesuatu Bersama",
    contactDescription: "Saya terbuka untuk kesempatan, kolaborasi, dan proyek menarik di bidang AI, Machine Learning, dan Software Engineering.",
    emailMe: "Email Saya",
    educationDateCurrent: "Agustus 2022 - Sekarang",
    educationDatePast: "Juli 2019 - Mei 2022",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (savedLanguage === "en" || savedLanguage === "id") {
      startTransition(() => setLanguageState(savedLanguage));
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  function setLanguage(nextLanguage) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key) => translations[language][key] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}