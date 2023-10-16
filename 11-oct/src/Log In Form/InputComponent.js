import React, { useState } from 'react'

const InputComponent = ({ type, name, props, placeholder }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='mb-3 relative'>
            <input
                className='shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg'
                value={props.values[name]}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                type={type === "password" ? (show ? 'text' : 'password') : type}
                name={name}
                placeholder={placeholder} />
            {type !== "password" && props.touched[name] && props.errors[name] && <p className='text-lg text-red-600 text-left mb-2'>{props.errors[name]}</p>}
            {
                type === "password" ? (
                    show ? (<i className="fa-solid fa-eye absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setShow(pre => !pre)}></i>) : (
                        <i className="fa-solid fa-eye-slash absolute right-4 top-1 text-2xl cursor-pointer" onClick={() => setShow(pre => !pre)}></i>)
                ) : (false)
            }
        </div>
    )
}
export default InputComponent;