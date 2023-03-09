import styled from "styled-components";
import stylesVariables from "../../../../../sharedStyles";

export const CardItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-radius: 37% 34% 86% 76% / 23% 23% 31% 0%;
  background-color: ${stylesVariables.color.primary};
  align-items: center;
  padding: 15px;
  color: ${stylesVariables.color.secondary};
  font-weight: bold;

  h3 {
    padding-bottom: 0px;
  }

  p {
    font-style: italic;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    border-radius: 50%;
  }

  button {
    border-radius: 10px;
    background-color: ${stylesVariables.color.mainColor};
    padding: 10px;
  }
`;
