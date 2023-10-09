import React, { useState } from 'react'
import ConfirmationModal from './ConfirmationModal';

const UserData = ({ data, getData, setIsEdit, setShow, setSearch }) => {

    const [conformationModal, setConformationModal] = useState(false);
    const [confId, setConfId] = useState(-1);

    const handleDelete = async (id) => {
        setConformationModal(true);
        setConfId(id);
        // if (window.confirm('Are you sure you want to delete!!!')) {
        //     try {
        //         let res = await fetch(`http://localhost:3400/userCRUD/${id}`)
        //         if (res.ok) {
        //             let a = await fetch(`http://localhost:3400/userCRUD/${id}`, {
        //                 method: 'DELETE',
        //                 headers: {
        //                     "content-type": 'application/json'
        //                 }
        //             });
        //         }
        //     } catch (error) {
        //         console.log("ERROR: " + error);
        //     }
        //     getData();
        // }
    }

    const operationFunc = async () => {
        await fetch(`http://localhost:3400/userCRUD/${confId}`, {
            method: 'DELETE',
            headers: {
                "content-type": 'application/json'
            }
        });
        getData();
        setSearch("");
    }

    const handleEdit = async (data) => {
        try {
            let res = await fetch(`http://localhost:3400/userCRUD/${data.id}`)
            if (res.ok) {
                setShow(true);
                setIsEdit(data);
            }
        } catch (error) {
            console.log("ERROR: " + error);
        }
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
            <ConfirmationModal setConformationModal={setConformationModal} conformationModal={conformationModal} operation={operationFunc} confId={confId} />
        </>
    )
}

export default UserData;