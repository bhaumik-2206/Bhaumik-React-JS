// Use the Property of the element with the heklp props.
// Access all the attribute of an elemnent in the object named props.
// function Properties(props) {
//     console.log(props)
//     return <h2>Name:-{props.name} <br />Surname:-{props.surName}</h2>
// }
// export default Properties;


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


import PropTypes from 'prop-types'
export default function AddPropTypes(props) {
    return (
        <div>
            <span>{props.title}</span>&emsp;
            <span>{props.array.join("-")}</span>&emsp;
            <span>{props.name.name}</span>&emsp;
        </div>
    )
}
AddPropTypes.propTypes = {
    title: PropTypes.string.isRequired,        //  we can add .isRequired to required the props
    array: PropTypes.array.isRequired,
    name: PropTypes.object.isRequired,
}
AddPropTypes.defaultProps = {
    title: "Hello",
    array: [6, 7, 8, 9, 10],
    name: { name: "Vivek" },
}