import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';


export default function AddDataModal({ show, setShow, onAddUser, userData }) {
    let falseData = { fname: false, lname: false, password: false, mobile: false };
    const [currentUserData, setCurrentUserData] = useState({ fname: "", lname: "", email: "", password: "", mobile: null })
    const [isDataTrue, setIsDataTrue] = useState(falseData)
    const handleClose = () => {
        setShow(false);
        setCurrentUserData({ fname: "", lname: "", email: "", password: "", mobile: null });
        setIsDataTrue(falseData);
    }

    const handleMobileNumberChange = (e) => {
        setCurrentUserData(preValue => ({ ...preValue, mobile: e.target.value }));
    }
    // let emailPattern =  /[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    async function addMedicineInTable(e) {
        e.preventDefault();
        // let isAlreadyInclude = userData.findIndex(ele => ele.fname.trim().toLowerCase() === currentUserData.fname.trim().toLowerCase())
        // console.log(isAlreadyInclude);
        if (currentUserData.fname.trim() === "") {
            return setIsDataTrue({ ...falseData, fname: true });
        } else {
            setIsDataTrue(falseData)
        }
        if (currentUserData.lname.trim() === "") {
            return setIsDataTrue({ ...falseData, lname: true });
        } else {
            setIsDataTrue(falseData);
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^*&+=]).{8,}$/.test(currentUserData.password)) {
            return setIsDataTrue({ ...falseData, password: true });
        } else {
            setIsDataTrue(falseData);
        }
        if (currentUserData.mobile.length > 10) {
            return setIsDataTrue({ ...falseData, mobile: true });
        } else if (currentUserData.mobile.length < 10) {
            setTimeout(() => {
                alert("Mobile Numebr have at least 10 numbers");
            }, 1);
            return;
        } else {
            setIsDataTrue(falseData);
        }
        onAddUser(currentUserData);
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={addMedicineInTable}>
                        <div className='form-group mb-3'>
                            <label htmlFor="fname">First Name:-</label>
                            <input className='form-control' value={currentUserData.fname} onChange={(e) => setCurrentUserData(preValue => ({ ...preValue, fname: e.target.value }))} type="text" id='fname' placeholder='Enter First Name' name='fname' />
                        </div>
                        {isDataTrue.fname ?
                            (<p style={{ color: 'red' }}>Please Enter First Name</p>)
                            : (false)}
                        <div className='form-group mb-3'>
                            <label htmlFor="lname">Last Name:-</label>
                            <input className='form-control' value={currentUserData.lname} onChange={(e) => setCurrentUserData(preValue => ({ ...preValue, lname: e.target.value }))} type="text" id='lname' placeholder='Enter Last Name' name='lname' required />
                        </div>
                        {isDataTrue.lname ?
                            (<p style={{ color: 'red' }}>Please Enter Last Name</p>)
                            : (false)}
                        <div className='form-group mb-3'>
                            <label htmlFor="email">Email:-</label>
                            <input className='form-control' value={currentUserData.email} onChange={(e) => setCurrentUserData(preValue => ({ ...preValue, email: e.target.value }))} type="email" id='email' placeholder='Enter Email' name='email' required />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="password">Password:-</label>
                            <input className='form-control' value={currentUserData.password} onChange={(e) => setCurrentUserData(preValue => ({ ...preValue, password: e.target.value }))} type="password" id='password' placeholder='Enter Password' name='password' required />
                        </div>
                        {isDataTrue.password ?
                            (<p style={{ color: 'red' }}>Please Enter Valid Password</p>)
                            : (false)}
                        <div className='form-group mb-3'>
                            <label htmlFor="phoneNo">Mobile Number:-</label>
                            <input className='form-control' value={currentUserData.mobile} onChange={handleMobileNumberChange} type="number" id='phoneNo' placeholder='Enter Mobile NUmber' name='phoneNo' required />
                        </div>
                        {isDataTrue.mobile ?
                            (<p style={{ color: 'red' }}>Mobile Number include 10 Number</p>)
                            : (false)}
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>Add User</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    )
}
