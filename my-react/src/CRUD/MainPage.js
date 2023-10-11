import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrintData from './PrintData';
import Form from './Form';
import EditUser from './EditUser';
import PageNotFound from './PageNotFound';


const MainPage = () => {
    return (
        <Routes>
            <Route path='/' element={<PrintData />} />
            <Route path="addData" element={<Form />} />
            <Route path='edit/:editedData' element={<EditUser />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}
export default MainPage;