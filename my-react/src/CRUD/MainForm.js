import React from 'react'
import { useNavigate, useParams } from 'react-router';

const MainForm = ({ handleSubmit, currentData, handleChange }) => {
    const { editedData } = useParams();
    const navigate = useNavigate();
    return (
        <form action="" className='w-50 m-auto bg-secondary p-4 rounded-4 my-3' onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your First Name' type="text" name='fname' value={currentData.fname} onChange={handleChange} required />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Last Name' type="text" name='lname' value={currentData.lname} onChange={handleChange} required />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Mobile' type="number" name='mobile' value={currentData.mobile} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Email' type="email" name='email' value={currentData.email} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your password' type="password" name='password' value={currentData.password} onChange={handleChange} />
            </div>
            <div className='d-flex gap-2 justify-content-center'>
                <button type='button' className='btn btn-primary fs-5 d-inline-block' onClick={() => navigate("/")}>Cancel</button>
                <button type="submit" className="btn btn-primary fs-5 d-inline-block">{editedData ? " Update User" : "Add User"}</button>
            </div>
        </form>
    )
}

export default MainForm;