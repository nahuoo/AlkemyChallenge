import React, {useState} from "react"

export const AddSuper = () => {
    const [teamSize, setTeamSize] = useState(0)

    const add = () => {    
        if (teamSize <= 731) setTeamSize(teamSize+1)
        }
    const subtract = () => {    
    if (teamSize > 0) setTeamSize(teamSize-1)
    }

    return (
        <div>
        <p>{teamSize}</p>
        <button onClick={add}>Agregar Super</button>
        <button onClick={subtract}>Quitar Super</button>
        </div>
    )

}