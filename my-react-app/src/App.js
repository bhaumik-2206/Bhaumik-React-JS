import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Route
import LogIn from './task/component/LogIn'
import Register from './task/component/Register'

// Notification
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Styled component
import { FullScreen } from './task/styled component/mainDiv';

const App = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <BrowserRouter>
      <ToastContainer
        pauseOnHover={false}
        draggable={true}
        autoClose={2000}
      />
      <FullScreen>
        <Routes>
          <Route index element={
            <LogIn mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />
          } />

          <Route path='/login' element={
            <LogIn mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />
          } />

          <Route path='/register' element={
            <Register mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />
          } />

        </Routes>
      </FullScreen>
    </BrowserRouter>
  )
}
export default App;



// import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import './App.css';
// import BUTTONS from './style/button';
// import ImageRotate from './style/image';
// import StyledComponent from './style/css';
// import Children from './component/Children';

// const theme = {
//   dark: {
//     primary: "black",
//     text: "white"
//   }, light: {
//     primary: "white",
//     text: "black"
//   }
// }

// const GlobalStyles = createGlobalStyle`
//   button{
//     font-family: cursive;
//   }
// `

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <Children />
//       <div>
//         <h1>HELLO WORLD</h1>
//         <BUTTONS.Button1>Styled Component Button</BUTTONS.Button1>
//         <BUTTONS.Button1 variant="outline">Button Variant</BUTTONS.Button1>
//         <BUTTONS.Button2>Change Color</BUTTONS.Button2>
//         <BUTTONS.Button3>Theme Color</BUTTONS.Button3>
//         <BUTTONS.SubmitButton>Submit Button</BUTTONS.SubmitButton>
//         <br />
//         <ImageRotate.AnimatedSpin src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' />
//         <br />
//         <ImageRotate.SPinEmoji>🤏😎</ImageRotate.SPinEmoji>
//         <br />
//         <StyledComponent>Using CSS property in styled component</StyledComponent>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;



// import React from 'react'
// import BUTTONS from './style/styled comopnent/button'
// import { MyHeading } from './style/styled comopnent/element'
// import styled from 'styled-components';


// const App = () => {
//   return (
//     <div className='text-center'>
//       <BUTTONS.Button>HELLO WORLD</BUTTONS.Button>
//       <BUTTONS.Button color="red">HELLO WORLD</BUTTONS.Button>
//       <BUTTONS.Button color="blue">HELLO WORLD</BUTTONS.Button>
//       <BUTTONS.Button color="green">HELLO WORLD</BUTTONS.Button>

//       <MyHeading>HELLO WORLD</MyHeading>
//       <MyHeading as="div">HELLO WORLD</MyHeading>
//     </div>
//   )
// }

// export default App;


// import React, { useState } from 'react'
// import { ThemeProvider } from 'styled-components'
// import THEME from './style/changeTheme';
// import NewThemeComponent from './component/NewThemeComponent';

// const myTheme = {
//   dark: {
//     primary: "rgb(32, 32, 32)",
//     text: "white"
//   }, light: {
//     primary: "white",
//     text: "black"
//   }
// }
// const App = () => {
//   const [theme, setTheme] = useState(false);
//   return (
//     <ThemeProvider theme={theme ? myTheme.dark : myTheme.light}>
//       <THEME.Screen>
//         <div>
//           <div className='flex justify-between'>
//             <div></div>
//             <h1 className='text-3xl text-center font-bold py-5'>
//               {theme ? "Dark Theme" : "Light Theme"}
//             </h1>
//             <THEME.ChangeThemeButton onClick={() => setTheme(pre => !pre)}>
//               {!theme ? "Dark" : "Light"}
//             </THEME.ChangeThemeButton>
//           </div>  
//           <h1>Heading</h1>
//           <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, deserunt vitae corrupti iusto sunt id ea architecto, qui voluptate pariatur quasi. Excepturi eos tenetur sequi recusandae debitis corrupti eligendi ipsa?</p>
//           <THEME.Divide />
//           <NewThemeComponent />
//           <THEME.Button>Button</THEME.Button>
//         </div>
//       </THEME.Screen>
//     </ThemeProvider>
//   )
// }

// export default App;


