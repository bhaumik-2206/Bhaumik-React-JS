import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function AddDataModal({ userData, show, setShow, onAddUser, isEditInfo, setIsEditInfo }) {
    let falseData = { fname: "", lname: "", password: "", mobile: "" };
    const [currentUserData, setCurrentUserData] = useState({ fname: "", lname: "", email: "", password: "", mobile: "" })
    const [isDataFalse, setIsDataFalse] = useState(falseData);

    useEffect(() => {
        if (isEditInfo !== -1) {
            let editedData = userData.find(ele => ele.id === isEditInfo);
            setCurrentUserData(editedData);
        }
    }, [isEditInfo])


    const handleClose = () => {
        setShow(false);
        setIsEditInfo(-1);
        setCurrentUserData({ fname: "", lname: "", email: "", password: "", mobile: "" });
        setIsDataFalse(falseData);
    }

    const checkSetFirstName = (e) => {
        setCurrentUserData(preValue => ({ ...preValue, fname: e.target.value }));
        if (e.target.value.trim().length === 0) {
            setIsDataFalse({ ...isDataFalse, fname: "" });
        } else if (e.target.value.trim().length < 3) {
            setIsDataFalse({ ...isDataFalse, fname: <p style={{ color: 'red' }}>First Name Have At least 3 letter</p> });
        } else {
            setIsDataFalse({ ...isDataFalse, fname: "" });
        }
    }

    const checkSetLastName = (e) => {
        setCurrentUserData(preValue => ({ ...preValue, lname: e.target.value }));
        if (e.target.value.trim().length < 3) {
            setIsDataFalse({ ...isDataFalse, lname: <p style={{ color: 'red' }}>Last Name Have At least 3 letter</p> });
        } else {
            setIsDataFalse({ ...isDataFalse, lname: "" });
        }
    }

    const checkSetPassword = (e) => {
        setCurrentUserData(preValue => ({ ...preValue, password: e.target.value }));
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^*&+=_-]).{8,}$/.test(e.target.value)) {
            setIsDataFalse({ ...isDataFalse, password: <p style={{ color: 'red' }}>Please Include atleast one lowercase,uppercase,number,special character</p> });
        } else {
            setIsDataFalse({ ...isDataFalse, password: "" });
        }
    }

    const checkSetMobileNumber = (e) => {
        setCurrentUserData(preValue => ({ ...preValue, mobile: e.target.value }));
        if (e.target.value.length < 10 || e.target.value.length > 10) {
            setIsDataFalse({ ...isDataFalse, mobile: <p style={{ color: 'red' }}>Mobile Number Have Atleast 10 number</p> });
        } else {
            setIsDataFalse({ ...isDataFalse, mobile: "" });
        }
    }
    // console.log(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test("example@gmail.com"));
    function addMedicineInTable(e) {
        e.preventDefault();
        if (currentUserData.lname.trim() === "") {
            setIsDataFalse(preValue => ({ ...preValue, lname: <p style={{ color: 'red' }}>Field Required</p> }));
        }
        if (currentUserData.fname.trim() === "") {
            setIsDataFalse(preValue => ({ ...preValue, fname: <p style={{ color: 'red' }}>Field Required</p> }));
        }
        if (currentUserData.password.trim() === "") {
            setIsDataFalse(preValue => ({ ...preValue, password: <p style={{ color: 'red' }}>Field Required</p> }));
        }
        if (currentUserData.mobile.trim() === "") {
            setIsDataFalse(preValue => ({ ...preValue, mobile: <p style={{ color: 'red' }}>Field Required</p> }));
        }
        if (!isDataFalse.fname && !isDataFalse.lname && !isDataFalse.password && !isDataFalse.mobile && currentUserData.fname && currentUserData.lname && currentUserData.password && currentUserData.mobile) {
            onAddUser(currentUserData);
            handleClose();
        }
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
                            <input className='form-control' value={currentUserData.fname} onChange={checkSetFirstName} type="text" id='fname' placeholder='Enter First Name' name='fname' />
                        </div>
                        {isDataFalse.fname}
                        <div className='form-group mb-3'>
                            <label htmlFor="lname">Last Name:-</label>
                            <input className='form-control' value={currentUserData.lname} onChange={checkSetLastName} type="text" id='lname' placeholder='Enter Last Name' name='lname' />
                        </div>
                        {isDataFalse.lname}
                        <div className='form-group mb-3'>
                            <label htmlFor="email">Email:-</label>
                            <input className='form-control' value={currentUserData.email} onChange={(e) => setCurrentUserData(preValue => ({ ...preValue, email: e.target.value }))} type="email" id='email' placeholder='Enter Email' name='email' />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="password">Password:-</label>
                            <input className='form-control' value={currentUserData.password} onChange={checkSetPassword} type="password" id='password' placeholder='Enter Password' name='password' />
                        </div>
                        {isDataFalse.password}
                        <div className='form-group mb-3'>
                            <label htmlFor="phoneNo">Mobile Number:-</label>
                            <input className='form-control' value={currentUserData.mobile} onChange={checkSetMobileNumber} type="number" id='phoneNo' placeholder='Enter Mobile NUmber' name='phoneNo' />
                        </div>
                        {isDataFalse.mobile}
                        <button type="submit" className='btn btn-primary m-auto d-block mt-3'>Add User</button>
                    </form>
                </Modal.Body>
            </Modal >
        </div>
    )
}
