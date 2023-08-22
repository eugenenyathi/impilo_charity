import Image from "next/image";
import cooperative from "/public/images/cooperative.png";
import Link from "next/link";

export default function CooperativeProject() {
  return (
    <div className="project-page-project width-container">
      <div className="section-head">
        <h1 className="section-heading projects">Forming a Cooperative</h1>
        <p className="section-paragraph">
          The villagers are stakeholders. With the help of charity funding, they
          will decide their fate. It is important Monde Villagers invest in the
          outcome via their sweat and time to help make the village self-funding
          and sustainable. Forming a co-op legitimizes the mission of the
          charity and most importantly, stakeholders, that is, the villagers, to
          realize their independence. It is a democratic vehicle they as a whole
          will decide which project to invest their time and decide their own
          fate. The charity will donate starter funds for the various projects,
          which in turn, will generate sustainable income for the villagers to
          invest and use productively to improve their quality of life. use
          productively to improve their quality of life.
        </p>
      </div>
      <div className="section-landing">
        <div className="text">
          <p className="section-paragraph">
            It is anticipated that the first Board Members will be the existing
            elders of the village who will serve a two-year term (less or more).
            The meetings will be agendized by the Project Director, who will
            assist with any questions or suggestions Village residents can have
            at the meeting and the Board members after discussion of the items
            on the agenda will make motions (as followed by Robert Rules). The
            decision of monies that are made via projects will be invested back
            into the village.
          </p>
          <div className="project-page-img-mobile">
            <Image
              src={cooperative}
              width={450}
              height={450}
              alt="monde village project"
            />
          </div>
          <p className="section-paragraph">
            It is important that the stakeholders, that is, the villagers, are
            willing to invest their time and energy to improve their lives and
            those of their fellow villagers. Thus, with this platform it makes
            the villagers decide their fate. The initial survey has shown that
            Monde Villagers are more than willing to be part of this effort and
            are excited about the prospects of what is in store for them as
            their life will improve.
          </p>
          <p className="section-paragraph">
            From our research of other well-known African Charities has shown
            that providing infrastructure such as wells without providing a way
            to create funds to maintain it will end in failure. The charity
            wants to prevent these issues. Therefore, in order to earmark
            donated funds to build a well, for example, there will necessarily
            need future funds, and a dedicated person to check the well and see
            to it funds are available to maintain, so it is fully functional.
            That is why it is crucial that the villagers work towards paths to
            generate income so that these commonplace failures with donated
            funds will fund
          </p>
          <p className="section-paragraph">
            When a new well is bored and functional the villagers can grow more
            crops and even raise more livestock. This is a goal in the next year
          </p>

          <ul className="project-ul-list">
            <li className="list-item">
              Money ‘wasted’ on water projects in Africa
              <p>
                <Link href="https://www.theguardian.com/society/katineblog/2009/mar/26/water-projects-wasted-money">
                  https://www.theguardian.com/society/katineblog/2009/mar/26/water-projects-wasted-money
                </Link>
              </p>
            </li>
            <li className="list-item">
              Reasons Water Wells Fail and Why Sustainable Development is
              Possible
              <p>
                <Link href="https://lifewater.org/blog/3-reasons-water-wells-fail-and-why-sustainable-development-is-possible/">
                  https://lifewater.org/blog/3-reasons-water-wells-fail-and-why-sustainable-development-is-possible/
                </Link>
              </p>
            </li>
          </ul>
        </div>
        <div className="project-page-img-desktop">
          <Image
            src={cooperative}
            width={450}
            height={450}
            alt="monde village project"
          />
        </div>
      </div>
    </div>
  );
}
