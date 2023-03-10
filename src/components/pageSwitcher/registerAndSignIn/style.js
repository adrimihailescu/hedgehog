import styled from "styled-components";
import stylesVariables from "../../../sharedStyles";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${stylesVariables.color.primary};
  border-radius: 10px;
  padding: 10px;
  width: 250px;

  &:hover {
    box-shadow: 0px 0px 20px -2px ${stylesVariables.color.mainColor};
  }

  p {
    font-size: 16px;
    text-align: center;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${stylesVariables.color.secondary};
  font-weight: bold;

  span {
    align-self: start;
    padding-right: 10px;
    padding-bottom: 5px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: auto;
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 0 auto;
  color: ${stylesVariables.color.primary};

  &:hover {
    box-shadow: 0px 0px 20px -2px ${stylesVariables.color.secondary};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;
