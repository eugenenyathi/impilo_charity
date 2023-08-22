import PageWrapper from "@/app/page-wrapper";
import InnerPagesHero from "@/components/InnerPagesHero";
import MondeVillageProject from "@/components/MondeVillageProject";

export default function MondeVillageProjectPage() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Monde Village" />
        <div className="read-more-project-page width-container">
          <MondeVillageProject />
        </div>
      </div>
    </PageWrapper>
  );
}
