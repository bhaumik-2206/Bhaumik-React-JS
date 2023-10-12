import React from 'react'
import { useNavigate } from 'react-router-dom';

const LastName = ({ state, dispatch, handleChange, currentData, setCurrentData }) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "age" })
    }
    return (
        <div className={`${state.lastName ? "block" : "hidden"} bg-white border shadow-2xl border-black rounded-2xl px-4 py-10 w-4/6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-4`}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='lastName'
                    className='bg-sky-50 text-black border border-slate-950 p-1 text-lg w-1/2'
                    value={currentData.lastName}
                    placeholder='Enter Last Name'
                    onChange={handleChange} required />
                <br />
                <button
                    type='button'
                    className='bg-blue-500 text-white my-3 rounded-lg'
                    onClick={() => dispatch({ type: "firstName" })}>Previous</button>
                <button className='bg-blue-500 text-white my-3 rounded-lg' type='submit'>Next</button>
                {/* <button className='bg-red-700 text-white my-3 rounded-lg' type="button" onClick={() => navigate("/")}>Close</button> */}
                <button className='bg-red-700 text-white my-3 rounded-lg' type="button"
                    onClick={() => {
                        dispatch({ cancel: true });
                        setCurrentData({ firstName: "", lastName: "", age: "", mobileNumber: "" })
                    }}>Close</button>            </form>
        </div>
    )
}

export default LastName
