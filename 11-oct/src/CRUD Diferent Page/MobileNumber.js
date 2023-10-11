import React from 'react'
import { useNavigate } from 'react-router-dom';

const MobileNumber = ({ state, dispatch, handleChange, currentData }) => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3500/userData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentData)
            })
            if (res.ok) {
                navigate("/");
            }
        } catch (error) {
            alert("ERROR: " + error.message)
        }
    }
    return (
        <div className={`${state.mobileNumber ? "block" : "hidden"} bg-white border shadow-2xl border-black rounded-2xl px-4 py-10 w-4/6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4`} >
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name='mobileNumber'
                    className='bg-sky-50 text-black border border-slate-950 p-1 text-lg w-1/2'
                    value={currentData.mobileNumber}
                    placeholder='Enter Your Mobile Number'
                    onChange={handleChange} required />
                <br />
                <button
                    type='button'
                    className='bg-blue-500 text-white my-3 rounded-lg'
                    onClick={() => dispatch({ goTo: "age", name: "age" })}>Previous</button>
                <button type='submit' className='bg-blue-500 text-white my-3 rounded-lg'>Submit</button>
                <button className='bg-red-700 text-white my-3 rounded-lg' type="button" onClick={() => navigate("/")}>Close</button>
            </form>
        </div >
    )
}

export default MobileNumber;