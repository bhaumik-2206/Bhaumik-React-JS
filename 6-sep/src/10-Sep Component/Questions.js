// //----if else if
// export default function Questions() {
//   const number = 30;
//   return (
//     <div>
//       {number > 0 && number <= 10 ? (
//         <p>This between 0 to 10</p>
//       ) : number > 10 && number <= 20 ? (
//         <p>This between 10 to 20</p>
//       ) : number > 20 && number <= 30 ? (
//         <p>This between 20 to 30</p>
//       ) : (
//         <p>This is more than 30</p>
//       )}
//     </div>
//   );
// }

// import React from 'react'

// export default function Questions() {
//     let a = 25;
//     function checkNumber(number){
//         if(number > 0 && number <= 10){
//             return "This between 0 to 10";
//         }else if(number > 10 && number <= 20){
//             return "This between 10 to 20"
//         }else if(number > 20 && number <= 30){
//             return "This between 20 to 30"
//         }else{
//             return "This is more than 30";
//         }
//     }
//     return (
//         <div>
//             <h1>{checkNumber(a)}</h1>
//         </div>
//     )
// }


// export default function Questions() {
//     let a = [<h1>Hello</h1>, <h1>World</h1>];
//     return (
//         <div>
//             {a.map((ele, index) => (
//                 <div key={index}>{ele}</div>
//             ))}
//         </div>
//     )
// }



// export default function Questions({ data, name, age, array }) {
//     data.greet = "HELLO WORLD";
//     array = [4, 5, 6];
//     name = "Vivek";
//     age = 50;
//     return (
//         <h1 className='text-white'>
//             {data.greet}
//             {data.array}
//             <br />
//             {name}
//             <br />
//             {age}
//             <br />
//             {array.join("-")}
//         </h1>
//     )
// }

// export default function Questions(props) {
//     props.data.greet = "HELLO WORLD";
//     props.array = [4, 5, 6];
//     // props.name = "Vivek";
//     // props.age = 50;
//     return (
//         <h1 className='text-white'>
//             {props.data.greet}
//             {props.data.array}
//             {props.age}
//         </h1>
//     )
// }

// export default function MyComponent({ children }) {
//     return (
//         <>
//         <h1>HELLO WORLD</h1>
//         {children}
//         </>
//     );
// }

// import { useState } from 'react'
// export default function Questions() {
//     const [setCount, count] = useState(0);
//     const handleClick = () => {
//         count(setCount + 1);
//     }
//     return (
//         <div>
//             {/* <input type="date" onChange={(e) => console.log(e.target.value)} /> */}
//             <h1>{setCount}</h1>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }

// import { useState } from 'react'
// export default function Questions() {
//     let [count, setCount] = useState(0);
//     const handleClick = () => {
//         console.log(count);
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }



// export default function Questions() {
//     let a = ["<div>Hello</div>", "<div>Good</div>", "<div>Morning</div>"]
//     return (
//         <div>
//             {
//                 a.map((ele,index)=>(
//                     <h1 key={index}>{ele}</h1>
//                 ))
//             }
//         </div>
//     )
// }


// export default function MyComponent({ data }) {
//     const handleChange = (e) => {
//         data(e.target.value);
//         // console.log(data);
//     }
//     return (
//         <div>
//             <input type="text" onChange={handleChange} />
//         </div>
//     );
// }

// import { useState } from 'react'
// export default function Questions() {
//     const [count, setCount] = useState(0);
//     const update = () => {
//         setCount((count) => count + 1); // update//Increment based on the previous state
//         console.log(count)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={update}>CLICK</button>
//         </div>
//     )
// }


// export default function Questions({ children }) {
//     return (
//         <>
//             <h1>HELLO WORLD</h1>
//             {children}
//         </>
//     )
// }


// function ChildComponent({data}) {
//     console.log(data)
//     data = "HELLO";
//     console.log(data)
//     return (
//         <div>
//             <p>{data}</p>

//         </div>
//     );
// }
// export default ChildComponent;

// export default function Questions({ data, name, age, array }) {
//     data.greet = "HELLO WORLD";
//     array = [4, 5, 6];
//     name = "Vivek";
//     age = 50;
//     return (
//         <h1>
//             {data.greet}
//             <br />
//             {name}
//             <br />
//             {age}
//             <br />
//         {array.join("-")}
//         </h1>
//     )
// }
// export default function Questions(props) {
//     // props.data.greet = "HELLO WORLD";
//     // props.array = [10, 20, 30, 40, 50, 60, 70];
//     // props.array[2] = 3000;
//     // props.name = "Vivek";
//     // props.age = 50;
//     return (
//         <h1>
//             {props.data.greet}
//             <br />
//             {props.name}
//             <br />
//             {props.age}
//             <br />
//             {props.array.join("-")}
//         </h1>
//     )
// }

// import { useState } from 'react'
// export default function Questions() {
//     const [a, b] = useState(0);
//     const handle = () => {
//         b(a + 1);
//     }
//     return (
//         <div>
//             <h1>{a}</h1>
//             <button onClick={handle}>onClick</button>
//         </div>
//     )
// }

// import { useState } from 'react'
// export default function App() {
//     console.log("object")
//     const [version, setVersion] = useState(0);
//     function handleReset() {
//         setVersion(version + 1);
//     }
//     return (
//         <>
//             <button onClick={handleReset}>Reset</button>
//             <Questions key={version} />
//         </>
//     );
// }
// function Questions() {
//     const [name, setFormData] = useState('Taylor');
//     return (
//         <>
//             <input
//                 value={name}
//                 onChange={e => setFormData(e.target.value)}
//             />
//             <p>Hello, {name}.</p>
//         </>
//     );
// }

// import { useState } from 'react'
// export default function Questions() {
//     const [name, setFormData] = useState([]);
//     const handleChange = (e) => {
//         setFormData((previous) => {
//             // console.log(e.target.value);
//             // return [...previous, e.target.value];
//             previous.push(e.target.value);
//             console.log(previous)
//         });
//     }
//     // console.log("object");
//     return (
//         <div>
//             {/* <h1>{name.join("-")}</h1> */}
//             <input type="text" onChange={handleChange} />
//         </div>
//     )
// }

//----//
// import React from 'react';
// export default function Questions({ propToChange }) {
//     return (
//         <div>
//             <p>Prop Value: {propToChange}</p>
//         </div>
//     );
// }


// export default function Questions() {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e.target);
//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" />
//                 <button type='button'>HELLO</button>{/*This is a normal button*/}
//                 <button>WORLD</button>{/*all button are working as submit buttonb inform*/}
//             </form>
//         </div>
//     )
// }

// import { useState } from 'react'

// export default function Questions() {
//     const [formData, setFormData] = useState({ name: "", check: false, radioCheck: null, selectOption: 'apple' });
//     console.log(formData);
//     return (
//         <div>
//             <label htmlFor="un">
//                 UncontrolledL:-
//                 <input type="text" name="" id="un" />
//             </label><br /><br />
//             <label htmlFor="con">
//                 Controlled
//                 <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} name="" id="con" />  {/*this is controlled form we sontrol form with state set state and change state in on change */}
//             </label><br /><br />
//             <label htmlFor="check">
//                 <input type="checkbox" checked={formData.check} onChange={(e) => setFormData({ ...formData, check: !formData.check })} name="" id="check" />  {/*this is controlled form we sontrol form with state set state and change state in on change */}
//                 CheckBox
//             </label><br /><br />
//             <div>
//                 <div>Select Anp Options</div>
//                 <label>
//                     <input type="radio" name="options" value="option1" checked={formData.radioCheck === 'option1'} onChange={(e) => setFormData({ ...formData, radioCheck: e.target.value })} />
//                     Option 1
//                 </label><br />
//                 <label>
//                     <input type="radio" name="options" value="option2" checked={formData.radioCheck === 'option2'} onChange={(e) => setFormData({ ...formData, radioCheck: e.target.value })} />
//                     Option 2
//                 </label><br />
//                 <label>
//                     <input type="radio" name="options" value="option3" checked={formData.radioCheck === 'option3'} onChange={(e) => setFormData({ ...formData, radioCheck: e.target.value })} />
//                     Option 3
//                 </label><br />
//             </div>
//             <label>
//                 Pick a fruit:
//                 <select name="selectedFruit" value={formData.selectOption} onChange={(e) => setFormData({ ...formData, selectOption: e.target.value })}>
//                     <option value="apple">Apple</option>
//                     <option value="banana">Banana</option>
//                     <option value="orange">Orange</option>
//                 </select>
//             </label>
//         </div >
//     )
// }

// import React, { useState, useEffect } from 'react';

// export default function Questions({ data }) {
//     // Use the useState hook with functional update
//     const [myData, setMyData] = useState("");

//     // Update myData only when data changes
//     useEffect(() => {
//         setMyData(data ? data : "");
//     }, [data]);
//     console.log(data)
//     console.log(myData)

//     return (
//         <div>
//             <h1>{data}</h1>
//             <h1>{myData}</h1>
//         </div>
//     )
// }
