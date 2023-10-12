import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { Formik, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

const FormikForm = () => {
    const { editId } = useParams();
    const navigate = useNavigate();

    const [currentData, setCurrentData] = useState({ name: "", mobileNumber: "", age: "", password: "", confirmPassword: "" })

    useEffect(() => {
        if (editId) {
            fetch(`http://localhost:3500/registrationUser/${editId}`)
                .then(e => e.json())
                .then(data => {
                    setCurrentData(data);
                    console.log(currentData);
                });
        }
    }, []);

    return (
        <Formik
            initialValues={currentData}
            onSubmit={async (values, action) => {
                if (editId) {
                    try {
                        let res = await fetch(`http://localhost:3500/registrationUser/${editId}`, {
                            method: 'PUT',
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values)
                        });
                        if (res.ok) {
                            navigate("/");
                        }
                    } catch (error) {
                        console.log("ERROR: " + error)
                    }
                } else {
                    try {
                        let res = await fetch("http://localhost:3500/registrationUser", {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values)
                        })
                        if (res.ok) {
                            navigate("/");
                        }
                    } catch (error) {
                        console.log("ERROR: " + error)
                    }

                }
            }}
            validationSchema={Yup.object({
                name: Yup.string().trim().min(3, "First Name have atleast 3 characters").required("Required"),
                mobileNumber: Yup.string().trim().min(10, "Mobile Number Have Only 10 Character").max(10, "Mobile Number Have Only 10 Character").required("Required"),
                age: Yup.number().min(18, "Age must be greater than 18").required("Required"),
                password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/, "Not A Strong Password").required("Required"),
                confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
            })}
            enableReinitialize
        >
            {props => (
                <form action="" onSubmit={props.handleSubmit}>
                    <div>
                        <div className='mb-3'>
                            <input
                                className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                                value={props.values.name}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                type="text" name='name'
                                placeholder='Enter Your Name' />
                            {props.touched.name && props.errors.name && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.name}</p>}
                        </div>
                    </div>
                    <div className='mb-3'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            value={props.values.mobileNumber}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            type="number"
                            name='mobileNumber'
                            placeholder='Enter Your Mobile Number' />
                        {props.touched.mobileNumber && props.errors.mobileNumber && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.mobileNumber}</p>}
                    </div>
                    <div className='mb-3'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            value={props.values.age}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            type="number"
                            name='age'
                            placeholder='Enter Your Age' />
                        {props.touched.age && props.errors.age && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.age}</p>}
                    </div>
                    <div className='mb-3 relative'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            value={props.values.password}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            // type={passwordShow ? "text" : "password"}
                            type='password'
                            name='password'
                            placeholder='Enter Password' />
                        {/* {
                                    passwordShow ? (
                                        <i className="fa-solid fa-eye absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setPasswordShow(pre => !pre)}></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setPasswordShow(pre => !pre)}></i>
                                    )
                                } */}
                        {props.touched.password && props.errors.password && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.password}</p>}
                    </div>
                    <div className='mb-3 relative'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            value={props.values.confirmPassword}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            // type={confirmPasswordShow ? "text" : "password"}
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirm Password' />
                        {/* {
                                    confirmPasswordShow ? (
                                        <i className="fa-solid fa-eye absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setConfirmPasswordShow(pre => !pre)}></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setConfirmPasswordShow(pre => !pre)}></i>
                                    )
                                } */}
                        {props.touched.confirmPassword && props.errors.confirmPassword && <p className='text-lg text-red-600 text-left mb-2'>{props.errors.confirmPassword}</p>}
                    </div>
                    <button type="submit" className='bg-blue-500 text-white my-3 rounded-lg'>Registration</button>

                </form>
            )}
        </Formik>
    )
}

export default FormikForm
