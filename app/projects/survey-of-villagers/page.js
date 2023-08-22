import InnerPagesHero from "@/components/InnerPagesHero";
import SurveyProject from "@/components/SurveyProject";

export default function SurveyProjectPage() {
  return (
    <section>
      <InnerPagesHero pageTitle="Survey of Villagers" />
      <div className="read-more-project-page width-container">
        <SurveyProject />
      </div>
    </section>
  );
}
