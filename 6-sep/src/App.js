import './App.css';
// import Hello from './Component/Hello'    // Add functional components
// import Welcome from './Component/class'  // Add Class components
import MyNavbar from './Component/navbar'   // Navbar component
import MyFooter from './Component/myFooter' // Footer component
// import Styling from './Component/styling'
// import Props from './Component/props'
// import Jsx from './Component/jsx'
// import dayjs from "day.js";

// import Hooks from './Component/hooks'
// import Event from './Component/event'
import MyForm from './Component/Form-Submit';
import ToDoList from './Component/To-Do-List';
function App() {
  // console.log(b)
  return (
    <div>
      <MyNavbar />
      <h1>HELLO WORLD</h1>
      <ToDoList/>
      <MyForm />
      {/* <Styling /> */}
      {/* <Jsx /> */}
      {/* <Props title="React Js" array={[1, 2, 3, 4, 5]} name={{ name: "Raj" }} /> */}
      {/* <Props /> */}
      {/* <Hello /> */}
      {/* <Welcome /> */}
      {/* <Hooks /> */}
      {/* <Event /> */}
      <MyFooter />
    </div>
  );
}
export default App;



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
