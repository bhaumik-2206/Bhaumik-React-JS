import { Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import ConfirmationModal from './ConfModal';
import InputComponent from './InputComponent';

const LogIn = () => {
    const [show, setShow] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const navigate = useNavigate();
    const validate = Yup.object({
        email: Yup.string().trim().email("Invalid Email").required("Required"),
        password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*+=!])(?!.*\s).{8,}$/, "Not A Strong Password").required("Required"),
    });

    const handleSubmit = async (values, action) => {
        try {
            // let res = await fetch(`http://localhost:3500/registerUser?email=${values.email}&password=${values.password}`)
            let res = await fetch(`http://localhost:3500/registerUser?email=${values.email}`)
            if (res.ok) {
                let result = await res.json();
                if (result.length > 0) {
                    if (result[0].password === values.password) {
                        // console.log("Log In Successfully");
                        localStorage.setItem("email", values.email);
                        navigate("/user");
                    } else {
                        setPasswordCheck(true);
                    }
                } else {
                    setShow(true);
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
                            {passwordCheck ? <p className='ms-2 p-1 text-left text-red-600 text-lg'>Incorrect Password</p> : props.touched.password && props.errors.password && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.password}</p>}
                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full focus:outline-none focus:shadow-outline text-lg' type="submit">Log In</button>
                            <p className='mt-2'>New User <Link className='hover:text-red-700 underline' to="/register" href="">Register</Link></p>
                        </form>
                    </div>
                )}
            </Formik>
            <ConfirmationModal show={show} setShow={setShow} />
        </>
    )
}
export default LogIn;