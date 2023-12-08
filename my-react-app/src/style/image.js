import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
`

const AnimatedSpin = styled.img`
border-radius: 50%;

    height: 150px;
    width: 150px;
    object-fit: cover;
    animation: ${rotate} infinite 10s linear;
`
const SPinEmoji = styled.div`
padding-block: 30px;
display: inline-block;
font-size: 50px;
    animation: ${rotate} infinite 10s linear;
`

const ImageRotate = { AnimatedSpin, SPinEmoji };

export default ImageRotate;