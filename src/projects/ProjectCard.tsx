// import "./Card.css";

interface Props {
  title: string;
  index: number;
  key: string;
  isActive: boolean;
  onClick: (id: number) => void;
}

function ProjectCard({
  title = "Skill",
  index,
  isActive = false,
  onClick,
}: Props) {
  return (
    <div
      className={`ProjectCard ${isActive ? "active" : "inactive"}`}
      onClick={() => onClick(index)}
    >
      {title}
    </div>
  );
}

export default ProjectCard;
