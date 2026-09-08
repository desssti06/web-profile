"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content">

        <p className="eyebrow">
          {t("hello")}
        </p>

        <h1>
          DESTI
          <br />
          <span>NUR IRAWATI</span>
        </h1>

        <div className="hero-line" />

        <h2>
          {t("heroRole")}
        </h2>

        <p className="hero-description">
          {t("heroDescription")}
        </p>

        <a href="\CV_Desti Nur Irawati.pdf" target="_blank" rel="noreferrer" className="cv-button">
          {t("viewCv")}
        </a>

      </div>

      <div className="hero-visual">

        <div className="hero-circle" />

        <Image
          src="/images/foto2.png"
          alt="Desti Nur Irawati"
          width={680}
          height={780}
          className="hero-photo"
        />

      </div>
    </section>
  );
}