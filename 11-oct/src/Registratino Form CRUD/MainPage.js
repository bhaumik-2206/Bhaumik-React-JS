import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import { ToastContainer } from 'react-toastify'

const MainPage = () => {
    return (
        <>
            <ToastContainer theme="dark" />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/editUser/:editId' element={<Registration />} />
            </Routes>
        </>
    )
}

export default MainPage
