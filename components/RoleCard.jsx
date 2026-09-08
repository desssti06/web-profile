import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function RoleCard({ title, description, slug }) {
  const { t } = useLanguage();

  return (
    <Link href={`/roles/${slug}`} className="role-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <span className="role-link">
        {t("viewProjects")}
      </span>

    </Link>
  );
}