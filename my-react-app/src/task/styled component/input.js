import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.3rem;
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.375rem 1rem;
  font-size: 15px;
  border: 1px solid #d2d6dc;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const OTPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const OTPDigit = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;
  outline: none;
`;