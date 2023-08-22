"use client";
import Image from "next/image";
import aboutUsImage from "/public/images/about-our-beginning.jpg";
import { origins } from "@/data.js";

import { useVisibilityAnimation } from "@/hooks/useVisibilityAnimation";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";

export default function OurBeginningAboutUs() {
  const [ref, animation] = useVisibilityAnimation();

  return (
    <m.section
      variants={container}
      initial="hidden"
      animate={animation}
      ref={ref}
      className="our-beginning-wrapper width-container"
    >
      <div className="text-wrapper">
        <h1 className="section-heading">Our Beginning</h1>
        {origins.aboutUs.text.map((paragraphText, index) => (
          <m.p variants={item} key={index} className="section-paragraph">
            {index == 2 && (
              <m.div variants={item} className="about-us-image mobile-size">
                <Image
                  src={aboutUsImage}
                  alt="our beginning image"
                  width={500}
                  height={500}
                  className="gallery-image"
                />
              </m.div>
            )}
            {paragraphText}
          </m.p>
        ))}
      </div>
      <m.div variants={item} className="about-us-image desktop">
        <Image
          src={aboutUsImage}
          alt="our beginning image"
          width={500}
          height={500}
          className="gallery-image"
        />
      </m.div>
    </m.section>
  );
}
