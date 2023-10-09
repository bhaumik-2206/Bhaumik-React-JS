import React from 'react'

const UserTable = ({ data }) => {


    const handleEdit = () =>{
        
    }

    const handleDelete = () =>{

    }
    
    return (
        <>
            {data.length !== 0 ? (
                <table className='table table-hover table-dark fs-5 border-0'>
                    <thead>
                        <tr className='border'>
                            <th>Sr. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{ele.fname}</td>
                                    <td>{ele.lname}</td>
                                    <td>{ele.age}</td>
                                    <td>
                                        <button className='btn btn-primary ms-3' onClick={() => handleEdit(ele)}>EDIT</button>
                                        <button className='btn btn-primary ms-3' onClick={() => handleDelete(ele.id)}>DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>) : (<h1>Data is Empty</h1>)}
        </>
    )
}

export default UserTable
