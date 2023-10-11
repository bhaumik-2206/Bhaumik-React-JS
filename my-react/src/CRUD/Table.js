import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from './ConfirmationModal';

const Table = ({ userData, setUserData, search }) => {
    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState(-1);
    let navigate = useNavigate();
    const handleEdit = (data) => {
        navigate(`edit/${data.id}`);
    }

    async function getData() {
        let res = await fetch("http://localhost:3401/userData");
        let result = await res.json();
        setUserData(result);
    }

    const handleDelete = async (id) => {
        setShow(true);
        setDeleteId(id);
    }

    return (
        <div>
            {userData.length !== 0 ? (
                <table className='table table-hover table-dark fs-5 border-0'>
                    <thead>
                        <tr className='border'>
                            <th>Sr. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((ele, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.fname}</td>
                                <td>{ele.lname}</td>
                                <td>{ele.mobile}</td>
                                <td>{ele.email}</td>
                                <td>{ele.password}</td>
                                <td>
                                    <button className='btn btn-primary ms-3' onClick={() => handleEdit(ele)}>EDIT</button>
                                    <button className='btn btn-primary ms-3' onClick={() => handleDelete(ele.id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>) : (<h1>{search !== "" ? "Data Not Found" : "Data is Empty"}</h1>)}
            <ConfirmationModal show={show} setShow={setShow} deleteId={deleteId} getData={getData} />
        </div>
    )
}

export default Table
