import styled, { css } from "styled-components";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const MainDiv = styled.div`
    width: 33%;
`

export const Div = styled.div`
    position: relative;
`

export const DivPadding = styled.div`
    padding-block: 16px;
`

export const StyledMiddleDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ButtonDiv = styled.button`
    color: blue;
    cursor: pointer;
`

export const StyledMobileNumberDiv = styled.p`
    color: gray;
    font-size: 20px;
    font-weight: bold;
`

export const FullScreen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RedParagraph = styled.p`
    font-size: 1rem;
    color: #dc2626;
`;

const iconStyles = css`
    font-size: 1.5rem;
    position: absolute;
    right: 7px;
    top: 45px;
    cursor: pointer;
`;

export const StyledEyeIcon = styled(FaEye)`
    ${iconStyles}
`;

export const StyledEyeSlashIcon = styled(FaEyeSlash)`
    ${iconStyles}
`;