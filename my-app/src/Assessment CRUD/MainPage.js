import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Form from './Form'
import UserTable from './UserTable'
import PageNotFound from './PageNotFound'
import EditData from './EditData'

const MainPage = () => {
    const [userData, setUserData] = useState([]);
    const [isEdit, setIsEdit] = useState(-1);

    useEffect(async () => {
        getData();
    }, []);

    async function getData() {
        try {
            let a = await fetch("http://localhost:3400/userData");
            let b = await a.json();
            setUserData(b);
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

    return (
        <BrowserRouter>
            {/* <div className='py-3 text-center fs-3'>
                <Link className='btn btn-primary' to="details">Add User</Link>
            </div> */}
            <Routes>
                <Route path="/" element={<UserTable />} />
                <Route path="/details" element={<Form  />} />
                <Route path='/edit/:editedId' element={<EditData />} />
                {/* <Route path="/details" element={<Form setUserData={setUserData} getData={getData} isEdit={isEdit} setIsEdit={setIsEdit} />} /> */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainPage;