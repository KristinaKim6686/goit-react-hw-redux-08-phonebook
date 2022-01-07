import styled from "@emotion/styled";

export const Form = styled.form`
  font-size: inherit;
  color: inherit;
  outline: none;
  background-color: transparent;
`;

export const Label = styled.label`
  border: 1px white;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  padding: 5px 10px;
  margin-right: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  margin-left: 5px;
  border: none;
  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px white;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
`;
