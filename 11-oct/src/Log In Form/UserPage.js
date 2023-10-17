import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const UserPage = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default UserPage;