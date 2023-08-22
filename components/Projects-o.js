import Image from "next/image";
import mondeVillage from "/public/images/blog-img2.jpg";
import survey from "/public/images/survey.jpg";
import cooperative from "/public/images/co-op.jpg";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="projects-wrapper width-container">
      <h1 className="section-heading">Our Projects</h1>
      <div className="projects-inner-wrapper">
        <div className="project-item">
          <div className="project-item-img">
            <Image
              src={mondeVillage}
              width={400}
              height={200}
              alt="monde village hut image"
            />
          </div>

          <div className="text-wrapper">
            <h1 className="sub-section-heading">Monde Village</h1>
            <p className="section-paragraph">
              The quiet rural countryside of Monde Village is located
              approximately 20 km from Victoria Falls. The population is
              approximately 300 people. It is an agriculture community. They
              depend on the summer rains. There is one well located in the
              village where some villagers travel up to 2.5 km one way to obtain
              water.
            </p>
            <div className="read-more-btn-wrapper">
              <Link
                href="/projects/survey-of-villagers"
                className="section-read-more"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-item-img">
            <Image
              src={survey}
              width={400}
              height={200}
              alt="monde village survey image"
            />
          </div>

          <div className="text-wrapper">
            <h1 className="sub-section-heading">Survey of Villagers</h1>
            <p className="section-paragraph">
              Shelomith surveyed approximately 30 villagers, which is
              approximately 10% percent of the population, to access what is
              needed.
            </p>
            <div className="read-more-btn-wrapper">
              <Link
                href="/projects/survey-of-villagers"
                className="section-read-more"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-item-img">
            <Image
              src={cooperative}
              width={400}
              height={200}
              alt="forming a cooperative"
            />
          </div>

          <div className="text-wrapper">
            <h1 className="sub-section-heading">Forming a Cooperative</h1>
            <p className="section-paragraph">
              The villagers are stakeholders. With the help of charity funding,
              they will decide their fate.
            </p>
            <div className="read-more-btn-wrapper">
              <Link
                href="/projects/survey-of-villagers"
                className="section-read-more"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
