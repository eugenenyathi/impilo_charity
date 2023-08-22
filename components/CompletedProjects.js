"use client";

import Image from "next/image";
import rainWater from "/public/images/rain-water.jpg";
import solar from "/public/images/solar.jpg";
import clothing from "/public/images/clothing.jpg";

import { useVisibilityAnimation } from "@/hooks/useVisibilityAnimation";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";

export default function CompletedProjects() {
  const [ref, animation] = useVisibilityAnimation();

  return (
    <m.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={animation}
      className="completed-projects-wrapper width-container"
    >
      <div className="section-item">
        <m.h1 variants={item} className="section-heading">
          Completed projects
        </m.h1>
        <m.p variants={item} className="section-paragraph">
          Pursuing our vision of "building independent rural communities" , we
          have implemented three projects. We have provided the community with
          water tanks to harvest the rains, we have distributed solar lights and
          clothing.
        </m.p>
      </div>
      <div className="section-items-wrapper">
        <m.div variants={item} className="section-item-img">
          <Image
            src={rainWater}
            width={400}
            height={200}
            alt="water tank img"
          />
        </m.div>

        <m.div variants={item} className="section-item-img">
          <Image src={solar} width={400} height={200} alt="solar light img" />
        </m.div>

        <m.div variants={item} className="section-item-img">
          <Image
            src={clothing}
            width={400}
            height={200}
            alt="clothing distribution"
          />
        </m.div>
      </div>
    </m.section>
  );
}
