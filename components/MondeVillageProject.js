"use client";

import Image from "next/image";
import mondeVillage from "/public/images/monde-village-project.png";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";

export default function MondeVillageProject() {
  return (
    <div className="project-page-project monde-project width-container">
      <div className="section-head">
        <h1 className="section-heading projects">Monde Village</h1>

        <p className="section-paragraph">
          The quiet rural countryside of Monde Village is located approximately
          20 km from Victoria Falls. The population is approximately 300 people.
          It is an agriculture community. They depend on the summer rains. There
          is one well located in the village where some villagers travel up to
          2.5 km one way to obtain water. The homes have cracks and holes in the
          roofs. There is an elementary school in need of serious repairs. The
          villagers are in need of food, clothing and improved shelter.
        </p>
      </div>
      <div className="section-landing">
        <m.div
          className="text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div variants={item} className="project-page-img-mobile">
            <Image
              src={mondeVillage}
              width={450}
              height={450}
              alt="monde village project"
            />
          </div>

          <m.p variants={item} className="section-paragraph">
            Most rural Zimbabwean folks are subsistence farmers, so they have
            little interaction with urban centers apart from if they want to
            sell surplus produce. Rural villages in Zimbabwe are comprised of
            individual homesteads, have a primary school (if they are fortunate)
            and a communal borehole, which supplies water for the entire village
            at a single point. The dirt roads and tracks in Monde are relatively
            well maintained, though this may be because they are used
            infrequently, as few people living in the villages have the luxury
            of a car.
          </m.p>
          <m.p variants={item} className="section-paragraph">
            If villagers need to go to the hospital or anywhere else in town
            they would have to walk, catch a lift on a donkey-drawn cart, or
            maybe take the local version of “public transport” (packed
            omnibuses) if they can afford it. However, the latter is unlikely,
            as most individuals get by on barter-trade and with no source of
            monetary income have very little money.
          </m.p>
          <m.p variants={item} className="section-paragraph">
            Every so often the villagers go far into the woods to obtain
            branches to rethatch their roofs. This is a laborious process as
            they do this on foot as they do not have transportation to deliver
            the branches.
          </m.p>
        </m.div>

        <m.div variants={item} className="project-page-img-desktop">
          <Image
            src={mondeVillage}
            width={450}
            height={500}
            alt="monde village project"
          />
        </m.div>
      </div>
    </div>
  );
}
