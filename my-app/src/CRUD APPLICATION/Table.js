import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Table = ({ userData }) => {
    console.log(userData)
    let navigate = useNavigate();
    const handleEdit = (data) => {
        navigate("edit/" + data.id);
    }

    const handleDelete = () => {

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
                </table>) : (<h1>Data is Empty</h1>)}
        </div>
    )
}

export default Table
