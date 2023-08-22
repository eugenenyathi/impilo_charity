import Link from "next/link";
import Image from "next/image";
import beekeeping from "/public/images/bee-keeping.jpg";

export default function BeekeepingProject() {
  return (
    <div className="project-page-project">
      <div className="section-head">
        <h1 className="section-heading projects">Intro</h1>
        <p className="section-paragraph">
          These ideas have been discussed at our official opening celebration
          last October 2022. The Monde Village Elders, who were in attendance,
          as well as many of the villagers were excited with what we plan to do
          to create a new life for them. We told them they are all stakeholders
          and hold the keys to their destinies and we are facilitators of this
          destiny. Our charity aims to provide the tools and training and the
          villagers will provide their commitment/time and labor. These programs
          and ideas were discussed at our celebration and the villagers, most
          especially the elders, who give direction and guidance to the Monde
          Villagers, are in support of what our charity wants to do.
        </p>
      </div>
      <div className="section-landing beekeeping">
        <div className="text">
          <h1 className="section-heading projects beekeeping">Beekeeping</h1>
          <p className="section-paragraph">
            This will be one of the first projects for the charity and we
            desperately need donations in order to fund it. The Charity will
            utilize a lightweight concrete beehive mold system that will be
            strong and economical and will be protected from Honey Badgers as
            well. Information of this system can be found here:
            <Link
              className="project-anchor-tag"
              href="https://www.beegin.co.za/"
              style={{ marginLeft: "5px" }}
            >
              https://www.beegin.co.za/
            </Link>
          </p>
          <p className="section-paragraph">
            Since the area is agricultural, beekeeping would be a natural and
            logical linkage. The goal is to market the honey to tourist shops
            and lodges and boutique groceries in and around Victoria Falls. A
            local village artist will design the label. This business will be
            registered as in Zimbabwe. The name of the company and label design
            will be decided at the cooperative meetings with the villagers in
            attendance to comment and voted on by the elected Board members.
          </p>
          <p className="section-paragraph">
            The charity has procured a local well-known beekeeping company who
            is willing to provide training to the selected villagers for this
            endeavor.
          </p>
        </div>
        <div className="project-page-img-desktop">
          <Image
            src={beekeeping}
            width={450}
            height={500}
            alt="monde village project"
          />
        </div>
      </div>
    </div>
  );
}
