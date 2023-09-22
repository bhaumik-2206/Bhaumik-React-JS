import React, { useContext } from 'react'
import { myContext, updateContext } from './contaxt1'

const Context3 = () => {
    const value = useContext(myContext);
    const updateChange = useContext(updateContext);
    return (
        <>
            <button onClick={updateChange}>CLICK</button>
            <h1>{value ? "HELLO" : "WORLD"}</h1>
        </>
    )
}
export default Context3;