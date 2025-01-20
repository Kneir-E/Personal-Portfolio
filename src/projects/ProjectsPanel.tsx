import { useState } from "react";
import "./ProjectsPanel.css";

interface Props {
  title: string;
  description: string;
  source: string;
  id: string;
  key: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

function ProjectsPanel() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleChangeActive = (id: string) => {
    setActiveId((prev) => (prev == id ? null : id));
  };

  return (
    <div className="ProjectsPanel">
      <div className="ProjectsMainContainer">
        <h2>Featured Projects</h2>
        <p>
          {"<"}Click to display{">"}
        </p>
        <div className="ProjectsSelector"></div>
      </div>

      <div className="ProjectsDisplay">
        <img className="ProjectsImages" src="/SkillsImages/rp2040.jpg"></img>
        <div className="ProjectsDesc">
          <h2>Project Title {"->]"}</h2>
          <p>Project Description</p>
        </div>
      </div>

      {/* { {data.map((card, index) => (
          <Card
            source={card.source}
            title={card.title}
            description={card.description}
            longDesc={card.longDesc}
            id={`Skill_no_${index}`}
            key={`Skill_no_${index}`}
            isActive={activeCardId === `Skill_no_${index}`}
            onClick={handleChangeActive}
          />
        ))} } */}
    </div>
  );
}

export default ProjectsPanel;
