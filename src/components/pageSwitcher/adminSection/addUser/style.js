import styled from "styled-components";
import stylesVariables from "../../../../sharedStyles";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h2 {
    color: ${stylesVariables.color.primary};
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    color: red;
    margin-top: 10px;
  }
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: ${stylesVariables.media.tablet}) {
    display: flex;
    flex-direction: row;
    align-self: center;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${stylesVariables.color.primary};
  font-weight: bold;

  span {
    align-self: start;
    padding-right: 10px;
    padding-bottom: 5px;
  }

  @media (min-width: ${stylesVariables.media.tablet}) {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    margin-bottom: 0;

    span {
      align-self: center;
      padding-right: 10px;
      padding-bottom: 0;
    }
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: auto;
  display: block;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 0 auto;
  color: ${stylesVariables.color.primary};

  &:hover {
    box-shadow: 0px 0px 14px -2px ${stylesVariables.color.primary};
  }
`;
