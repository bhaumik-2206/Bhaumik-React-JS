import React, { useState } from 'react'

const Form = ({ formik }) => {
    const [passwordShow, setPasswordShow] = useState(false)
    const [confirmPasswordShow, setConfirmPasswordShow] = useState(false)

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
                <div className='mb-3'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        name='age'
                        placeholder='Enter Your Age' />
                    {formik.touched.age && formik.errors.age && <p className='text-lg text-red-600 text-left mb-2'>{formik.errors.age}</p>}
                </div>
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

export default Form
