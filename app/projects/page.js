import CompletedProjects from "@/components/CompletedProjects";
import CooperativeProject from "@/components/CooperativeProject";
import InnerPagesHero from "@/components/InnerPagesHero";
import MondeVillageProject from "@/components/MondeVillageProject";
import SurveyProject from "@/components/SurveyProject";
import PageWrapper from "../page-wrapper";

export default function Projects() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Initial Research and Background of Monde Village." />
        <div className="project-page-wrapper">
          <div className="top-level-heading width-container">
            <h1 className="section-heading">
              Together with Your Donations, We Can See These Projects Come To
              Reality!
            </h1>
          </div>

          <MondeVillageProject />
          <SurveyProject />
          <CooperativeProject />
          <CompletedProjects />
        </div>
      </div>
    </PageWrapper>
  );
}
