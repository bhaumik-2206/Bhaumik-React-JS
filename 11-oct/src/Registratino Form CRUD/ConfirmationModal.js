import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ConfirmationModal = ({ show, setShow, deleteId, getData }) => {
    const [deleteUser, setDeleteUser] = useState(false);
    const handleDelete = async () => {
        if (deleteId !== -1) {
            try {
                let res = await fetch(`http://localhost:3500/registrationUser/${deleteId}`, {
                    method: 'DELETE',
                });
                if (res.ok) {
                    setShow(false);
                    getData();
                    toast.warning("Data Deleted Successfully");
                    setDeleteUser(false);
                }
            } catch (error) {
                toast.error("Error to Delete The Data");
            }
        }
    }
    return (
        <div className={`${show ? "block" : "hidden"} bg-white border shadow-2xl text-center border-black rounded-2xl px-4 py-10 w-4/6 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4`}>
            <h2 className="text-2xl mb-5">Are you sure you want to delete the data!!!</h2>
            <div>
                <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => setShow(false)}>NO</button>
                <button className='bg-blue-500 text-white my-3 rounded-lg'
                    onClick={() => {
                        if (!deleteUser) {
                            handleDelete();
                            setDeleteUser(true);
                        }
                    }
                    }>DELETE</button>
            </div>
        </div >
    )
}

export default ConfirmationModal;