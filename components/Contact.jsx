import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-panel">
        <h2>{t("contactTitle")}</h2>

        <p>
          {t("contactDescription")}
        </p>

        <div className="contact-links">
          <a href="mailto:destinuriarawati06@gmail.com" className="contact-link contact-link-primary">
            {t("emailMe")}
          </a>
          <a href="https://www.linkedin.com/in/desti-nur-irawati-498319333/" target="_blank" rel="noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href="https://github.com/desssti06" target="_blank" rel="noreferrer" className="contact-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}