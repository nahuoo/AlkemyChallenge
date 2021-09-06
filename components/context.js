import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [teamSize, setTeamSize] = useState(1)
    const [heroesArray, setHeroesArray] = useState('')
    const [randomNumber, setRandomNumber] = useState('')


    const value = {
        teamSize,
        setTeamSize,
        randomNumber,
        setRandomNumber
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}