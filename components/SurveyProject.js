"use client";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import Image from "next/image";
import survey from "/public/images/survey-project.png";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";

export default function SurveyProject() {
  const [ref, { entry }] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = entry && entry.isIntersecting;
  const animation = useAnimation();

  const resetPosition = async () => {
    await animation.start("reset");
  };

  useEffect(() => {
    console.log("Element is in view?", isVisible);
    if (isVisible) {
      animation.start("show");
    } else {
      resetPosition();
    }
  }, [isVisible]);

  return (
    <div className="project-page-project background-grey ">
      <div ref={ref} className="survey-project width-container">
        <h1 className="section-heading projects">Survey of Villagers</h1>
        <m.div
          variants={container}
          initial="hidden"
          animate={animation}
          className="section-landing"
        >
          <div className="text-wrapper">
            <m.p variants={item} className="section-paragraph">
              Shelomith surveyed approximately 30 villagers, which is
              approximately 10% percent of the population, to access what is
              needed. A formal Needs Assessment will be created and passed to
              the majority of the villagers. Initially, the villagers’ needs
              were to build a well, repairs to their homes and repair of their
              school. They wanted a well and additional rain harvest barrel
              collection locations. The long range goal is for the villagers to
              generate income in an entrepreneurial spirit so that the income
              derived from products made and skills learned will provide a
              better life for themselves and their families.
            </m.p>
            <m.div variants={item} className="project-page-img-mobile">
              <Image
                src={survey}
                width={450}
                height={500}
                alt="survey-of-villages img"
              />
            </m.div>

            <m.p variants={item} className="section-paragraph">
              Attached in the index is a copy of the initial survey conducted a
              few months ago. A formal Needs Assessment and Feasibility Study
              will be conducted in the upcoming months.
            </m.p>
          </div>
          <m.div variants={item} className="project-page-img-desktop">
            <Image
              src={survey}
              width={450}
              height={500}
              alt="survey-of-villages img"
            />
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
