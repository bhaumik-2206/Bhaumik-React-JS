import React, { createContext } from 'react'
import Context2 from './Context2';
export const AllTypeOfContext = createContext();

const Context1 = () => {
    let string = "This is a string";
    let number = 1709;
    function func() {
        return "This is a function";
    }
    let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    let object = { name: "Raj", age: 20 };
    return (
        <AllTypeOfContext.Provider value={{ string, number, func, array, object }}>
            <Context2 />
        </AllTypeOfContext.Provider>
    )
}

export default Context1