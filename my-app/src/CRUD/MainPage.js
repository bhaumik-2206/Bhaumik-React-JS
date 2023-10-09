import React, { useEffect, useState } from 'react'
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Form from './Form';
import UserData from './UserData';
import SearchUser from './SearchUser';

const MainPage = () => {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(-1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let timer = setTimeout(async () => {
            let res = await fetch("http://localhost:3400/userCRUD");
            let result = await res.json();
            setUserData(result.filter(ele => ele.fname.toLowerCase().trim().includes(search.toLowerCase().trim()) || ele.lname.toLowerCase().trim().includes(search.toLowerCase().trim())));
            console.log(userData);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    async function getData() {
        let res = await fetch("http://localhost:3400/userCRUD");
        let result = await res.json();
        setUserData(result);
    }

    const handleClick = () => {
        setShow(true);
        setSearch("");
    }


    return (
        <>
            <button className='btn btn-primary d-block text-center fs-3 m-auto' onClick={handleClick}>Add Data</button>
            {/* <div className="form-group w-50 my-3 m-auto">
                <input className='form-control ' type="text" placeholder='Search For Any User' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div> */}
            <SearchUser search={search} setSearch={setSearch} />
            <Form show={show} setShow={setShow} getData={getData} isEdit={isEdit} setIsEdit={setIsEdit} setSearch={setSearch} />
            <UserData data={userData} getData={getData} setIsEdit={setIsEdit} setShow={setShow} setSearch={setSearch} />

            {/*  <BrowserRouter>
             <Link to="/addUser">Add User</Link>
             <input type="text" />
             <Routes>
                 <Route path='/addUser' element={<Form />} />
                 <Route path='/' element={<UserData data={userData} />} />
             </Routes>
            BrowserRouter> */}
        </>
    )
}

export default MainPage;