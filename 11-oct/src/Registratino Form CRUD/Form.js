import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const Form = () => {
    const [passwordShow, setPasswordShow] = useState(false)
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)
    const navigate = useNavigate();
    const { editId } = useParams();

    let formik = useFormik({
        initialValues: { name: "", mobileNumber: "", dateOfBirth: "", password: "", confirmPassword: "" },
        validationSchema: Yup.object({
            name: Yup.string().trim().min(3, "First Name have atleast 3 characters").required("Required"),
            mobileNumber: Yup.string().trim().min(10, "Mobile Number Have Only 10 Character").max(10, "Mobile Number Have Only 10 Character").required("Required"),
            dateOfBirth: Yup.date().required('Required')
                .test('is-at-least-18', 'You must be at least 18 years old', function (value) {
                    const currentDate = dayjs();
                    const dob = dayjs(value);
                    const age = currentDate.diff(dob, 'year');
                    if (age >= 18) {
                        return true;
                    }
                    return false;
                }),
            password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/, "Not A Strong Password").required("Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
        }),
        onSubmit: async (values) => {
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
                        toast.success("Data Updated Successfully!!");
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
                        toast.success("Data Added Successfully!!");
                    }
                } catch (error) {
                    console.log("ERROR: " + error)
                }
            }
        }
    });


    useEffect(() => {
        if (editId) {
            fetch(`http://localhost:3500/registrationUser/${editId}`)
                .then(e => e.json())
                .then(data => {
                    formik.setValues(data);
                });
        }
    }, [editId, formik]);

    return (
        <div className='w-3/5 bg-gray-0 m-auto text-center rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 bg-gray-300'>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text" name='name'
                        placeholder='Enter Your Name' />
                    {formik.touched.name && formik.errors.name && <p className='text-lg text-red-600 text-left mb-2'>{formik.errors.name}</p>}
                </div>
                <div className='mb-3'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        value={formik.values.mobileNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        name='mobileNumber'
                        placeholder='Enter Your Mobile Number' />
                    {formik.touched.mobileNumber && formik.errors.mobileNumber && <p className='text-lg text-red-600 text-left mb-2'>{formik.errors.mobileNumber}</p>}
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        name="dateOfBirth"
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        value={formik.values.dateOfBirth}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth && <p className='text-lg text-red-600 text-left mb-2'>{formik.errors.dateOfBirth}</p>}
                <div className='mb-3 relative'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={passwordShow ? "text" : "password"}
                        name='password'
                        placeholder='Enter Password' />
                    {
                        passwordShow ? (
                            <i className="fa-solid fa-eye absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setPasswordShow(pre => !pre)}></i>
                        ) : (
                            <i className="fa-solid fa-eye-slash absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setPasswordShow(pre => !pre)}></i>
                        )
                    }
                    {formik.touched.password && formik.errors.password && <p className='text-lg text-red-600 text-left mb-2'>{formik.errors.password}</p>}
                </div>
                <div className='mb-3 relative'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={confirmPasswordShow ? "text" : "password"}
                        name='confirmPassword'
                        placeholder='Confirm Password' />
                    {
                        confirmPasswordShow ? (
                            <i className="fa-solid fa-eye absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setConfirmPasswordShow(pre => !pre)}></i>
                        ) : (
                            <i className="fa-solid fa-eye-slash absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setConfirmPasswordShow(pre => !pre)}></i>
                        )
                    }
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className='text-lg text-red-600 text-left mb-2'>{formik.errors.confirmPassword}</p>}
                </div>
                <button type="submit" className='bg-blue-500 text-white my-3 rounded-lg'>Registration</button>
            </form>
        </div>
    )
}

export default Form;