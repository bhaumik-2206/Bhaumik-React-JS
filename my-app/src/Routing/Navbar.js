import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="logIn">Log In</NavLink>
        </div>
    )
}

export default Navbar
