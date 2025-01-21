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

function Skills_Panel({ data }: Props) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleChangeActive = (id: string) => {
    setActiveCardId((prev) => (prev == id ? null : id));
  };

  return (
    <div className="SkillsPanel">
      <h2>What I do</h2>
      <p>{"<Click each to expand>"}</p>
      <p>
        I have computer engineering related skills in both software and hardware
        development.
      </p>
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

export default Skills_Panel;
