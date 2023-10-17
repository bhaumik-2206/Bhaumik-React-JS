import dayjs from 'dayjs';
import React, { useState } from 'react'

const InputComponent = ({ type, name, props, placeholder }) => {
    const [show, setShow] = useState(false);

    // console.log(props.values);
    // console.log(props.values[name.split(".")[0]][name.split(".")[1]])
    let checkValue = name.includes(".") ? props.values[name.split(".")[0]][name.split(".")[1]] : props.values[name]
    return (
        <div className='mb-3 relative form-group'>
            <input
                className='form-control'
                value={type === "date" ? (checkValue ? dayjs(checkValue).format("YYYY-MM-DD") : "") : checkValue}
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