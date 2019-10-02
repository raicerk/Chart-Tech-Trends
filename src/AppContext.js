import React from "react"

const myFirstContext = React.createContext({
    pais: undefined,
    setPais: () => { }
})

myFirstContext.displayName = "AppContext"

export default myFirstContext