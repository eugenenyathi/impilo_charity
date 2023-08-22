import InnerPagesHero from "@/components/InnerPagesHero";
import BeekeepingProject from "@/components/BeekeepingProject";
import ListFutureProjects from "@/components/ListFutureProjects";
import PageWrapper from "@/app/page-wrapper";

export default function FutureProjects() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Future Fundraising Projects*" />
        <div className="project-page-wrapper width-container">
          <BeekeepingProject />
          <ListFutureProjects />
        </div>
      </div>
    </PageWrapper>
  );
}
