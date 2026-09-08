import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function ExperienceCard({
  date,
  title,
  organization,
  slug,
}) {
  const { t } = useLanguage();

  return (
    <Link href={`/experience/${slug}`} className="experience-card">
      <span className="experience-date">{date}</span>
      <h2 className="experience-organization">{organization}</h2>
      <h2 className="experience-role">{title}</h2>
      <span className="experience-link">{t("viewActivities")}</span>
    </Link>
  );
}