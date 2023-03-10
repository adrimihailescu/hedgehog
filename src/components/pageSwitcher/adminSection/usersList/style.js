import styled from "styled-components";
import stylesVariables from "../../../../sharedStyles";

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px 20px;
`;

export const UsersListWrapper = styled.div`
  h3 {
    font-size: 24px;
    color: ${stylesVariables.color.primary};
    text-align: center;
    margin-bottom: 20px;
  }
`;
