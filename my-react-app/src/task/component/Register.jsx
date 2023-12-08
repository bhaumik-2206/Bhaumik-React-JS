import React, { createRef, useEffect, useState } from 'react'

// Common Component
import CommonInput from './CommonInput'
import OtpComponent from './OtpComponent'
import MobileNumber from './MobileNumber'

// Styled Component
import { SubmitButton } from '../styled component/button'
import { Heading } from '../styled component/heading'
import { Div, DivPadding, MainDiv } from '../styled component/mainDiv'

// Validation 
import { MobileValidation } from './validation'

// Static Values
import VALUES from './staticValue'

import { toast } from 'react-toastify'
import { Formik } from 'formik'
import * as Yup from "yup";

const Register = ({ mobileNumber, setMobileNumber }) => {
    const [show, setShow] = useState(false);
    const [otp, setOTP] = useState(new Array(6).fill(''));
    const otpInputs = Array.from({ length: 6 }, () => createRef());
    // const navigate = useNavigate();

    useEffect(() => {
        if (String(mobileNumber).length !== 10) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalOtp = otp.join("");
        finalOtp === VALUES.otp ? toast.success(VALUES.trueOTP) : toast.error(VALUES.invalidOTP)
        setOTP(new Array(6).fill(''));
        otpInputs[0].current.focus();
    }

    const handleChangeMobileNumber = (values) => {
        setMobileNumber(values.mobileNumber);
        setShow(false);
    }

    return (
        show ?
            <MainDiv>
                <Heading>Register</Heading>
                <Formik
                    initialValues={{ mobileNumber: mobileNumber }}
                    validationSchema={
                        Yup.object({
                            mobileNumber: MobileValidation
                        })}
                    onSubmit={handleChangeMobileNumber}
                >
                    {props => (
                        <Div as="form" onSubmit={props.handleSubmit}>
                            <DivPadding>
                                <CommonInput
                                    formik={props} name="mobileNumber"
                                    type="number"
                                    label="Enter your mobile number"
                                    placeholder="Please enter your mobile number" />
                            </DivPadding>
                            <DivPadding>
                                <SubmitButton>SUBMIT</SubmitButton>
                            </DivPadding>
                        </Div>
                    )}
                </Formik>
            </MainDiv>
            :
            <MainDiv>
                <Heading>Register</Heading>
                {/*Print Mobile Number*/}
                <MobileNumber mobileNumber={mobileNumber} setShow={setShow} />
                <Div as="form" action="" onSubmit={handleSubmit}>
                    <OtpComponent otp={otp} setOTP={setOTP} otpInputs={otpInputs} />
                    <DivPadding>
                        <SubmitButton
                            disabled={otp.some(e => !e)}
                        >SUBMIT</SubmitButton>
                    </DivPadding>
                </Div>
            </MainDiv>
    )
}

export default Register;