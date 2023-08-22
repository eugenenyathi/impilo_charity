import InnerPagesHero from "@/components/InnerPagesHero";
import Image from "next/image";
import rainWater from "/public/images/rain-water.jpg";
import solar from "/public/images/solar.jpg";
import clothing from "/public/images/clothing.jpg";
import PageWrapper from "@/app/page-wrapper";

export default function ProjectsCompleted() {
  return (
    <PageWrapper>
      <div>
        <InnerPagesHero pageTitle="Projects Completed" />
        <div className="completed-projects-page width-container">
          <div className="project-item">
            <Image
              src={rainWater}
              width={400}
              height={200}
              alt="water tank img"
            />
            <div className="text-wrapper">
              <h1 className="section-heading">Rain Harvest</h1>
              <p className="section-paragraph">
                A rain harvest system of 1000 liters was installed at one
                location area in December 2021.
              </p>
            </div>
          </div>
          <div className="project-item">
            <Image src={solar} width={400} height={200} alt="solar light img" />
            <div className="text-wrapper">
              <h1 className="section-heading">Solar Lights</h1>
              <p className="section-paragraph">
                10 solar lights were delivered. The brand was (see insert)
                Mobiya TS 120s Lantern with cell charger
              </p>
            </div>
          </div>
          <div className="project-item">
            <Image
              src={clothing}
              width={400}
              height={200}
              alt="clothing distribution"
            />
            <div className="text-wrapper">
              <h1 className="section-heading">Ongoing</h1>
              <p className="section-paragraph">
                Delivering food to Molita and her Family
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
