import { useState } from "react";
import Card from "./Card";


function Skills_Panel(){
    const [activeCardId, setActiveCardId] = useState<number | null>(null)

    const handleChangeActive = (id: number) => {
        setActiveCardId((prev) => (prev === id ? null : id))
    }

    return (
        <div style={{display: 'flex', gap: '10px', padding: '20px'}}>
            {[1,2,3].map((id) => (
                <Card
                    // source = {""}
                    // title = {""}
                    // description = ""
                    // longDesc=""
                    id = {id}
                    key = {id}
                    isActive={activeCardId === id}
                    onClick = {handleChangeActive}
                />
            ))
            }
        </div>
    )
}

export default Skills_Panel