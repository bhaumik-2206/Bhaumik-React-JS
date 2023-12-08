import React from 'react'
// Styled Component
import { ButtonDiv, Div, DivPadding, StyledMiddleDiv, StyledMobileNumberDiv } from '../styled component/mainDiv'

const MobileNumber = ({ mobileNumber, setShow }) => {
    return (
        <DivPadding>
            <StyledMiddleDiv>
                <Div as="p">Mobile Number</Div>
                <ButtonDiv type='button' onClick={() => setShow(pre => !pre)}>Change</ButtonDiv>
            </StyledMiddleDiv>
            <StyledMobileNumberDiv>{mobileNumber}</StyledMobileNumberDiv>
        </DivPadding>
    )
}

export default MobileNumber;