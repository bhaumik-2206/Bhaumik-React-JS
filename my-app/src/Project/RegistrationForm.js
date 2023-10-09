import { useFormik } from 'formik'
import React from 'react'

const RegistrationForm = () => {
    // let formik = useFormik()
    const handleSubmit = () => {

    }
    return (
        <div>
            <div className='w-5/12 bg-gray-0 m-auto text-center rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 bg-gray-100'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            type="text"
                        // id='email'
                        // name='email'
                        placeholder='Enter your Full Name'
                        // value={formik.values.email}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        />
                        {/* {formik.touched.email && formik.errors.email ? (<p className='ms-2 p-1 text-left text-red-600 text-lg'>{formik.errors.email}</p>) : (false)} */}
                    </div>
                    <div className='mb-4'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            type="email"
                        // id='email'
                        // name='email'
                        placeholder='Enter your email address'
                        // value={formik.values.email}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        />
                        {/* {formik.touched.email && formik.errors.email ? (<p className='ms-2 p-1 text-left text-red-600 text-lg'>{formik.errors.email}</p>) : (false)} */}
                    </div>
                    <div className='mb-4'>
                        <input
                            className='shadow appearance-none border-2 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                            type="text"
                        // id='password'
                        // name='password'
                        placeholder='Enter your password'
                        // value={formik.values.password}
                        // onBlur={formik.handleBlur}
                        // onChange={formik.handleChange}
                        />
                        {/* {formik.touched.password && formik.errors.password ? (<p className='ms-2 p-1 text-left text-red-600 text-lg'>{formik.errors.email}</p>) : (false)} */}
                    </div>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline text-lg' type="submit">Register</button>
                    <p className='mt-2'>Already Registered <a href="">LogIn</a></p>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm