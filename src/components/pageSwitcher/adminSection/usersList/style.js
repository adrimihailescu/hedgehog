import styled from "styled-components";
import stylesVariables from "../../../../sharedStyles";

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px 20px;
  padding: 10px 10px;
`;

export const UsersWrapper = styled.div`
  h2 {
    font-size: 24px;
    color: ${stylesVariables.color.primary};
  }
`;
