// import { useState } from 'react'
// export default function UseState() {
//     const [name, setName] = useState("Raj");
//     async function changeName() {
//         await setName("Vivek");
//         console.log(name);
//         // setTimeout(() => {
//         //     console.log(name)
//         // }, 2000);
//     }
//     return (
//         <div>
//             <h3>{name}</h3>
//             <button onClick={changeName}>Click</button>
//         </div>
//     )
// }


// import { useState } from 'react';
// export default function UseState() {
//     const [user, setUser] = useState({ name: '', age: 0 });
//     const changeName = (e) => {
//         setUser({ ...user, name: e.target.value });
//     };
//     const changeAge = (e) => {
//         setUser({ ...user, age: e.target.value });
//     };
//     return (
//         <div>
//             <input type="text" placeholder="Name" onChange={changeName} />
//             <input type="number" placeholder="Age" onChange={changeAge} />
//             <p>Name: {user.name}</p>
//             <p>Age: {user.age}</p>
//         </div>
//     );
// }


// import { useState } from 'react';
// export default function DynamicForm() {
//     const [fields, setFields] = useState([{ value: '' }]);
//     const addField = () => {
//         setFields([...fields, { value: '' }]);
//     };
//     const removeField = (index) => {
//         const newFields = [...fields];
//         newFields.splice(index, 1);
//         setFields(newFields);
//     };
//     const handleInputChange = (index, e) => {
//         const newFields = [...fields];
//         newFields.value = e.target.value;
//         setFields(newFields);
//     };
//     return (
//         <div>
//             {fields.map((field, index) => (
//                 <div key={index}>
//                     <input type="text" value={field.value} onChange={(e) => handleInputChange(index, e)} />
//                     <button onClick={() => removeField(index)}>Remove</button>
//                 </div>
//             ))}
//             <button onClick={addField}>Add Field</button>
//         </div>
//     );
// }


// import { useState } from 'react';
// export default ToggleContent() {
//     const [show, setShow] = useState(false);
//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>Toggle Content</button>
//             {show && <p>This is hidden content.</p>}
//         </div>
//     );
// }


// import { useState } from 'react';
// export default function TodoApp() {
//     const [todos, setTodos] = useState([
//         { id: 1, text: 'Apple', completed: true, edited: null },
//         { id: 2, text: 'Potato', completed: false, edited: null },
//         { id: 3, text: 'Banana', completed: true, edited: null },
//         { id: 4, text: 'Tomato', completed: false, edited: null },
//     ]);
//     const handleClick = (index) => {
//         let a = [...todos];
//         a.edited = true;
//         setTodos(a);
//     }
//     const changeInInput = (index, value) => {
//         let a = [...todos];
//         a.text = value.target.value;
//         setTodos(a);
//     }
//     const changeName = (index) => {
//         let a = [...todos];
//         a.edited = null;
//         setTodos(a);
//     }
//     return (
//         <div>
//             <ul>
//                 {todos.map((todo, i) => (
//                     <li key={todo.id}>
//                         {todo.edited ?
//                             <>
//                                 <input type="text" value={todo.text} onChange={(e) => changeInInput(i, e)} />
//                                 <button onClick={() => changeName(i)}>Add</button>
//                             </> :
//                             //  <>{todo.text} - {todo.completed ? "Fruit" : "Vegetables"}&emsp;
//                             <>{todo.text}&emsp;
//                                 <button onClick={() => handleClick(i)}>ClickMe</button>
//                             </>
//                         }
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// import { useState } from 'react'
// export default function UseState() {
//     const [mainPrice, setPrice] = useState({ price: 99, quantity: 0 })
//     const increment = () => {
//         let a = { ...mainPrice };
//         a.quantity++;
//         setPrice(a);
//     }
//     const decrement = () => {
//         let a = { ...mainPrice };
//         if (a.quantity >= 1) {
//             a.quantity--;
//         } else {
//             alert("Quantity is already Zero!");
//         }
//         setPrice(a);
//     }
//     return (
//         <div>
//             <span>Price:{mainPrice.price}</span>
//             <button onClick={decrement}>Decrement</button>
//             <span>{mainPrice.quantity}</span>
//             <button onClick={increment}>Increment</button>
//             <h1>Total:{mainPrice.price * mainPrice.quantity}</h1>
//         </div >
//     )
// }


// import { useState } from 'react'
// export default function UseState() {
//     const [a, setA] = useState(0);
//     const handleClick = () => {
//         setA(a => a + 1);
//         setA(a => a + 1);
//         setA(a => a + 1);
//         setA(a => a + 1);
//         setA(a => a + 1);
//     }
//     // const handleClick = () => {
//     //     setA(a + 1);
//     //     setA(a + 1);
//     //     setA(a + 1);
//     //     setA(a + 1);
//     //     setA(a + 1);
//     // }
//     return (
//         <div>
//             <h1>{a}</h1>
//             <button onClick={handleClick}>CLICK</button>
//         </div>
//     )
// }

// import { useState } from 'react';
// export default function App() {
//     const [version, setVersion] = useState(0);
//     function handleReset() {
//         setVersion(version + 1);
//     }
//     return (
//         <>
//             <button onClick={handleReset}>Reset</button>
//             <Form key={version} />{/*When the key is change React will treat the new Form component */}
//         </>
//     );
// }
// function Form() {
//     const [name, setName] = useState('Taylor');
//     return (
//         <>
//             <input value={name} onChange={e => setName(e.target.value)} />
//             <p>Hello, {name}.</p>
//         </>
//     );
// }


// import { useState } from 'react'
// import Child from './ChildUseState'
// export default function UseState() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <Child count={count} />
//         </div>
//     )
// }


// import { useState } from 'react'
// export default function UseState() {
//     const [count, setCount] = useState(0);
//     const handleClickEvent = () => {
//         setCount(count + 1);
//         console.log(count);
//     }
//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handleClickEvent}>CLICK</button>
//         </div>
//     )
// }

// import { useState } from 'react'
// export default function Hello() {
//     const [h, setH] = useState(0);
//     function handle() {
//         setH(h + 1);
//     }
//     return (
//         <>
//             <button onClick={handle}>CLICK</button>
//             <UseState key={h} />
//         </>
//     )
// }
// function UseState() {
//     const [count, setName] = useState(0);
//     function ChangeName() {
//         setName(count + 1);
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={ChangeName}>Change Name</button>
//         </div>
//     )
// }
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* Your other content goes here */}
        </div>
    );
}

export default App;