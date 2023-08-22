import InnerPagesHero from "./InnerPagesHero";
import BeekeepingProject from "./BeekeepingProject";
import ListFutureProjects from "./ListFutureProjects";

export default function FutureProjectsPage() {
  return (
    <section>
      <InnerPagesHero pageTitle="Future Fundraising Projects*" />
      <div className="project-page-wrapper width-container">
        <BeekeepingProject />
        <ListFutureProjects />
      </div>
    </section>
  );
}
