import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ConfirmationModal = ({ show, setShow }) => {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    useEffect(() => {
        let id = localStorage.getItem("id");
        setId(id);
    }, []);

    const handleLogOutPage = async () => {
        let res = await fetch(`http://localhost:3500/registerUser?id=${id}`)
        if (res.ok) {
            console.log("Log Out Successfully");
            localStorage.removeItem("id");
            navigate("/logIn");
        }
    }

    return (
        <div className={`${show ? "block" : "hidden"} bg-white border shadow-2xl text-center border-black rounded-2xl px-4 py-10 w-4/6 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4`}>
            <h2 className="text-2xl">Are you sure you want to delete the data!!!</h2>
            <div>
                <button className='bg-blue-500 text-white py-2.5 px-5 mx-1 text-xl my-3 rounded-lg' onClick={() => setShow(false)}>NO</button>
                <button className='bg-blue-500 text-white py-2.5 px-5 mx-1 text-xl my-3 rounded-lg' onClick={handleLogOutPage}>YES</button>
            </div>
        </div>
    )
}

export default ConfirmationModal
