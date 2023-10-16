import React from 'react'
import * as Yup from "yup";
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import InputComponent from './InputComponent';

const FormikForm = ({ currentData }) => {
    const { editId } = useParams();
    const navigate = useNavigate();

    let validate =
        Yup.object({
            name: Yup.string().trim().min(3, "First Name have atleast 3 characters").required("Required"),
            mobileNumber: Yup.string().trim().min(10, "Mobile Number Have Only 10 Character").max(10, "Mobile Number Have Only 10 Character").required("Required"),
            dateOfBirth: Yup.date().required('Required').test('is-at-least-18', 'You must be at least 18 years old',
                (value) => dayjs().diff(dayjs(value), 'year') >= 18 ? true : false),
                password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*+=!])(?!.*\s).{8,}$/, "Not A Strong Password").required("Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
        })

    const handleSubmit = async (values, action) => {
        // console.log(action)
        // console.log(values)
        try {
            let url = editId ? `http://localhost:3500/registrationUser/${editId}` : `http://localhost:3500/registrationUser`
            let res = await fetch(url, {
                method: editId ? 'PUT' : 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
            });
            if (res.ok) {
                navigate("/");
                toast.success(`${editId ? "Data Updated Successfully" : "Data Added Successfully"}`);
            }
        } catch (error) {
            toast.warning(`${editId ? "Error In Updating Data" : "Error In Adding User"}`);
        }
    }

    return (
        <div className='w-3/5 bg-gray-0 m-auto text-center rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 bg-gray-300'>
            <Formik
                initialValues={currentData}
                onSubmit={handleSubmit}
                validationSchema={validate}
                enableReinitialize>
                {props => (
                    <form action="" onSubmit={props.handleSubmit}>
                        <InputComponent props={props} name="name" type="text" placeholder="Enter Your Name" />
                        <InputComponent props={props} name="mobileNumber" type="text" placeholder="Enter Your Mobile Number" />
                        <InputComponent props={props} name="dateOfBirth" type="date" />
                        <InputComponent props={props} name="password" type="password" placeholder="Password" />
                        <InputComponent props={props} name="confirmPassword" type="password" placeholder="Confirm Password" />
                        <div className='flex justify-between'>
                            <button type="submit" className='bg-blue-500 text-white my-3 rounded-lg'>{editId ? "Update" : "Registration"}</button>
                            <button type="button" className='bg-red-500 text-white my-3 rounded-lg' onClick={() => navigate("/")}>Cancel</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div >
    )
}

export default FormikForm;