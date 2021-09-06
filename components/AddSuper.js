import { urlObjectKeys } from "next/dist/shared/lib/utils";
import React, {useEffect,useContext,useState} from "react"
import {AppContext} from './context'
import { fetchSuper } from "./fetch";



export const AddSuper = () => {
    const { teamSize, setTeamSize, randomNumber, setRandomNumber } = useContext(AppContext);
    const [superImage, setSuperImage] = useState("")

   
    const add = () => {    
        if (teamSize <= 731) setTeamSize(teamSize+1)
        setRandomNumber(Math.floor(Math.random() * 731))
        fetchSuper(1)
        }
    const subtract = () => {    
    if (teamSize > 0) setTeamSize(teamSize-1)
    }

    return (
        <div>
        <img src={''} alt='super'/>
        <button onClick={add}>Agregar Random Superheroe</button>
        <button onClick={subtract}>Quitar ultimo Superheroe</button>
        </div>
    )

}