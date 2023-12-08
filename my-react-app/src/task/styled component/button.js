import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid #007BFF;
  width: 100%;
  color: #fff;
  background-color: #007BFF;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
`;

export const SubmitButton = styled(Button).attrs({
    type: "submit"
})``