// import * as React from "react";
// import {
//     Route,
//     Link,
//     Routes,
// } from "react-router-dom";
// import LogInForm from "./LogInForm";
// import User from "./User";


// const Routing = () => {

//     // const router = createBrowserRouter([
//     //     {
//     //         path: "/",
//     //         element: (
//     //             <div>
//     //                 <h1>Hello World</h1>
//     //                 <Link to="about">About Us</Link>
//     //             </div>
//     //         ),
//     //     },
//     //     {
//     //         path: "about",
//     //         element: <h1>About</h1>,
//     //     },
//     //     // {
//     //     //     path: "login",
//     //     //     element:
//     //     //         (
//     //     //             <form action="">
//     //     //                 <input type="email" />
//     //     //                 <input type="password" />
//     //     //                 <button type="submit">LogIn</button>
//     //     //             </form>
//     //     //         ),
//     //     // },
//     // ]);
//     return (
//         <div>
//             <Link to={"/logIn"} replace>LogIn</Link>
//             <Routes>
//                 <Route path="/logIn" element={<LogInForm />} />
//                 <Route path="/user" element={<User />} />
//             </Routes>
//         </div>
//     )
// }

// export default Routing;


// import React from 'react'
// import { Route, Routes, Link } from 'react-router-dom'
// import User from './User'
// import Home from './Home'
// import About from './About'

// const Routing = () => {
//     return (
//         <>
//             <Link to="/" replace>Home</Link><br />
//             <Link to="/about">About</Link><br />
//             <Link to="users">Users</Link><br />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/users" element={<User />} />
//             </Routes>
//         </>
//     )
// }

// export default Routing



import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import LogInPrivateRoute from './LogInPrivateRoute'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<><h1>Home Page</h1><Link to={"/login"}>LogIn</Link></>} />
            <Route path="/login" element={
                <LogInPrivateRoute>
                    <LogIn />
                </LogInPrivateRoute>
            } />
            <Route path='/dashboard' element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            } />
        </Routes>
    )
}

export default Routing
