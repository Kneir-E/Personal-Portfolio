// import "./Card.css";

interface Props {
  source?: string;
  title?: string;
  description?: string;
  longDesc?: string;
  id: string;
  key: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

function Card({
  source = "/image.png",
  title = "Skill",
  description = "This is a skill",
  longDesc = "I have experience in this skill particularly in __ __ and ___",
  id,
  isActive = false,
  onClick,
}: Props) {
  return (
    <div
      className={`Card Clickable ${isActive ? "active" : "inactive"}`}
      onClick={() => onClick(id)}
    >
      <img src={source} alt="image" />
      <div className="DescContainer">
        <h2>{title}</h2>
        <p style={isActive ? { display: "none" } : { display: "block" }}>
          {description}
        </p>
        <p style={isActive ? { display: "block" } : { display: "none" }}>
          {longDesc}
        </p>
      </div>
    </div>
  );
}

export default Card;
