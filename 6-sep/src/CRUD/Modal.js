import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react'

export default function ModalUserForm({ show, isEditInfo, isDataFalse, checkSetTheTrueData, currentUserData, addUserInTable, handleClose, userData }) {
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        setShowPassword(false);
    }, [userData]);

    const checkUncheckPass = () => {
        setShowPassword(!showPassword)
    }

    function handleCloseInModal() {
        handleClose();
        setShowPassword(false);
    }

    return (
        <Modal show={show} onHide={handleCloseInModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isEditInfo !== -1 ? 'Edit User' : 'Add User'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" onSubmit={addUserInTable}>
                    <div className='form-group mb-3'>
                        <label htmlFor="fname">First Name:-</label>
                        <input className='form-control' value={currentUserData.fname} onChange={checkSetTheTrueData} type="text" id='fname' placeholder='Enter First Name' />
                    </div>
                    {isDataFalse.fname}
                    <div className='form-group mb-3'>
                        <label htmlFor="lname">Last Name:-</label>
                        <input className='form-control' value={currentUserData.lname} onChange={checkSetTheTrueData} type="text" id='lname' placeholder='Enter Last Name' />
                    </div>
                    {isDataFalse.lname}
                    <div className='form-group mb-3'>
                        <label htmlFor="email">Email:-</label>
                        <input className='form-control' value={currentUserData.email} onChange={checkSetTheTrueData} type="email" id='email' placeholder='Enter Email' />
                    </div>
                    {isDataFalse.email}
                    <div className='form-group mb-2'>
                        <label htmlFor="password">Password:-</label>
                        <input className='form-control mb-2' value={currentUserData.password} onChange={checkSetTheTrueData} type={showPassword ? "text" : "password"} id='password' placeholder='Enter Password' />
                        <input className="form-check-input" type="checkbox" id='shoeHidePassword' checked={showPassword} onChange={checkUncheckPass} />
                        <label className="ms-1 form-check-label" htmlFor="shoeHidePassword">{showPassword ? "Hide" : "Show"} Password</label>
                    </div>
                    {isDataFalse.password}
                    <div className='form-group mb-3'>
                        <label htmlFor="phoneNo">Mobile Number:-</label>
                        <input className='form-control' value={currentUserData.mobile} onChange={checkSetTheTrueData} type="number" id='mobile' placeholder='Enter Mobile NUmber' />
                    </div>
                    {isDataFalse.mobile}
                    <button type="submit" className='btn btn-primary m-auto d-block mt-3'>{isEditInfo !== -1 ? 'Update User' : 'Add User'}</button>
                </form>
            </Modal.Body>
        </Modal >
    )
}