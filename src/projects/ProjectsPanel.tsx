import { useState } from "react";
import "./ProjectsPanel.css";
import ImageSlider from "./ImageSlider";
import ProjectCard from "./ProjectCard";
("./ImageSlider");

interface Project {
  title: string;
  description: string;
  sources: Array<string>;
  url: string;
}

type Props = {
  data: Project[];
};

function ProjectsPanel({ data }: Props) {
  const defaultProj = {
    title: "Default Project Title",
    description: "Default Project Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  };

  const [activeProj, setActiveProj] = useState<Project>(defaultProj);

  const handleChangeProj = (index: number) => {
    setActiveProj((prev) =>
      prev === data[index] ? (prev = defaultProj) : (prev = data[index])
    );
    console.log(activeProj);
  };

  return (
    <div className="ProjectsPanel">
      <div className="ProjectsMainContainer">
        <h2>Featured Projects</h2>
        <p>{"<Click to display>"}</p>
        <div className="ProjectsSelector">
          {data.map((project, i) => (
            <ProjectCard
              title={project.title}
              index={i}
              key={`Project_no_${i}`}
              isActive={activeProj === data[i]}
              onClick={handleChangeProj}
            ></ProjectCard>
          ))}
        </div>
      </div>

      <div className="ProjectsDisplay">
        <ImageSlider sources={activeProj.sources}></ImageSlider>
        <div className="ProjectsDesc">
          <a href={activeProj.url} target="_blank">
            <h2>{`${activeProj.title}`}</h2>
          </a>
          <p>{activeProj.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPanel;
