import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import InputComponent from '../InputComponent';
import { Formik } from 'formik';

const ModalEducationDetails = ({ show, setShow, userData, setUserData }) => {
    const [educationDetails, setEducationDetails] = useState({ branch: "", percentage: "", degree: "", college: "", ending: "", joining: "" })

    useEffect(() => {
        setEducationDetails(pre => ({ ...pre, ...userData.education }))
    }, [userData])


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

    return (
        <Modal dialogClassName="modal-100w" show={show} onHide={() => setShow(false)} aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header className='bg-gray-400' closeButton>
                <Modal.Title>Update Your Data</Modal.Title>
            </Modal.Header>
            <Modal.Footer className='bg-gray-400'>
                <Formik
                    initialValues={{ ...userData, education: educationDetails }}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {props => (
                        <form action="" className='w-100' onSubmit={props.handleSubmit}>
                            <InputComponent type="text" name="education.branch" props={props} placeholder='Enter Branch Name' />
                            <InputComponent type="number" name="education.percentage" props={props} placeholder='Enter CGPA / Percentage' />
                            <InputComponent type="text" name="education.degree" props={props} placeholder='Enter Your Degree' />
                            <InputComponent type="text" name="education.college" props={props} placeholder='Enter College / School Name' />
                            <InputComponent type="date" name="education.ending" props={props} placeholder='Enter Ending Date' />
                            <InputComponent type="date" name="education.joining" props={props} placeholder='Enter Ending Date' />

                            <button type="button" className='bg-red-500 text-lg text-white rounded-lg py-2 px-3 mx-2 ' onClick={() => setShow(false)}>Close</button>
                            <button type="submit" className='bg-sky-500 text-lg text-white rounded-lg py-2 px-3 mx-2 '>Update</button>
                        </form>
                    )}
                </Formik >
            </Modal.Footer >
        </Modal >
    )
}

export default ModalEducationDetails