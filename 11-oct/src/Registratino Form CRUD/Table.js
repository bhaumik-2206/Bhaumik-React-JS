import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import { toast } from 'react-toastify';

const Table = () => {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState(-1)
    const navigate = useNavigate();

    async function getData() {
        try {
            let res = await fetch("http://localhost:3500/registrationUser");
            let result = await res.json();
            setUserData(result);
            setDeleteId(-1);
        } catch (error) {
            toast.warning("Error Fetching The Data");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id) => {
        setShow(true);
        setDeleteId(id);
    }

    return (
        <div>
            <table className='border w-screen text-xl text-center'>
                <thead>
                    <tr className='border hover:bg-sky-100'>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Mobile Number</th>
                        <th>Password</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((ele, index) => (
                        <tr className='border hover:bg-sky-50' key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.dateOfBirth}</td>
                            <td>{ele.mobileNumber}</td>
                            <td>{ele.password}</td>
                            <td>
                                <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => navigate(`/editUser/${ele.id}`)}>EDIT</button>
                                <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => handleDelete(ele.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ConfirmationModal show={show} setShow={setShow} deleteId={deleteId} getData={getData} />
        </div>
    )
}

export default Table
