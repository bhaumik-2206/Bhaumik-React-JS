// import React from 'react'
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import About from './Routers/about';
// import Users from './Routers/usersPage';
// import Contact from './Routers/contact';
// import Dropdown from 'react-bootstrap/Dropdown';
// export default function Routing() {
//     return (
//         <Router>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">Navbar</Link>
//                     <div className="navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2">
//                             <li className="nav-item">
//                                 <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-dark" to="/about">About</Link>
//                             </li>
//                             <Dropdown>
//                                 <Dropdown.Toggle variant="primary" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item>
//                                         <Link className='nav-link text-dark' to="/contact">Contact</Link>
//                                     </Dropdown.Item>
//                                     <Dropdown.Item>
//                                         <Link className='nav-link text-dark' to="/usersPage">Users</Link>
//                                     </Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </ul>
//                     </div>
//                 </div>
//             </nav >
//             <Routes>
//                 <Route path='/' Component={Home} />
//                 <Route path='/usersPage' Component={Users} />
//                 <Route path='/about' Component={About} />
//                 <Route path='/contact' Component={Contact} />
//             </ Routes>
//         </Router >
//     )
// }
// function Home() {
//     return (
//         <h1>This is Home Page</h1>
//     )
// }

import React from 'react'
import Navbar from './Routers/Navbar'
import About from "./Routers/about"
import Users from "./Routers/usersPage"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import NoMatch from './Routers/NoMatch';
import Junior from './Routers/junior';
import Senior from './Routers/senior';
import Students from './Routers/Student';
import DifferentPage from './Routers/differentPage';
import UserChildComponent from './Routers/userChildComponent';
import Contact from './Routers/contact';
const Routing = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='userPages' element={<DifferentPage />} />
                <Route path='/student' element={<Students />} >
                    <Route index element={<Junior />} />
                    <Route path='junior' element={<Junior />} />
                    <Route path='senior' element={<Senior />} />
                </Route>
                {/* <Route path='user' element={<Users />} />
                <Route path='user/:userId' element={<UserChildComponent />} />
                <Route path='user/contact' element={<Contact />} /> */}
                <Route path='user' element={<Users />} >
                    <Route path=':id' element={<UserChildComponent />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </Router>
    )
}
export default Routing

function Home() {
    let navigate = useNavigate();
    return (
        <>
            <h1>This is Home Page</h1>
            <button onClick={() => navigate("/userPages")}>Confirm</button>
        </>
    )
}