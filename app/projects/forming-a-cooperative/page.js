import PageWrapper from "@/app/page-wrapper";
import CooperativeProject from "@/components/CooperativeProject";
import InnerPagesHero from "@/components/InnerPagesHero";

export default function CooperativeProjectPage() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Forming a Cooperative" />
        <div className="read-more-project-page width-container">
          <CooperativeProject />
        </div>
      </div>
    </PageWrapper>
  );
}
