import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Form from './Form'
import UserTable from './UserTable'

const MainPage = () => {
    const [userData, setUserData] = useState([]);

    useEffect(async () => {
        let a = await fetch("http://localhost:3400/userData");
        let b = a.json();
        console.log(b)
        setUserData(b);
    }, [])

    return (
        <BrowserRouter>
            <Link to="details">Add User</Link>
            <Routes>
                <Route path="/" element={<UserTable />} />
                <Route path="/details" element={<Form data={userData} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainPage
