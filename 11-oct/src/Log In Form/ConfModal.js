import React from 'react'
import { useNavigate } from 'react-router-dom';

const ConfirmationModal = ({ show, setShow }) => {
    const navigate = useNavigate();
    return (
        <div className={`${show ? "block" : "hidden"} bg-white border shadow-2xl text-center border-black rounded-2xl px-4 py-10 w-4/6 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4`}>
            <h2 className="text-2xl mb-5">User Does Not Exist You have to Register The Page</h2>
            <div>
                <button className='bg-blue-500 text-white my-3 rounded-lg px-4 py-2 mx-2 text-xl' onClick={() => setShow(false)}>NO</button>
                <button className='bg-blue-500 text-white my-3 rounded-lg px-4 py-2 mx-2 text-xl' onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    )
}
export default ConfirmationModal;