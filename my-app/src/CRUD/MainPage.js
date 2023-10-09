import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Form from './Form';
import UserData from './UserData';

const MainPage = () => {
    const [userData, setUserData] = useState([])
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(-1);
    const [search, setSearch] = useState({ searchFor: "", data: [] });

    useEffect(() => {
        if (search.searchFor.length > 0) {
            return setSearch(pre => ({ ...pre, data: userData.filter(ele => ele.fname.toLowerCase().trim().includes(search.searchFor.toLowerCase().trim())) }));
        }
        getData();
    }, [search.searchFor]);

    async function getData() {
        let res = await fetch("http://localhost:3400/userCRUD");
        let result = await res.json();
        setUserData(result);
    }

    const handleClick = () => {
        setShow(true);
    }


    return (
        <>
            <button onClick={handleClick}>Add Data</button>
            <input type="text" placeholder='Search For Any User' value={search.searchFor} onChange={(e) => setSearch({ ...search, searchFor: e.target.value })} />
            <Form show={show} setShow={setShow} getData={getData} setUserData={setUserData} isEdit={isEdit} setIsEdit={setIsEdit} />
            {/*  <BrowserRouter>
             <Link to="/addUser">Add User</Link>
             <input type="text" />
             <Routes>
                 <Route path='/addUser' element={<Form />} />
                 <Route path='/' element={<UserData data={userData} />} />
             </Routes>
            BrowserRouter> */}
            <UserData data={search.searchFor.length > 0 ? search.data : userData} getData={getData} setIsEdit={setIsEdit} setShow={setShow} />
        </>
    )
}

export default MainPage;