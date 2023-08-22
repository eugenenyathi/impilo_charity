import { useVisibilityAnimation } from "@/hooks/useVisibilityAnimation";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";
import YoutubeEmbed from "./YoutubeEmbed";

export default function OurVision() {
  const [ref, animation] = useVisibilityAnimation();

  return (
    <section ref={ref} className="our-vision-wrapper  ">
      <m.div
        variants={container}
        initial="hidden"
        animate={animation}
        className="our-vision-inner-wrapper width-container"
      >
        <YoutubeEmbed embedId="aAADYvkW2tA" width={500} height={200} />

        <div className="text-wrapper">
          <m.h1 variants={item} className="section-heading">
            Our Vision
          </m.h1>
          <m.p variants={item} className="section-paragraph">
            “Building independence for rural communities in Zimbabwe by
            providing infrastructure, water sources, and teaching the community
            to become self-sufficient entrepreneurs for their future
            independence – uplifting the lives of all.
          </m.p>
        </div>
      </m.div>
    </section>
  );
}
