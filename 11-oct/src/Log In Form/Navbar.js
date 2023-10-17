import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-gray-800 py-3'>
                <nav className='container'>
                    <ul className="nav justify-between">
                        <h1 onClick={() => navigate("/user")} className='text-3xl text-white cursor-pointer'>Home Page</h1>
                        <div className='d-flex'>
                            <li className="nav-item text-xl">
                                <NavLink to="/user/home" className="nav-link active" >Home</NavLink>
                            </li>
                            <li className="nav-item text-xl">
                                <NavLink to="/user/searchUser" className="nav-link active" >Search User</NavLink>
                            </li>
                            <li className="nav-item text-xl">
                                <NavLink to="/profile" className="nav-link" href="#">Profile</NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
