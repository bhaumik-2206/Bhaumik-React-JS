import React, { useState } from 'react'
import Context2 from './context2';

export const myContext = React.createContext();
export const updateContext = React.createContext();

const Contaxt1 = ({ children }) => {
    const [change, setChange] = useState(true)
    const updateChange = () => {
        setChange(pre => !pre);
    }
    return (
        <myContext.Provider value={change}>
            <updateContext.Provider value={updateChange}>
                {/* <Context2 /> */}
                {children}
            </updateContext.Provider>
        </myContext.Provider>
    )
}
export default Contaxt1