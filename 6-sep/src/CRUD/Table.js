import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react'

export default function Table({ userData, setIsDeleteUser, setIsEditInfo, lastSaveData }) {
    dayjs.extend(relativeTime);
    const onEdit = (index) => {
        setIsEditInfo(userData[index].id);
    }

    const onDelete = (index) => {
        if (window.confirm('Are you sure you want to delete!!')) {
            setIsDeleteUser(userData[index].id);
        }
    }

    return (
        <div>
            {userData.length > 0 ? (
                <table className='table table-hover table-dark text-center fs-5'>
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile Number</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((ele, index) => (
                                <tr key={ele.id}>
                                    <td>{index + 1}</td>
                                    <td>{ele.fname}</td>
                                    <td>{ele.lname}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.password}</td>
                                    <td>{ele.mobile}</td>
                                    <td style={{ width: "20%" }}>
                                        <button className='btn btn-primary m-auto ms-3' onClick={() => onEdit(index)} >Edit</button>
                                        <button className='btn btn-primary m-auto ms-3' onClick={() => onDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            ) : (<h1>No User Exist</h1>)}
            <div className='bg-primary text-white rounded m-3 fs-5' style={{ position: "fixed", bottom: 0, right: 0 }}>
                {lastSaveData ?
                    (<div className='py-2 px-3 '>Last Data Change {lastSaveData.fromNow()}</div>)
                    : (lastSaveData)}
            </div>
        </div>
    )
}
