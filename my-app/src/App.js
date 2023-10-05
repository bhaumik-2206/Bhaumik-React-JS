import './App.css';
// import Routing1 from './Routing/Routing1';
// function App() {
//   return (
//     <div>
//       <Routing1 />
//     </div>
//   );
// }
// export default App;



// import React from 'react'
// import MedicineMainPage from './Medicine/MedicineMainPage';
// const App = () => {
//   return (
//     <div>
//       <MedicineMainPage />
//     </div>
//   )
// }
// export default App;



// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Task1 from './Tasks.js/Task1'
// import Task2 from './Tasks.js/Task2';
// import Navbar from './Tasks.js/Navbar';
// import Task3 from './Tasks.js/Task3';
// import Task4 from './Tasks.js/Task4';
// const App = () => {
//   let country = ["India", "Delhi", "America", "New York", "Canada", "Torronto", "Ahmedabad", "Gandhinagar"]
//   let countryPair = {
//     India: "Delhi",
//     America: "New York",
//     Canada: "Torronto",
//     Ahmedabad: "Gandhinagar"
//   }
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='task1' element={<Task1 country={country} />} >
//           <Route path=':button' />
//         </Route>
//         <Route path='task2' element={<Task2 country={country} />} />
//         <Route path='task3' element={<Task3 country={country} />} />
//         <Route path='task4' element={<Task4 countryPair={countryPair} />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;


import React from 'react'
import UseMemo from './Hooks/UseMemo/UseMemo';

const App = () => {
  return (
    <div>
      <UseMemo data={1} />
    </div>
  )
}

export default App











// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import EmpListing from './EmployeeCrud/EmpListing';
// import EmpCreate from './EmployeeCrud/EmpCreate';
// import EmpDetail from './EmployeeCrud/EmpDetail';
// import EmpEdit from './EmployeeCrud/EmpEdit';
// function App() {
//   return (
//     <div className="App">
//       <h1>React JS CRUD Opertations</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<EmpListing />}></Route>
//           <Route path='/employee/create' element={<EmpCreate />}></Route>
//           <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
//           <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;