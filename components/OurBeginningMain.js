import Image from "next/image";
import landingPageImage from "/public/images/our-beginning-mobile.png";
import desktopLandingPageImage from "/public/images/our-beginning1.png";
import { origins } from "@/data.js";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";

export default function OurBeginningMain() {
  const [ref, { entry }] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = entry && entry.isIntersecting;
  const animation = useAnimation();

  const resetPosition = async () => {
    await animation.start("reset");
  };

  useEffect(() => {
    if (isVisible) {
      animation.start("show");
    } else {
      resetPosition();
    }
  }, [isVisible]);

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
        {origins.landingPage.text.map((paragraphText, index) => (
          <m.p variants={item} key={index} className="section-paragraph">
            {paragraphText}
          </m.p>
        ))}

        <m.button variants={item} className="section-read-more">
          read more
        </m.button>
      </div>
      <m.div variants={item} className="image-gallery-grid">
        <Image
          src={landingPageImage}
          alt="our beginning image"
          width={500}
          height={500}
          className="gallery-image"
        />
      </m.div>
    </m.section>
  );
}
