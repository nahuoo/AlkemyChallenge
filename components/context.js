import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [teamSize, setTeamSize] = useState(0)

    const value = {
        teamSize,
        setTeamSize
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}