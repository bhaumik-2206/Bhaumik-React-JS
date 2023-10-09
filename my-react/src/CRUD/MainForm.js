import React from 'react'

const MainForm = ({ handleSubmit, currentData, handleChange }) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your First Name' type="text" name='fname' value={currentData.fname} onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
                <input className='form-control' placeholder='Enter Your Last Name' type="text" name='lname' value={currentData.lname} onChange={handleChange} />
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
            <button type="submit" className="btn btn-primary d-block m-auto">Add Medicine</button>
        </form>
    )
}

export default MainForm
