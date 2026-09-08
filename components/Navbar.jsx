"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        DESTI NUR IRAWATI
      </Link>

      <div className="nav-links">
        <a href="#education">{t("education")}</a>
        <a href="#work">{t("projects")}</a>
        <a href="#experience">{t("experience")}</a>
        <a href="#contact">{t("contact")}</a>
      </div>

      <div className="navbar-actions">
        <div className="language-toggle" aria-label="Select language">
          <button
            type="button"
            className={language === "en" ? "language-active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <button
            type="button"
            className={language === "id" ? "language-active" : ""}
            onClick={() => setLanguage("id")}
            aria-pressed={language === "id"}
          >
            ID
          </button>
        </div>

        <button type="button" className="menu-button" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}