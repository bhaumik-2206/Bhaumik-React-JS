import React from 'react'
import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import UserInfo from './UserInfo'

const MainProjectPage = () => {
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink>&emsp;
                <NavLink to="/about">About</NavLink>&emsp;
                <NavLink to="/contact">Contact</NavLink>&emsp;
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/userInfo/:userId" element={<UserInfo />} />
            </Routes>
        </>
    )
}

export default MainProjectPage
