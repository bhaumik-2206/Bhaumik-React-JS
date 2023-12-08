import React, { useState } from 'react'

// Styled Component
import { Input, Label } from '../styled component/input'
import { Div, RedParagraph, StyledEyeIcon, StyledEyeSlashIcon } from '../styled component/mainDiv';

const CommonInput = ({ formik, name, type, label, placeholder }) => {
    const [show, setShow] = useState(false);

    return (
        <Div>
            <Label>{label}</Label>
            <Input
                value={formik.values[name] ? formik.values[name] : ""}
                type={type === "password" ? (show ? 'text' : 'password') : type}
                name={name}
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                placeholder={placeholder} />
            {formik.touched[name] && formik.errors[name] &&
                (
                    <RedParagraph >{formik.errors[name]}</RedParagraph>
                )
            }
            {type === "password" &&
                (show ? (
                    <StyledEyeIcon onClick={() => setShow(pre => !pre)} />
                ) : (
                    <StyledEyeSlashIcon onClick={() => setShow(pre => !pre)} />
                ))
            }
        </Div>
    )
}

export default CommonInput;