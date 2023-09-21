import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from './Routers/about';
import Users from './Routers/usersPage';
import Contact from './Routers/contact';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Routing() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/about">About</Link>
                            </li>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link className='nav-link text-dark' to="/contact">Contact</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link className='nav-link text-dark' to="/usersPage">Users</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </nav >
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/usersPage' Component={Users} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
            </ Routes>
            {/* //     <Switch>
        //         <Route path="/">
        //             <Home />
        //         </Route>
        //         <Route path="/">
        //             <Users />
        //         </Route>
        //         <Route path="/">
        //             <About />
        //         </Route>
        //     </Switch> */}
        </Router >
    )
}
function Home() {
    return (
        <h1>This is Home Page</h1>
    )
}