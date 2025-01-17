import { useState } from "react";

interface Props{
  source: string;
  title: string;
  description: string;
}

function Card({source, title, description}: Props) {

  const [isActive, setIsActive] = useState(false)

  const styles = {
    backgroundColor: "hsl(20, 15.00%, 7.80%)",
    color: "hsl(20, 5.70%, 89.60%)",
    maxWidth: "250px"
  }

  const styles_active = {
    backgroundColor: "hsl(20, 15.00%, 7.80%)",
    color: "hsl(20, 5.70%, 89.60%)",
    maxWidth: "450px"
  }

  return (
    <div  className="card" 
          style={isActive? styles_active : styles}
          onClick={()=>setIsActive(!isActive)}
    >
      <img src={source} alt="image"/>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{isActive && 'Active'}</p>
    </div>
  )
}

export default Card