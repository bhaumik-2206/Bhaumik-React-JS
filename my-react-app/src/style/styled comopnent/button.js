import styled from "styled-components";

const Button = styled.button`
    display: block;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 1px rgba(0, 0, 0, 0.1);
    margin-block: 5px;
    font-weight: 600;
    margin-inline: auto;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    background-color: ${props => props.color || "black"};
    color:white;
`

const BUTTONS = { Button };

export default BUTTONS