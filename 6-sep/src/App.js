// import MakeTable from './10-Sep Component/Table';
// import mainArray from "./10-Sep Component/MainArray"
import './App.css';
// import Hello from './Component/Hello'    // Add functional components
// import Welcome from './Component/class'  // Add Class components
// import MyNavbar from './Component/navbar'   // Navbar component
// import MyFooter from './Component/myFooter' // Footer component
// import Styling from './Component/styling'
// import Props from './Component/props'
// import Jsx from './Component/jsx'
// import dayjs from "day.js";

// import Hooks from './Component/hooks'
// import Event from './Component/event'
// import MyForm from './Component/Form-Submit';
// import ToDoList from './Component/To-Do-List';

// import Example from './10-Sep Component/Example';
// import UseState from './10-Sep Component/UseState';
// function App() {
//   // console.log(b)
//   return (
//     <div>
//       {/* <MyNavbar /> */}
//       <h1>Hello React JS</h1>
//       {/* <Example /> */}
//       {/* <UseState /> */}
//       {/* <ToDoList/> */}
//       {/* <MyForm /> */}
//       {/* <Styling /> */}
//       {/* <Jsx /> */}
//       {/* <Props title="React Js" array={[1, 2, 3, 4, 5]} name={{ name: "Raj" }} /> */}
//       {/* <Props /> */}
//       {/* <Hello /> */}
//       {/* <Welcome /> */}
//       {/* <Hooks /> */}
//       {/* <Event /> */}
//       {/* <MyFooter /> */}
//     </div>
//   );
// }
// export default App;

// import AddMedicineForm from './10-Sep Component/Module';
// import allData from './10-Sep Component/MainArray';
// import React, { useState } from 'react';
// import Table from "./10-Sep Component/Table"

// export default function App() {
//   const [mainArray, setMainArray] = useState(allData);
//   const [show, setShow] = useState(false);
//   const [editInfo, setEditInfo] = useState({})


//   const receiveDataFromParent = (data) => {
//     setMainArray(data);
//   };
//   const handleShow = () => {
//     setShow(true)
//     setEditInfo({});
//   }

//   // const setEditMedicine = (data) => {
//   //   setIsEdit(data);
//   //   console.log(isEdit);
//   // };
//   return (
//     <div>
//       {/* <Module data={mainArray} sendDataToGrandParent={receiveDataFromParent} sendEditedData={isEdit} />
//       <Table tableData={mainArray} sendDataToParent={receiveDataFromParent} isClickEdiButton={setEditMedicine} /> */}
//       {/* add button */}
//       <Button variant="primary" onClick={handleShow}>Add Medicine</Button>

//       <AddMedicineForm show={show} editInfo={editInfo} setShow={setShow} data={mainArray} sendDataToGrandParent={receiveDataFromParent} />
//       <Table tableData={mainArray} sendDataToParent={receiveDataFromParent} setEditInfo={setEditInfo} setShow={setShow} />
//     </div >
//   );
// }

//----//
// import React, { useState } from 'react';
// import Questions from './10-Sep Component/Questions';
// export default function App() {
//   const [propValue, setPropValue] = useState('Initial Value');
//   const handleChangeProp = () => {
//     setPropValue('New Value');
//   };
//   return (
//     <div>
//       <button onClick={handleChangeProp}>Change Prop</button>
//       <Questions propToChange={propValue} />
//     </div>
//   );
// }


// import Questions from './10-Sep Component/Questions';
// import { useState } from 'react';
// export default function App() {
//   // const [name, setName] = useState("");

//   return (
//     <>
//       {/* <Questions >
//        <div style={{ color: "white" }}>
//          <h1>HELLO WORLDDDDD</h1>
//        </div>
//      </Questions>
//      <Questions data={{ greet: "H" }} name="Raj" age={20} array={[10, 20, 30]} /> */}
//       {/* <Questions /> */}
//       {/* <button onClick={Questions}>Call Questions Function</button> */}
//       {/* {Questions()}
//       <button onClick={handleClick}>CLICk</button> */}
//       {/* <h1>{name}</h1>
//       <Questions data={setName} /> */}

//       {/* <Questions>
//         <h3>This is New Div</h3>
//       </Questions> */}

//       {/* <Questions data='Hello from Parent' /> */}

//       {/* <Questions data={{ greet: "H" }} name="Raj" age={20} array={[10, 20, 30]} /> */}

//       <Questions />

//     </>
//   );
// }







// import React from 'react';
// import Child from './Component/props'
// class App extends React.Component {

//   state = {
//     name: "",
//   }

//   // Callback function to handle data received from the
//   //child component
//   handleCallback = (childData) => {
//     // Update the name in the component's state
//     this.setState({ name: childData })
//   }

//   render() {
//     const { name } = this.state;
//     return (
//       <div>
//         <Child parentCallback={this.handleCallback} />
//         {name}
//       </div>
//     )
//   }
// }
// function App() {

//   // state = {
//   //   name: "",
//   // }
//   // handleCallback = (childData) => {
//   //   // Update the name in the component's state
//   //   setState({ name: childData })
//   // }
//   // const { name } = state;
//   return (
//     <div>
//       {/* <Child parentCallback={handleCallback} /> */}
//       {/* {name} */}
//       <Child />
//     </div>
//   )
// }
// export default App


// import ChildComponent from './Component/props';
// function MainComponent() {
//   const getData = (data) => {
//     console.log(data);
//     return data;
//   };
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent sendDataToParent={getData} />
//     </div>
//   );
// }
// export default MainComponent;


import Button from 'react-bootstrap/Button';
import MedicineData from './Medicine/medicineData';
import React, { useState } from 'react'
import Table from './Medicine/Table';
import AddMedicineModal from './Medicine/AddMedicineModal';

export default function App() {
  const [medicineData, setMedicineData] = useState(MedicineData);
  const [show, setShow] = useState(false);
  const [editInfo, setEditInfo] = useState(-1)
  const handleShow = () => {
    setShow(true);
    setEditInfo(-1);
  }
  return (
    <div>
      <Button onClick={handleShow} variant="primary">Add Medicine</Button>
      <AddMedicineModal show={show} setShow={setShow} medicineData={medicineData} setMedicineData={setMedicineData} editInfo={editInfo} />
      <Table medicineData={medicineData} setMedicineData={setMedicineData} setShow={setShow} setEditInfo={setEditInfo} />
    </div>
  )
}









// import Button from 'react-bootstrap/Button';
// import AddMedicineForm from './10-Sep Component/Module';
// import allData from './10-Sep Component/MainArray';
// import React, { useState } from 'react';
// import Table from "./10-Sep Component/Table"

// export default function App() {
//   const [mainArray, setMainArray] = useState(allData);
//   const [show, setShow] = useState(false);
//   const [editInfo, setEditInfo] = useState({})


//   const receiveDataFromParent = (data) => {
//     setMainArray(data);
//   };
//   const handleShow = () => {
//     setShow(true)
//     setEditInfo({});
//   }
//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>Add Medicine</Button>

//       <AddMedicineForm show={show} editInfo={editInfo} setShow={setShow} data={mainArray} sendDataToGrandParent={receiveDataFromParent} />
//       <Table tableData={mainArray} sendDataToParent={receiveDataFromParent} setEditInfo={setEditInfo} setShow={setShow} />
//     </div >
//   );
// }