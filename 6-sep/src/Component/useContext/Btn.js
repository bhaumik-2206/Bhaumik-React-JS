// import React, { useContext } from 'react'
// import { context } from './UseContext'
// const Btn = () => {
//     console.log(context);
//     const [changeState, setChangeState] = useContext(context)
//     return (
//         <div>
//             <button onClick={() => setChangeState(!changeState)}>{changeState ? "Sign In" : "Sign Out"}</button>
//         </div>
//     )
// }
// export default Btn


// import React, { useContext } from 'react'
// import { context } from './UseContext'
// const Btn = () => {
//     const userData = useContext(context);
//     console.log(userData)
//     console.log(context)
//     return (
//         <div>
//             {/* <button onClick={() => setChangeState(!changeState)}>{changeState ? "Sign In" : "Sign Out"}</button> */}
//             <h1>{userData.name}</h1>
//             <h1>{userData.surname}</h1>
//             <h1>{userData.age}</h1>
//         </div>
//     )
// }
// export default Btn


// import React, { useState } from 'react'
// export const myContext = React.createContext();
// const Btn = () => {
//     const [count, setCount] = useState(0)
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     return (
//         <myContext.Provider value={{ count, increment, decrement }}>
//             <h2>HELLO</h2>
//         </myContext.Provider>
//     )
// }
// export default Btn;

// import React, { useContext } from 'react';
// import { MyContext } from './UseContext';
// function ChildComponent() {
//     const sendDataToParent = useContext(MyContext);
//     const increment = () => {
//         sendDataToParent(pre => pre + 1);
//     };
//     const decrement = () => {
//         sendDataToParent(pre => pre - 1);
//     };
//     return (
//         <div>
//             <h2>Child Component</h2>
//             <button onClick={increment}>increment</button>
//             <button onClick={decrement}>decrement</button>
//         </div>
//     );
// }
// export default ChildComponent;





