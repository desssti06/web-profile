import RoleCard from "./RoleCard";
import { roles } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

export default function RoleCards() {
  const { t } = useLanguage();

  return (
    <section id="work" className="roles-section">

      <h2 className="section-title">
        {t("exploreWork")}
      </h2>

      <p className="section-description">
        {t("choosePath")}
      </p>

      <div className="roles-grid">

        <RoleCard
          title={roles["ai-engineer"].shortTitle}
          description={roles["ai-engineer"].description}
          slug="ai-engineer"
        />

        <RoleCard
          title={roles["data-scientist"].shortTitle}
          description={roles["data-scientist"].description}
          slug="data-scientist"
        />

        <RoleCard
          title={roles["frontend-engineer"].shortTitle}
          description={roles["frontend-engineer"].description}
          slug="frontend-engineer"
        />

      </div>

    </section>
  );
}