import React from 'react'
export const Context = React.createContext();

const DifferentContextComponent = ({ children }) => {
    let a = "HELLO";
    let b = [10, 20, 30, 40, 50, 60]
    return (
        <Context.Provider value={{ a, b }}>
            {children}
        </Context.Provider>
    )
}

export default DifferentContextComponent;