import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormikForm from './FormikForm';
// import Form from './Form';

const Registration = () => {
    const { editId } = useParams();
    const [currentData, setCurrentData] = useState({ name: "", mobileNumber: "", dateOfBirth: "", password: "", confirmPassword: "" })
    useEffect(() => {
        if (editId) {
            fetch(`http://localhost:3500/registrationUser/${editId}`)
                .then(e => e.json())
                .then(data => setCurrentData(data))
                .catch(error => "ERROR :" + error)
        }
    }, [editId]);


    return (
        <div>
            {/* <Form  /> */}
            <FormikForm currentData={currentData} />
        </div >
    )
}

export default Registration;