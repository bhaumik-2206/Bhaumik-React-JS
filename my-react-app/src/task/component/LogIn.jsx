import React, { createRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Common Component
import OtpComponent from './OtpComponent'
import MobileNumber from './MobileNumber'
import CommonInput from './CommonInput'

// Static Values
import VALUES from './staticValue'

// Styled Component
import { SubmitButton } from '../styled component/button'
import { Heading } from '../styled component/heading'
import { ButtonDiv, Div, DivPadding, MainDiv, StyledMiddleDiv } from '../styled component/mainDiv'
import { MobileValidation, PasswordValidation } from './validation'

import { toast } from 'react-toastify'
import { Formik } from 'formik'
import * as Yup from "yup";

const LogIn = ({ mobileNumber, setMobileNumber }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [isPassword, setIsPassword] = useState(true);
    const [otp, setOTP] = useState(new Array(6).fill(''));
    const otpInputs = Array.from({ length: 6 }, () => createRef());

    const handleSubmit = (values) => {
        if (show) {
            if (isPassword) {
                values.password === VALUES.password ?
                    toast.success(VALUES.success) : toast.error(VALUES.error)
            } else {
                const finalOtp = otp.join("");
                finalOtp === VALUES.otp ? toast.success(VALUES.trueOTP) : toast.error(VALUES.invalidOTP)
                setOTP(new Array(6).fill(''));
                otpInputs[0].current.focus();
            }
        } else {
            setMobileNumber(values.mobileNumber);
            if (values.mobileNumber === VALUES.mobile) {
                setShow(true);
                setIsPassword(true);
            } else {
                navigate("/register")
            }
        }
    }

    return (
        <MainDiv>
            {!show && <Heading>Welcome</Heading>}
            {!isPassword && show && <Heading>Log In</Heading>}
            <Formik
                initialValues={show ? (isPassword ? { password: "" } : {}) : { mobileNumber: mobileNumber }}
                onSubmit={handleSubmit}
                validationSchema={
                    !show ? Yup.object({ mobileNumber: MobileValidation }) :
                        (isPassword && Yup.object({ password: PasswordValidation }))
                }
                enableReinitialize
            >
                {
                    props => (
                        <Div as="form" action="" onSubmit={props.handleSubmit}>
                            {!show &&
                                <CommonInput formik={props} name="mobileNumber" type="number" label="Enter your mobile number" placeholder="Please enter your mobile number" />
                            }
                            {show &&
                                <>
                                    {/* Print Mobile Number */}
                                    <MobileNumber mobileNumber={mobileNumber} setShow={setShow} />
                                    {isPassword ? <>
                                        {/* For Password */}
                                        <Div>
                                            <CommonInput formik={props} name="password" type="password" label="password" placeholder="Enter password" />
                                        </Div>
                                        <DivPadding>
                                            <StyledMiddleDiv>
                                                <ButtonDiv type="button" onClick={() => setIsPassword(false)}>Or login via otp</ButtonDiv>
                                                <ButtonDiv type="button">Forgot Password?</ButtonDiv>
                                            </StyledMiddleDiv>
                                        </DivPadding>
                                    </> :
                                        <>
                                            <OtpComponent otp={otp} setOTP={setOTP} otpInputs={otpInputs} setIsPassword={setIsPassword} />
                                            <ButtonDiv
                                                type='button'
                                                onClick={() => {
                                                    setIsPassword && setIsPassword(true);
                                                    setOTP(new Array(6).fill(''));
                                                }} >Login via password</ButtonDiv>
                                        </>
                                    }
                                </>
                            }
                            <DivPadding>
                                <SubmitButton
                                    disabled={!isPassword && show && otp.some(e => !e)}
                                >{show ? "SUBMIT" : "NEXT "}</SubmitButton>
                            </DivPadding>
                        </Div>
                    )
                }
            </Formik>
        </MainDiv>
    )
}

export default LogIn;