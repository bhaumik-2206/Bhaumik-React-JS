import React from 'react'

const PrintTable = ({ handleDelete, userData, field }) => {
    return (
        <table className='border w-screen text-xl text-center'>
            <thead>
                <tr className='border hover:bg-sky-100'>
                    <th>Sr. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Mobile Number</th>
                    {/* {field.map((ele, index) => (
                        <th>{ele}</th>
                    ))} */}
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((ele, index) => (
                    <tr className='border hover:bg-sky-50' key={index}>
                        <td>{index + 1}</td>
                        <td>{ele.firstName}</td>
                        <td>{ele.lastName}</td>
                        <td>{ele.age}</td>
                        <td>{ele.mobileNumber}</td>
                        {/* {field.map((field, index) => (
                            <td>{ele[field]}</td>
                        ))} */}
                        <td>
                            <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => handleDelete(ele.id)}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PrintTable
