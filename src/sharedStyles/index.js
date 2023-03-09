import styled from "styled-components";

const stylesVariables = {
  color: {
    primary: "#ff005a",
    mainColor: "#ADA7FF",
    secondary: "#37338c",
  },

  media: {
    bigScreen: "1250px",
    screen: "920px",
    tablet: "768px",
    mobile: "350px",
  },
};

export default stylesVariables;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: ${stylesVariables.color.primary};
  font-weight: bold;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: 100%;
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
    box-shadow: 0px 0px 20px -2px ${stylesVariables.color.primary};
  }
`;
