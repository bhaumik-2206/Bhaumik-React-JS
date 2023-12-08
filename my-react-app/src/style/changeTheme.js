import styled from "styled-components";

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    transition: all .3s ease;
    padding: 10px;
`

const Button = styled.button`
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.primary};
    font-size: 1em;
    margin: 1em 0em;
    padding: 0.25em 1em;
    cursor: pointer;
    border: 2px solid ${props => props.theme.text};
    transition: all .5s ease;
    border-radius: 3px;
`

const ChangeThemeButton = styled(Button)`
    background-color: #9A4674;
    color: white;
    border: none;
    margin: 1em;
`

const Divide = styled.div`
    background-color:${props => props.theme.text};
    height: 2px;
`

const THEME = { Screen, Button, ChangeThemeButton, Divide }

export default THEME;