import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import InputComponent from '../InputComponent';
import { Formik } from 'formik';

const ModalProfileEdit = ({ show, setShow, userData, setUserData }) => {
    const [profileValue, setProfileValue] = useState({ fullName: "", email: "", dateOfBirth: "", mobileNumber: "", gender: "", bloodGroup: "" })
    useEffect(() => {
        setProfileValue(pre => ({ ...pre, ...userData }))
    }, [userData]);


    const handleSubmit = async (values, action) => {
        try {
            let res = await fetch(`http://localhost:3500/registerUser/${userData.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            if (res.ok) {
                let a = await fetch(`http://localhost:3500/registerUser/${userData.id}`);
                let b = await a.json();
                console.log(b);
                setUserData(b);
                setShow(false);
            }
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

    const selectOptions = [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'B+', value: 'B+' },
        { label: 'O', value: 'O' },
        { label: 'O+', value: 'O+' },
    ];

    return (
        <Modal dialogClassName="modal-100w" show={show} onHide={() => setShow(false)} aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header className='bg-gray-400' closeButton>
                <Modal.Title>Update Your Data</Modal.Title>
            </Modal.Header>
            <Modal.Footer className='bg-gray-400'>
                <Formik
                    initialValues={profileValue}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {props => (
                        <form action="" className='w-100' onSubmit={props.handleSubmit}>
                            <InputComponent type="text" name="fullName" props={props} placeholder='Please Enter Your Full Name' />
                            <InputComponent type="email" name="email" props={props} placeholder='Please Enter Your Email' />
                            <InputComponent type="date" name="dateOfBirth" props={props} />
                            <InputComponent type="number" name="mobileNumber" props={props} placeholder="Enter Your Mobile Number" />
                            <div className='form-check'>
                                <label className='text-xl'>Select Gender:</label>
                                <div>
                                    <input className='form-check-input'
                                        type='radio' id='male'
                                        name='gender' value='male'
                                        checked={props.values.gender === 'male'}
                                        onChange={props.handleChange}
                                    />
                                    <label htmlFor='male'>Male</label>
                                </div>
                                <div>
                                    <input className='form-check-input'
                                        type='radio' id='female' name='gender'
                                        value='female'
                                        checked={props.values.gender === 'female'}
                                        onChange={props.handleChange}
                                    />
                                    <label htmlFor='female'>Female</label>
                                </div>
                            </div>
                            <div className='mb-3 relative'>
                                <label className='text-2xl' htmlFor="bloodGroup">Select an option:</label>
                                <select
                                    name="bloodGroup" className="form-control"
                                    value={props.values.bloodGroup}
                                    onChange={props.handleChange}
                                >
                                    <option value="" label="Select an option" />
                                    {selectOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button type="button" className='bg-red-500 text-lg text-white rounded-lg py-2 px-3 mx-2 ' onClick={() => setShow(false)}>Close</button>
                            <button type="submit" className='bg-sky-500 text-lg text-white rounded-lg py-2 px-3 mx-2 '>Update</button>
                        </form>
                    )}
                </Formik >
            </Modal.Footer >
        </Modal >
    )
}

export default ModalProfileEdit
