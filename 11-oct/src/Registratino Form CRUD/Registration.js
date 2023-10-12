import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import Form from './Form';
import FormikForm from './FormikForm';

const Registration = () => {
    // const navigate = useNavigate();
    // const { editId } = useParams();

    // useEffect(() => {
    //     if (editId) {
    //         fetch(`http://localhost:3500/registrationUser/${editId}`)
    //             .then(e => e.json())
    //             .then(data => {
    //                 formik.setValues(data);
    //             });
    //     }
    // }, []);
    
    // let formik = useFormik({
    //     initialValues: { name: "", mobileNumber: "", age: "", password: "", confirmPassword: "" },
    //     validationSchema: Yup.object({
    //         name: Yup.string().trim().min(3, "First Name have atleast 3 characters").required("Required"),
    //         mobileNumber: Yup.string().trim().min(10, "Mobile Number Have Only 10 Character").max(10, "Mobile Number Have Only 10 Character").required("Required"),
    //         age: Yup.number().min(18, "Age must be greater than 18").required("Required"),
    //         password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/, "Not A Strong Password").required("Required"),
    //         confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
    //     }),
    //     onSubmit: async (values) => {
    //         if (editId) {
    //             try {
    //                 let res = await fetch(`http://localhost:3500/registrationUser/${editId}`, {
    //                     method: 'PUT',
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify(values)
    //                 });
    //                 if (res.ok) {
    //                     navigate("/");
    //                 }
    //             } catch (error) {
    //                 console.log("ERROR: " + error)
    //             }
    //         } else {
    //             try {
    //                 let res = await fetch("http://localhost:3500/registrationUser", {
    //                     method: 'POST',
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify(values)
    //                 })
    //                 if (res.ok) {
    //                     navigate("/");
    //                 }
    //             } catch (error) {
    //                 console.log("ERROR: " + error)
    //             }

    //         }
    //     }
    // });

    return (
        <div>
            {/* <Form formik={formik} /> */}
            <FormikForm />
            
        </div >
    )
}

export default Registration;