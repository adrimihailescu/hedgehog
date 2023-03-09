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

  @media (min-width: ${stylesVariables.media.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${stylesVariables.color.primary};
  font-weight: bold;

  @media (min-width: ${stylesVariables.media.tablet}) {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: auto;
  display: block;
  margin-bottom: 10px;

  @media (min-width: ${stylesVariables.media.tablet}) {
    margin-right: 20px;
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 0 auto;
  color: ${stylesVariables.color.primary};

  @media (min-width: ${stylesVariables.media.tablet}) {
    margin-right: 20px;
    margin-left: 15px;
  }

  &:hover {
    box-shadow: 0px 0px 20px -2px ${stylesVariables.color.primary};
  }
`;
