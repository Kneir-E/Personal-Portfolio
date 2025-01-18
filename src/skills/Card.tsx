import './Card.css'

interface Props{
  source: string;
  title: string;
  description: string;
  id: number;
  isActive: boolean;
  onClick: (id:number) => void;
}

function Card({source, title, description, id, isActive, onClick}: Props) {
  return (
    <div 
    className={`Card ${isActive? "active" : "inactive"}`} 
    onClick={() => onClick(id)}
    >
      <img src={source} alt="image"/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card