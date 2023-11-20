// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import AddUser from './components/crud/AddUser';
// import Table from './components/crud/Table';
// import Math from './components/math/Math';
// import AddTodo from './components/todo/AddTodo';
// import Todos from './components/todo/Todos';
// import { useState } from 'react';

// function App() {
//   const [isEditData, setIsEditData] = useState(-1)
//   return (
//     <>
//       {/* Todo List */}
//       {/* <AddTodo />
//           <Todos /> */}


//       {/* Increment Decrement  */}
//       {/* <Math /> */}


//       {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Table />} />
//           <Route path='/addUser' element={<AddUser />} />
//           <Route path='/editUser/:userId' element={<AddUser />} />
//         </Routes>
//       </BrowserRouter> */}

//       <AddUser isEditData={isEditData} setIsEditData={setIsEditData} />
//       <Table setIsEditData={setIsEditData} />
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react'
import Header from './components/shopping/Header'
import Products from './components/shopping/Products';
import Questions from './components/quiz/Questions';
import Result from './components/quiz/Result';
import TimerQuestions from './components/quiz/TimerQuestions';

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {/* <Header />
      <Products /> */}

      {/* <Questions setShow={setShow} /> */}
      <TimerQuestions />
      {/* <Result show={show} setShow={setShow} /> */}
    </div>
  )
}

export default App;