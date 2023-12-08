import React from 'react'

// Styled Component
import { Div } from '../styled component/mainDiv';
import { Label, OTPContainer, OTPDigit } from '../styled component/input';

const OtpComponent = ({ otp, setOTP, otpInputs, setIsPassword = false }) => {

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, '');
        const newValue = value.charAt(value.length - 1);
        setOTP((prevOTP) => {
            const newOTP = [...prevOTP];
            newOTP[index] = newValue;
            if (newValue !== '' && index < otpInputs.length - 1)
                otpInputs[index + 1].current.focus();
            return newOTP;
        });
    }

    const handleBackSpace = (e, index) => {
        if (e.key === "Backspace") {
            if (index === otpInputs.length - 1 && otp[index] !== "") {
                setOTP(pre => {
                    const oldOTP = [...pre];
                    oldOTP[index] = "";
                    return oldOTP;
                })
                return;
            }
            if (index > 0) {
                otpInputs[index - 1].current.focus();
            }
        }
    }

    return (
        <Div>
            {/* For OTP */}
            <Label>Enter OTP to verify</Label>
            <OTPContainer>
                {otp.map((digit, index) => (
                    <OTPDigit
                        key={index}
                        id={`otp-${index + 1}`}
                        type="text" max={9}
                        onChange={(e) => handleChange(e, index)}
                        value={digit}
                        ref={otpInputs[index]}
                        onKeyDown={(e) => handleBackSpace(e, index)}
                    />
                ))}
            </OTPContainer>
        </Div>
    )
}

export default OtpComponent;