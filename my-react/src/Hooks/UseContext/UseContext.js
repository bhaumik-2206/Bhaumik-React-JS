import React from 'react'
import UserData from './MainContext';
import Context1 from './Context1';
import Context2 from './Context2';
export const Internal = React.createContext();

const UseContext = () => {
    let name = "Raj"
    let obj = { a: 10, b: 20 };
    return (
        <UserData.Provider value={{ name }}>
            <Context1 />
            <Internal.Provider value={{ obj }}>
                <Context2 />
            </Internal.Provider>
        </UserData.Provider>
    )
}

export default UseContext;