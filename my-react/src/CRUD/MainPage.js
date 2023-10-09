import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrintData from './PrintData'
import Form from './Form'
import EditUser from './EditUser'

const MainPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PrintData />} />
                    <Route path="/addData" element={<Form />} />
                    <Route path='edit/:editedData' element={<EditUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage
