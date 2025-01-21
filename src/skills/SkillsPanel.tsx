import { useState } from "react";
import Card from "./Card";
import "./SkillsPanel.css";

interface CardData {
  source?: string;
  title?: string;
  description?: string;
  longDesc?: string;
}

type Props = {
  data: CardData[]; // Array of objects
};

function SkillsPanel({ data }: Props) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleChangeActive = (id: string) => {
    setActiveCardId((prev) => (prev == id ? null : id));
  };

  return (
    <div className="SkillsPanel" id="About">
      <div className="SkillsPanelTitle">
        <h2>About Me</h2>
        <p>
          I am a hard working computer engineering student that loves to tinker
          with both software and hardware. Some of my related skills and
          experiences involve:
        </p>
        <p>{"<Click each to expand>"}</p>
      </div>
      <div className="SkillsContainer">
        {data.map((card, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default SkillsPanel;
