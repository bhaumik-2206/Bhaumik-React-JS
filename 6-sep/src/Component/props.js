// Use the Property of the element with the heklp props.
// Access all the attribute of an elemnent in the object named props.
// function Properties(props) {
//     console.log(props)
//     return <h2>Name:-{props.name} <br />Surname:-{props.surName}</h2>
// }
// export default Properties;

import { useState } from "react";
import { useEffect } from "react";


// import React from 'react';
// function ChildComponent({ sendDataToParent }) {
//     const dataToSend = "This Is Child Component Data";
//     const handleButtonClick = () => {
//         sendDataToParent(dataToSend);
//     };

//     return (
//         <div>
//             <h2>Child Component</h2>
//             <button onClick={handleButtonClick}>Send Data to Parent</button>
//         </div>
//     );
// }
// export default ChildComponent;

// // Function props
// import ChildComponent from './propschild';
// function ParentComponent() {
//     const handleButtonClick = () => {
//         console.log("HELLO I'M CLICKED");
//     };

//     return <ChildComponent onClick={handleButtonClick} />;
// }
// export default ParentComponent;

// function ParentComponent() {
//     const showText = true;
//     return <ChildComponent showText={showText} />;
// }
// export default ParentComponent;


// function ParentComponent() {
//     const person = {
//         name: 'Alice',
//         age: 30,
//     };
//     return <ChildComponent person={person} />;
// }
// export default ParentComponent;


// function ParentComponent() {
//     const numbers = [1, 2, 3, 4, 5];
//     return <ChildComponent numbers={numbers} />;
// }
// export default ParentComponent;




//---------Transfeer Data to child to parent component
// import { useState } from 'react';
// import Child from './propschild';
// function ParentComponent() {
//     const [dataFromChild, setData] = useState('');
//     const handleDataFromChild = (data) => {
//         setData(data);
//     };
//     return (
//         <div>
//             <p>Data from Child: {dataFromChild}</p>
//             <Child sendDataToParent={handleDataFromChild} />
//         </div>
//     );
// }
// export default ParentComponent;


// import PropTypes from 'prop-types'
// export default function AddPropTypes(props) {
//     return (
//         <div>
//             <span>{props.title}</span>&emsp;
//             <span>{props.array.join("-")}</span>&emsp;
//             <span>{props.name.name}</span>&emsp;
//         </div>
//     )
// }
// AddPropTypes.propTypes = {
//     title: PropTypes.string.isRequired,        //  we can add .isRequired to required the props
//     array: PropTypes.array.isRequired,
//     name: PropTypes.object.isRequired,
// }
// AddPropTypes.defaultProps = {
//     title: "Hello",
//     array: [6, 7, 8, 9, 10],
//     name: { name: "Vivek" },
// }


// import React, { useEffect } from 'react';
// import { useState } from 'react'
// export default function Props({ propsRef }) {
//     // const [change, setChange] = useState(null)
//     useEffect(() => {
//         //     setChange(propsRef.current.value);
//         //     console.log(change);
//         console.log(propsRef)
//     });
//     return (
//         <div>
//             {/* <div>{propsRef.current.value}</div> */}
//         </div>
//     )
// }


// import React, { useRef } from 'react';
// function Props({ onChildDataChange }) {
//     const childRef = useRef();
//     const handleChange = () => {
//         const childData = childRef.current.value;
//         onChildDataChange(childData);
//     };
//     return (
//         <div>
//             <input ref={childRef} type="text" onChange={handleChange} />
//         </div>
//     );
// }
// export default Props;

// function Props({ dataFromParent }) {
//     const handleClick = () => {
//         if (dataFromParent.current) {
//             dataFromParent.current.focus();
//         }
//     };
//     return (
//         <>
//             <button onClick={handleClick}>Focus on Input</button>
//         </>
//     );
// }
// export default Props;

// import React, { useRef } from 'react';
// export default function Props({ inputValueRef }) {
//     return (
//         <div>
//             <p>Child Component:</p>
//             <p>Input Value: {inputValueRef.current}</p>
//         </div>
//     );
// }

// function ChildComponent({ childRef }) {
//     // useEffect(() => {
//     //     console.log('Data in Child:', childRef.current);
//     // });
//     return (
//         <div>
//             <h2>Child Component</h2>
//             <div>Data in Child: {childRef.current}</div>
//         </div>
//     );
// }
// export default ChildComponent;