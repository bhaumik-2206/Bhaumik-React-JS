import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrintData from './PrintData'
import Form from './Form'

const MainPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PrintData />}></Route>
                    <Route path="addData" element={<Form />} />
                    {/* <Route path='/employee/create' element={<EmpCreate />}></Route>
                    <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
                    <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage
