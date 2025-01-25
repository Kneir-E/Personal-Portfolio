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
    title: "Highlight Projects",
    description:
      'A short summary of my old projects.\
    \n Click on the "Highlight Projects" to go to my github.\
    \n Click on the list to display a project',
    sources: [
      "/content/03_hotel/01.png",
      "/content/05_java/01.png",
      "/content/06_python/01.png",
    ],
    url: "https://github.com/Kneir-E",
  };

  const [activeProj, setActiveProj] = useState<Project>(defaultProj);

  const handleChangeProj = (index: number) => {
    setActiveProj((prev) =>
      prev === data[index] ? (prev = defaultProj) : (prev = data[index])
    );
    console.log(activeProj);
  };

  return (
    <div className="ProjectsPanel" id="Projects">
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
