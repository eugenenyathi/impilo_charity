import { futureProjects } from "@/data";

export default function ListFutureProjects() {
  return (
    <div className="future-projects-list-wrapper">
      {futureProjects.map((project) => (
        <div>
          <h1 className="section-heading projects">{project.title}</h1>
          {project.text.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="section-paragraph"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
