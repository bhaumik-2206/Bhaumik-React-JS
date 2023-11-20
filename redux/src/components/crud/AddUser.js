import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, updateUser } from '../../feature/crud/crud';
import * as Yup from "yup"

const AddUser = ({ isEditData, setIsEditData }) => {
    const dispatch = useDispatch();
    const [currentUserData, setCurrentUserData] = useState({ fname: "", lname: "", age: "" })

    useEffect(() => {
        if (isEditData !== -1) {
            fetch(`http://localhost:3400/data/${isEditData}`)
                .then(res => res.json())
                .then(data => setCurrentUserData(data))
        }
    }, [isEditData])


    const handleSubmit = async (values, actions) => {
        let url = isEditData ? `http://localhost:3400/data/${isEditData}` : "http://localhost:3400/data"
        try {
            let response = await fetch(url, {
                method: isEditData ? "PATCH" : 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
            if (response.ok) {
                dispatch(isEditData ? updateUser({ isEditData, values }) : addUser(values));
                setCurrentUserData({ fname: "", lname: "", age: "" })
                setIsEditData(-1);
            }
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }
    return (
        <Formik
            initialValues={currentUserData}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                fname: Yup.string().required('First Name is required'),
                lname: Yup.string().required('Last Name is required'),
                age: Yup.string().required('Age is required'),
            })}
            enableReinitialize
        >
            {props => (
                <form onSubmit={props.handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-xl">
                    <div className="mb-4">
                        <label htmlFor="fname" className="block text-gray-700 text-sm font-bold mb-2">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            onChange={props.handleChange}
                            onFocus={props.handleBlur}
                            value={props.values.fname}
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {props.touched.fname && props.errors.fname && (
                            <p className="text-md text-red-600">{props.errors.fname}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            onChange={props.handleChange}
                            onFocus={props.handleBlur}
                            value={props.values.lname}
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {props.touched.lname && props.errors.lname && (
                            <p className="text-md text-red-600">{props.errors.lname}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
                            Age:
                        </label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            onChange={props.handleChange}
                            onFocus={props.handleBlur}
                            value={props.values.age}
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {props.touched.age && props.errors.age && (
                            <p className="text-md text-red-600">{props.errors.age}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {isEditData ? "Edit User" : "Add User"}
                    </button>
                </form>

            )}
        </Formik>
    )
}

export default AddUser
