import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='collapse navbar-collapse bg-light'>
                <ul className="navbar-nav">
                    <li className='nav-item'><NavLink className="nav-link fs-5 px-3" to="/task1">Task 1</NavLink></li>
                    <li className='nav-item'><NavLink className="nav-link fs-5 px-3" to="/task2">Task 2</NavLink></li>
                    <li className='nav-item'><NavLink className="nav-link fs-5 px-3" to="/task3">Task 3</NavLink></li>
                    <li className='nav-item'><NavLink className="nav-link fs-5 px-3" to="/task4">Task 4</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;