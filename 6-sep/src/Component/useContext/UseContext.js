// import React, { useState } from 'react'
// import NewUseContext from "./newUseContext";
// export const context = React.createContext();

// export default function UseContext() {
//     const [changeState, setChangeState] = useState(false)
//     return (
//         <context.Provider value={[changeState, setChangeState]}>
//             <NewUseContext />
//             <h1>{changeState ? "Sign Out" : "Sign In"}</h1>
//         </context.Provider>
//     )
// }

// import React from 'react'
// import NewUseContext from "./newUseContext";
// export const context = React.createContext();
// const UseContext = () => {
//     return (
//         <context.Provider value={{ name: "Raj", surname: "Bundela", age: 20 }}>
//             <NewUseContext />
//         </context.Provider>
//     )
// }
// export default UseContext


// import React, { useContext, useState } from 'react'
// import { myContext } from './Btn'
// const UseContext = () => {
//     // console.log(myContext);
//     // const { count, increment, decrement } = useContext(myContext);
//     const p1 = useContext(myContext);
//     console.log(p1);
//     return (
//         <div>
//             {/* <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button> */}
//         </div >
//     )
// }
// export default UseContext


// import React, { createContext, useContext, useState } from 'react';
// import ChildComponent from './newUseContext';
// export const MyContext = createContext();
// export default function ParentComponent() {
//     const [dataFromChild, setDataFromChild] = useState(null);
//     const handleDataFromChild = (data) => setDataFromChild(data);
//     return (
//         <MyContext.Provider value={handleDataFromChild}>
//             <div>
//                 <h1>Parent Component</h1>
//                 <p>Data from Child: {dataFromChild}</p>
//                 <ChildComponent />
//             </div>
//         </MyContext.Provider>
//     );
// }

// import React, { useState } from 'react'
// import NewUseContext from './newUseContext';
// const UseContext = () => {
//     return (
//         <myContext>
//             <NewUseContext />
//         </myContext>
//     )
// }
// export default UseContext

// import React, { useContext } from 'react';
// import MyContext, { NewContext, NewContextUpdate } from './contexts';
// const NewUseContext = () => {
//     const change = useContext(NewContext);
//     // const changeTheme = useContext(NewContextUpdate);
//     console.log(change);
//     return (
//         <MyContext>
//             {/* <button onClick={changeTheme}>Change Theme</button> */}
//             <h1 style={{ color: change ? "red" : "blue" }}>HELLO</h1>
//         </MyContext>
//     );
// }
// export default NewUseContext;