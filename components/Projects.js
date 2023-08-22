import { useVisibilityAnimation } from "@/hooks/useVisibilityAnimation";
import { container, item } from "@/animations";
import { motion as m } from "framer-motion";
import { ourProjects } from "@/data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [ref, animation] = useVisibilityAnimation();

  return (
    <m.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={animation}
      className="projects-wrapper width-container"
    >
      <m.h1 variants={item} className="section-heading">
        Our Projects
      </m.h1>
      <div className="projects-inner-wrapper">
        {ourProjects.map((project) => (
          <m.div key={project.id} variants={item}>
            <ProjectItem key={project.id} {...project} />
          </m.div>
        ))}
      </div>
    </m.section>
  );
}
