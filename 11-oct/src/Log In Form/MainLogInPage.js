import React from 'react'
import LogIn from './LogIn'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Registration from './Registration';
import UserPage from './UserPage';
import PrivateRoute from './PrivateRoute';
import PageNotFound from './PageNotFound';
import LogInPrivateRoute from './PrivateLogInRoute';

const MainLogInPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <LogInPrivateRoute>
                        <button className='bg-sky-400 mx-auto my-4 block text-3xl px-4 py-3 rounded-lg' onClick={() => navigate("/logIn")}>Log In</button>
                    </LogInPrivateRoute>
                } />
                <Route path='logIn' element={
                    <LogInPrivateRoute>
                        <LogIn />
                    </LogInPrivateRoute>
                } />
                <Route path='register' element={
                    <LogInPrivateRoute>
                        <Registration />
                    </LogInPrivateRoute>
                } />
                <Route path='user' element={
                    <PrivateRoute>
                        <UserPage />
                    </PrivateRoute>
                } />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default MainLogInPage;