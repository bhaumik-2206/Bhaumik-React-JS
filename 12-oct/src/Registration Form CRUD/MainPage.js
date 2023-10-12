import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import RegistrationPage from './RegistrationPage';

const MainPage = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
    )
}

export default MainPage;