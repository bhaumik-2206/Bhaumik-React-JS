import React, { useRef, useState, useEffect } from 'react'
// export default function UseRef() {

//     // const firstInput = useRef();
//     // const firstBtn = () => {
//     //     console.log(firstInput)
//     //     console.log(firstInput.current)
//     //     console.log(firstInput.current.value)
//     // }

//     // const mainUl = useRef(null);
//     // const handleClickBtn = () => {
//     //     mainUl.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     // }

//     return (
//         <div>
//             {/* <input type="text" ref={myRef} />
//             <button onClick={() => myRef.current.focus()}>Focus Input</button> */}

//             {/* <input type="text" ref={firstInput} />
//             <button onClick={firstBtn}>Change</button> */}

//             {/* <ul ref={mainUl}>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>JS</li>
//             </ul>
//             <button onClick={handleClickBtn}>Change Colour</button>
//             <About input={mainUl} /> */}
//         </div>
//     )
// }


// export default function UseRef() {
//     const questionRef = useRef(null);
//     useEffect(() => {
//         questionRef.current.innerText = "What is your base question?";
//     }, []);
//     return (
//         <div>
//             <p ref={questionRef}></p>
//         </div>
//     )
// }


// set Condition in depemdency
// export default function UseRef() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("first", count)
//         return () => {
//             console.log("Second", count)
//         }
//     }, [count == 4]);
//     const handleClick = () => {
//         setCount(pre => pre + 1);
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>Increment</button>
//         </div>
//     )
// }

// log of useRef
// export default function UseRef() {
//     const myRef = useRef();
//     console.log(myRef.current);
//     return (
//         <div>
//             <h1 ref={myRef}>HELLO WORLD</h1>
//         </div>
//     )
// }


// Check Return Function Run
// export default function UseRef() {
//     const [show, setShow] = useState(false);
//     useEffect(() => {
//         console.log("Use Effect Funciton")
//         return () => console.log("Clean Up Function")
//     }, []);
//     const handleHide = () => setShow(true);
//     const handleShow = () => setShow(false);
//     return (
//         <div>
//             <button onClick={handleHide}>Hide</button>
//             <button onClick={handleShow}>Show</button>
//             <div style={{ display: show ? "none" : "block" }}>
//                 <h1>HELLO WORLD</h1>
//             </div>
//         </div>
//     )
// }

// Push element with useRef
// export default function UseRef() {
//     const ref = useRef([]);
//     ref.current.push(1)
//     console.log(ref.current)
//     return (
//         <div></div>
//     )
// }


// export default function UseRef() {
//     const firstInputRef = useRef();
//     useEffect(() => {
//         firstInputRef.current.focus();      // This input focus immediately when the code run
//     }, []);
//     return (
//         <form>
//             <input ref={firstInputRef} />
//             <input />
//             <input />
//         </form>
//     );
// }

// export default function UseRef() {
//     const renderCount = useRef(0);
//     useEffect(() => {
//         renderCount.current += 1;
//     });
//     return <div>Component has rendered {renderCount.current} times.</div>;
// }

// export default function UseRef({ data }) {
//     const dataRef = useRef(data);
//     useEffect(() => {
//         dataRef.current = data;
//     }, [data]);
//     return <h1>{dataRef.current}</h1>;
// }

// export default function UseRef() {
//     const [count, setCount] = useState(0);
//     const prevCountRef = useRef();
//     useEffect(() => {
//         prevCountRef.current = count;
//     }, [count]);
//     return (
//         <div>
//             <p>Current Count: {count}</p>
//             <p>Previous Count: {prevCountRef.current}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }

// export default function UseRef() {
//     const inputRef = useRef();
//     const handleButtonClick = () => {
//         alert(`Input value: ${inputRef.current.value}`);
//     };
//     return (
//         <div>
//             <input ref={inputRef} type="text" />
//             <button onClick={handleButtonClick}>Get Input Value</button>
//         </div>
//     );
// }

// export default function UseRef() {
//     const countRef = useRef(0);
//     const increment = () => {
//         countRef.current += 1;
//         console.log(`Count: ${countRef.current}`);
//     }
//     return (
//         <div>
//             <p>Count: {countRef.current}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// }

// export default function UseRef() {
//     const ref = useRef(null)
//     setTimeout(() => {
//         console.log(ref.current)
//     }, 1);
//     useEffect(() => {
//         console.log(ref.current)
//     });
//     console.log(ref.current)
//     return (
//         <div>
//             <h1 ref={ref}>HELLO</h1>
//         </div>
//     )
// }

// function UseEffect() {
//     useEffect(() => {
//         console.log('run')
//         return () => console.log('clean')
//     }, []);
//     return (
//         <div></div>
//     )
// }
// export default UseEffect

// export default function UseRef() {
//     const ref = useRef({ a: 5 });
//     ref.current.a = 10;
//     console.log(ref.current)
//     return (
//         <div>
//             {/* <input type="text" ref={ref} /> */}
//         </div>
//     )
// }

// export default function UseRef() {
//     let ref = useRef(null);
//     console.log(ref);
//     ref = 10;
//     console.log(ref);   // Assignment to constant variable(if declare useRef with const else set the value of ref to 10)
//     return (
//         <div></div>
//     )
// }

export default function UseRef() {
    const myRef = useRef()
    console.log(myRef)
    return (
        <div>
            { }
        </div>
    )
}







// import React, { useRef } from 'react';
// function MyComponent() {
//     const inputRef = useRef(null);
//     const { current } = inputRef;
//     const handleChange = () => {
//         console.log(current);
//     }
//     return (
//         <div>
//             <input type="text" ref={inputRef} onChange={handleChange} />
//         </div>
//     );
// }
// export default MyComponent;