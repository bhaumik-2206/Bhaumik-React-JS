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



// import React, { useState } from 'react'
// import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/shopping/Header'
// import Products from './components/shopping/Products';
// import Questions from './components/quiz/Questions';
// import Result from './components/quiz/Result';
// import TimerQuestions from './components/quiz/TimerQuestions';
// import Input from './components/input/Input';
// import { ToastContainer } from 'react-toastify';
// import SelectQuizCount from './components/quiz/SelectQuizCount';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ShowAnswer from './components/quiz/ShowAnswer';

// const App = () => {
//   const [showQuestions, setShowQuestions] = useState(false);
//   return (
//     <div>
//       <ToastContainer
//         autoClose={2000}
//         pauseOnHover={false}
//         theme='dark'
//       />
//       {/* <Header />
//       <Products /> */}

//       {/* Quiz Application */}
//       {/* <Questions setShow={setShow} />
//       <Result show={show} setShow={setShow} /> */}

//       {/* <Input /> */}
//     </div>
//   )
// }

// export default App;




// import React from 'react'
// import TimerQuestions from './components/quiz/TimerQuestions';
// import { ToastContainer } from 'react-toastify';
// import SelectQuizCount from './components/quiz/SelectQuizCount';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ShowAnswer from './components/quiz/ShowAnswer';
// import 'react-toastify/dist/ReactToastify.css';
// const App = () => {
//   return (
//     <BrowserRouter>
//       <ToastContainer
//         autoClose={2000}
//         pauseOnHover={false}
//         theme='dark'
//       />
//       <Routes>
//         <Route path="/" element={<SelectQuizCount />} />
//         <Route path="/quiz" element={<TimerQuestions />} />
//         <Route path="/result" element={<ShowAnswer />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App


import React from 'react'
import TicTacToe from './components/ticTacToe/TicTacToe'
import WinnerModal from './components/ticTacToe/WinnerModal'

const App = () => {
  return (
    <div>
      <TicTacToe />
      <WinnerModal />
    </div>
  )
}

export default App
