import React, { useEffect, useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import AllModals from './AllModals'
import Table from './Table'


const MainCrudPage = () => {
    const [userData, setUserData] = useState([]);
    const [state, dispatch] = useReducer(reducer, { firstName: false, lastName: false, age: false, mobileNumber: false })
    useEffect(() => {
        getData();
    }, []);

    function reducer(state, action) {
        let defaultModal = { firstName: false, lastName: false, age: false, mobileNumber: false };
        if (action.cancel) {
            return defaultModal;
        } else if (action.type === "firstName") {
            return { ...defaultModal, "firstName": true }
        } else if (action.type === "lastName") {
            return { ...defaultModal, "lastName": true }
        } else if (action.type === "age") {
            return { ...defaultModal, "age": true }
        } else if (action.type === "mobileNumber") {
            return { ...defaultModal, "mobileNumber": true }
        } else if (action.submit) {
            getData();
            return defaultModal;
        }
    }

    function getData() {
        fetch("http://localhost:3500/userData")
            .then(e => e.json())
            .then(data => {
                setUserData(data)
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addUser' element={<AllModals />} />
            </Routes> */}

            <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => dispatch({ type: "firstName" })}>Add User</button>
            <Table userData={userData} setUserData={setUserData} />
            <AllModals state={state} dispatch={dispatch} />

            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/addUser/:field" element={<Form />} />
            </Routes> */}
        </>
    )
}

export default MainCrudPage;