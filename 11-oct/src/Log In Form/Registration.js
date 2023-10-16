import { Formik } from 'formik';
import React from 'react'
import InputComponent from './InputComponent';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const validate = Yup.object({
        fullName: Yup.string().trim().min(3, "First Name have atleast 3 characters").required("Required"),
        email: Yup.string().trim().email("Invalid Email").required("Required"),
        password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*+=!])(?!.*\s).{8,}$/, "Not A Strong Password").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
    });

    const handleSubmit = async (values, action) => {
        try {
            let res = await fetch(`http://localhost:3500/registerUser`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (res.ok) {
                localStorage.setItem("email", values.email)
                navigate("/user");
            }
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }
    return (
        <Formik
            initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={handleSubmit}
            validationSchema={validate}
        >
            {props => (
                <div className='w-5/12 bg-gray-0 m-auto text-center rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 bg-gray-100'>
                    <form action="" onSubmit={props.handleSubmit}>
                        <InputComponent props={props} type="text" name="fullName" placeholder="Please Enter Your Full Name" />
                        <InputComponent props={props} type="email" name="email" placeholder="Please Enter Your Email" />
                        <InputComponent props={props} type="password" name="password" placeholder="Please Enter Your Password" />
                        {props.touched.password && props.errors.password && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.password}</p>}
                        <InputComponent props={props} type="password" name="confirmPassword" placeholder="Confirm Password" />
                        {props.touched.confirmPassword && props.errors.confirmPassword && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.confirmPassword}</p>}
                        <button className='bg-blue-500 text-white my-3 rounded-lg px-4 py-2 text-2xl' type='submit'>Register</button>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default Registration;