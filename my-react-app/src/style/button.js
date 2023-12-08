import styled from 'styled-components';
const Button1 = styled.button`
  color: ${(props) => props.variant === "outline" ? "green" : "white"};
  background-color: ${(props) => props.variant === "outline" ? "white" : "green"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  cursor: pointer;
  transition: all .5s ease;
  border-radius: 3px;
  &:hover{
    color: ${(props) => props.variant !== "outline" ? "green" : "white"};
  background-color: ${(props) => props.variant !== "outline" ? "white" : "green"};
  }
`;

const Button2 = styled(Button1)`
    background-image: linear-gradient(to right , yellow , red);
    border: none;
`

const Button3 = styled(Button1)`
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
`

const SubmitButton = styled(Button1).attrs({
    type: "submit"
})`
background-color:red
`

const Button4 = styled(Button1)`
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
`

const BUTTONS = { Button1, Button2, Button3, SubmitButton, Button4 }

export default BUTTONS;