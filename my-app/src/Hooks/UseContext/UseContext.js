import React, { createContext } from 'react'
import ChildContext1 from './ChildContext1';
import New from './New';

// import UserContext from './Context';
export const UserContext = createContext();
export const DataContext = createContext();
const UseContext = () => {
    let greet = "HELLO";
    let name = "Bhaumik";
    let user = { name: "Raj", age: 20 };
    return (
        <div>
            <UserContext.Provider value={user}>
                <ChildContext1 />
                <DataContext.Provider value={{ greet, name }}>
                    <New />
                </DataContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default UseContext;