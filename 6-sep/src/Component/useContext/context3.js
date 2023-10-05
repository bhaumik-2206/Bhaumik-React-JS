// import React, { useContext } from 'react'
// import { myContext, updateContext } from './contaxt1'

// const Context3 = () => {
//     const value = useContext(myContext);
//     const updateChange = useContext(updateContext);
//     return (
//         <>
//             <button onClick={updateChange}>CLICK</button>
//             <h1>{value ? "HELLO" : "WORLD"}</h1>
//         </>
//     )
// }
// export default Context3;


// import React, { useContext } from 'react'
// import Context2 from './context2'
// import Btn from './Btn';
// const Context3 = () => {
//     return (
//         <Context2>
//             <Btn />
//         </Context2>
//     )
// }
// export default Context3


// import { createContext, useContext, useState } from 'react';
// const CurrentUserContext = createContext(null);
// export default function MyApp() {
//     const [currentUser, setCurrentUser] = useState(null);
//     return (
//         <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
//             <Form />
//         </CurrentUserContext.Provider>
//     );
// }
// function Form({ children }) {
//     return (
//         <Panel title="Welcome">
//             <LoginButton />
//         </Panel>
//     );
// }
// function LoginButton() {
//     const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
//     if (currentUser !== null) {
//         return <p>You logged in as {currentUser.name}.</p>;
//     }
//     return (
//         <Button onClick={() => { setCurrentUser({ name: 'Raj' }) }}>Log in as Raj</Button>
//     );
// }
// function Panel({ title, children }) {
//     return (
//         <section className="panel">
//             <h1>{title}</h1>
//             {children}
//         </section>
//     )
// }
// function Button({ children, onClick }) {
//     return (
//         <button className="button" onClick={onClick}>
//             {children}
//         </button>
//     );
// }


// import { createContext, useContext, useState } from 'react';
// const CurrentUserContext = createContext(null);
// export default function MyApp() {
//     const [currentUser, setCurrentUser] = useState(null);
//     return (
//         <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
//             <WelcomePanel />
//         </CurrentUserContext.Provider>
//     )
// }
// function WelcomePanel({ children }) {
//     const { currentUser } = useContext(CurrentUserContext);
//     return (
//         <Panel title="Welcome">
//             {currentUser !== null ? <Greeting /> : <LoginForm />}
//         </Panel>
//     );
// }
// function Greeting() {
//     const { currentUser } = useContext(CurrentUserContext);
//     return (
//         <p>You logged in as {currentUser.name}.</p>
//     )
// }
// function LoginForm() {
//     const { setCurrentUser } = useContext(CurrentUserContext);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const canLogin = firstName !== '' && lastName !== '';
//     return (
//         <>
//             <label>First name{': '}
//                 <input required value={firstName} onChange={e => setFirstName(e.target.value)} />
//             </label>
//             <label>
//                 Last name{': '}
//                 <input required value={lastName} onChange={e => setLastName(e.target.value)} />
//             </label>
//             <Button disabled={!canLogin} onClick={() => {
//                 setCurrentUser({ name: firstName + ' ' + lastName });
//             }}>Log in</Button>
//             {!canLogin && <i>Fill in both fields.</i>}
//         </>
//     );
// }
// function Panel({ title, children }) {
//     return (
//         <section>
//             <h1>{title}</h1>
//             {children}
//         </section>
//     )
// }
// function Button({ children, disabled, onClick }) {
//     return (
//         <button disabled={disabled} onClick={onClick}>
//             {children}
//         </button>
//     );
// }


import React from 'react'
export const NewContext = React.createContext();
const Context3 = ({ children }) => {
    return (
        <NewContext.Provider value={{ name: "HELLO" }}>
            {children}
        </NewContext.Provider>
    )
}
export default Context3;