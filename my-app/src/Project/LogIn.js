import { useFormik } from 'formik'
import React from 'react'
// import * as Yup from "yup";


const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or less';
    }

    return errors;
};

const LogIn = () => {
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        // validationSchema: Yup.object({
        //     fname: Yup.string().trim().min(4, "First Name have atleast 3 characters").required("Required"),
        //     lname: Yup.string().trim().min(4, "First Name have atleast 3 characters").required("Required"),
        //     email: Yup.string().trim().email("Invalid Email").required("Required"),
        //     password: Yup.string().trim().min(8, "Password have atleast 3 characters").required("Required"),
        // }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    console.log(formik.errors);
    return (
        <div className='w-5/12 bg-gray-0 m-auto text-center rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 bg-gray-100'>
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-4'>
                    <input
                        className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Enter your email address'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? (<p className='ms-2 p-1 text-left text-red-600 text-lg'>{formik.errors.email}</p>) : (false)}
                </div>
                <div className='mb-4'>
                    <input
                        className='shadow appearance-none border-2 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                        type="text"
                        id='password'
                        name='password'
                        placeholder='Enter your password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password ? (<p className='ms-2 p-1 text-left text-red-600 text-lg'>{formik.errors.email}</p>) : (false)}
                </div>
                <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline text-lg' type="submit">Log In</button>
                <p className='mt-2'>New User <a href="">Register</a></p>
            </form>
        </div>
    )
}

export default LogIn






// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//     fname: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     lname: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
// });

// const ValidationSchemaExample = () => (
//     <div>
//         <h1>Signup</h1>
//         <Formik
//             initialValues={{
//                 fname: '',
//                 lname: '',
//                 email: '',
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//                 console.log(values);
//             }}
//         >
//             {({ errors, touched }) => (
//                 <Form>
//                     <Field name="fname" />
//                     {errors.fname && touched.fname ? (
//                         <div className='text-danger'>{errors.fname}</div>
//                     ) : null}
//                     <Field name="lname" />
//                     {errors.lname && touched.lname ? (
//                         <div className='text-danger'>{errors.lname}</div>
//                     ) : null}
//                     <Field name="email" type="email" />
//                     {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div> : null}
//                     <button type="submit">Submit</button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );
// export default ValidationSchemaExample;