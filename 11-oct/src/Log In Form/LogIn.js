import { Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import InputComponent from './InputComponent';

const LogIn = () => {
    const [passwordCheck, setPasswordCheck] = useState(false);
    const navigate = useNavigate();
    const validate = Yup.object({
        email: Yup.string().trim().email("Invalid Email").required("Required"),
    });

    const handleSubmit = async (values, action) => {
        try {
            let res = await fetch(`http://localhost:3500/registerUser?email=${values.email}&password=${values.password}`)
            // let res = await fetch(`http://localhost:3500/registerUser?email=${values.email}`)
            if (res.ok) {
                let result = await res.json();
                if (result.length > 0) {
                    localStorage.setItem("id", result[0].id);
                    navigate("/user");
                } else {
                    setPasswordCheck(true);
                }
            }
        } catch (error) {
            console.log("ERROR")
        }
    }

    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validate}
            >
                {props => (
                    <div className='w-5/12 bg-gray-0 m-auto text-center rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 bg-gray-100'>
                        <form onSubmit={props.handleSubmit}>
                            <InputComponent props={props} type="email" name="email" placeholder="Enter Email" />
                            <InputComponent props={props} type="password" name="password" placeholder="Enter Password" />
                            <button className='bg-blue-500 text-white my-3 rounded-lg px-4 py-2 text-2xl' type="submit">Log In</button>
                            {passwordCheck ? <p className='ms-2 p-1 text-left text-red-600 text-lg'>Sorry Your password is incorrect , Please double check the password</p> : (false)}
                            <p className='mt-2'>New User <Link className='hover:text-red-700 underline' to="/register" href="">Register</Link></p>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    )
}
export default LogIn;