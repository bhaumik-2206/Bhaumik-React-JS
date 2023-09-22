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



// import MedicineData from './Medicine/medicineData';
// import React, { useState } from 'react'
// import { MakeMedicineTable, MakeRecordTable } from './Medicine/Table';
// import AddMedicineModal from './Medicine/AddMedicineModal';
// import AddRecordModal from './Medicine/AddRecordModal';

// export default function App() {
//   const [medicineData, setMedicineData] = useState(MedicineData);
//   const [medicineRecord, setMedicineRecord] = useState([]);
//   const [showAddMedicineModal, setShowAddMedicineModal] = useState(false);
//   const [showAddRecordModal, setShowAddRecordModal] = useState(false);
//   const [editInfo, setEditInfo] = useState(null);
//   const handleAddMedicineForm = () => {
//     setShowAddMedicineModal(true);
//     setEditInfo(null);
//   }
//   const handleAddRecordForm = () => {
//     setShowAddRecordModal(true);
//   }
//   return (
//     <div>
//       <div className='text-center'>
//         <button className='btn btn-primary m-3' onClick={handleAddMedicineForm}>Add Medicine</button>
//         <button className='btn btn-primary m-3' onClick={handleAddRecordForm}>Add Record</button>
//         <button className='btn btn-primary m-3' onClick={handleAddRecordForm}>Add Out Record</button>
//       </div>

//       <AddMedicineModal showAddMedicineModal={showAddMedicineModal} setShowAddMedicineModal={setShowAddMedicineModal} medicineData={medicineData} setMedicineData={setMedicineData} editInfo={editInfo} />
//       <AddRecordModal showAddRecordModal={showAddRecordModal} setShowAddRecordModal={setShowAddRecordModal} medicineData={medicineData} setMedicineData={setMedicineData} medicineRecord={medicineRecord} setMedicineRecord={setMedicineRecord} />

//       <MakeMedicineTable medicineData={medicineData} setMedicineData={setMedicineData} setShowAddMedicineModal={setShowAddMedicineModal} setEditInfo={setEditInfo} />
//       <MakeRecordTable medicineRecord={medicineRecord} />
//     </div>
//   )
// }

// import React from 'react'
// import ChildEvent from './Component/childEvent';
// export default function App() {
//   return (
//     <ChildEvent />
//   )
// }


// import MainPage from './CRUD/MainPage';
// export default function App() {
//   return (
//     <div>
//       <MainPage />
//     </div>
//   )
// }



import React from 'react'
// import UseRef from './Component/UseRef';
// import Routing from './Component/Routing';
import UseContext from './Component/useContext/UseContext';
import Contaxt1 from './Component/useContext/contaxt1';
import Context2 from './Component/useContext/context2';

export default function App() {
  return (
    <div>
      {/* <UseRef data={"HELLO"} /> */}
      {/* <Routing /> */}
      {/* <UseContext /> */}
      {/* <Contaxt1 /> */}
      <Context2 />
    </div>
  )
}


// import React, { useEffect, useState } from 'react'
// export default function App() {
//   const [count, setCount] = useState(10);
//   // const [change, setChange] = useState(0)
//   // useEffect(() => {
//   //   console.log("first");
//   // }, [count, change])


//   // useEffect(() => {
//   //   let interval = setInterval(() => {
//   //     setCount((prevCount) => {
//   //       console.log("first");
//   //       if (prevCount > 0) {
//   //         return prevCount - 1;
//   //       } else if (prevCount === 0) {
//   //         return "Now Count is 0";
//   //       } else {
//   //         clearInterval(interval);
//   //         return prevCount;
//   //       }
//   //     });
//   //   }, 500);
//   // }, []);

//   // console.log(count);
//   // useEffect(() => {
//   //   let interval = setInterval(() => {
//   //     if (count > 0) {
//   //       console.log(count)
//   //       setCount((pre) => pre - 1);
//   //     } else if (count === 0) {
//   //       setCount("Now Count is 0");
//   //     } else {
//   //       clearInterval(interval);
//   //     }
//   //   }, 1000);
//   //   return () => {
//   //     console.log("first")
//   //     clearInterval(interval)
//   //   };
//   // }, [])


//   // useEffect(() => {
//   //   if (count > 0) {
//   //     setTimeout(() => {
//   //       setCount(count - 1);
//   //     }, 500);
//   //   } else {
//   //     setCount("Now Count is 0");
//   //   }
//   // }, [count])


//   // function Myfunc() {
//   //   setCount(window.innerWidth)
//   // }
//   // useEffect(() => {
//   //   window.addEventListener('resize', Myfunc);
//   //   return () => {
//   //     window.removeEventListener('resize', Myfunc);
//   //   }
//   // }, [count])

//   return (
//     <div>
//       <h1>{count}</h1>
//       {/* <button onClick={hadleClick}>CLICK</button>
//       <button onClick={handleChange}>Change</button> */}
//     </div>
//   )
// }





// import React, { useState, useEffect } from 'react'
// export default function App() {
//   const [name, setName] = useState("")
//   const [count, setCount] = useState([]);

//   useEffect(() => {
//     console.log("Name or Count change");
//   }, [name, count])

//   useEffect(() => {
//     console.log("name change");
//   }, [name])

//   useEffect(() => {
//     console.log("count change");
//   }, [count])

//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={() => setName("A")}>A Click</button>
//       <button onClick={() => setName("B")}>B Click</button>
//       <button onClick={() => setName("C")}>C Click</button><br />
//       <h1>{count}</h1>
//       <button onClick={() => setCount(10)}>setCount</button>
//       <button onClick={() => setCount(20)}>setCount</button>
//       <button onClick={() => setCount(30)}>setCount</button>
//     </div>
//   )
// }


// import React, { useState } from 'react'
// export default function App() {
//   const [change, setChange] = useState("")
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(change);
//   }
//   const handleChange = (e) => {
//     setChange(e.target.value);
//     console.log(change)
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit} action="">
//         <input type="text" value={change} onChange={handleChange} />
//       </form>
//     </div>
//   )
// }

// let guest = 0;
// function Cup() {
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }
// export default function TeaSet() {
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   );
// }




// import React, { useState } from 'react'
// export default function App() {
//   const [count, setCount] = useState(0)
//   const handleClick = () => {
//     // setCount((preValue) => preValue + 1);
//     // setCount((preValue) => preValue + 1);
//     // setCount((preValue) => preValue + 1);
//     setCount(count + 1)
//     // console.log(setCount(count + 1));
//     // console.log(setCount(count + 1));
//     // console.log(setCount(count + 1));
//     console.log(count)
//   }
//   return (
//     <div>
//       <h1>
//         {count}
//       </h1>
//       <button onClick={handleClick}>CLICK</button>
//     </div>
//   )
// }


// import React, { useRef } from 'react';
// function UncontrolledForm() {
//   const inputRef = useRef(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current)
//     console.log(inputRef.current.value)
//     alert(`Input Value: ${inputRef.current.value}`);
//     // alert(`Input Value: ${e.target.inputName.value}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} />
//       {/* <input type="text" name="inputName" /> */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default UncontrolledForm;


// import { useState } from 'react'
// export default function App() {
//   const [count, setCount] = useState(0);
//   const [answer, setAnswer] = useState(0)
//   const handleCLick = () => {
//     setCount((a) => a + 1);
//     setAnswer((b) => b + count);
//   }
//   return (
//     <div>
//       {/* <Questions /> */}
//       <h1>{count}</h1>
//       <h1>{answer}</h1>
//       <button onClick={handleCLick}>CLICK</button>
//     </div>
//   )
// }


// import React, { useState } from 'react'
// import Questions from './10-Sep Component/Questions';
// export default function App() {
//   const [data, setData] = useState(null);
//   const handleClick = () => {
//     setData("HELLO");
//   }
//   return (
//     <div>
//       <Questions data={data} />
//       <button onClick={handleClick}>CLICK</button>
//     </div>
//   )
// }


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