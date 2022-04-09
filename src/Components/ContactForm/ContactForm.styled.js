import styled from "@emotion/styled";

export const Form = styled.form`
  width: 90%;
  color: whitesmoke;
  background: rgba(#333, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  border-radius: 12px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  margin-left: 5px;
  border: none;
  color: inherit;

  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 12px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
`;
