import styled from "styled-components";
import stylesVariables from "../../../../sharedStyles";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  h3 {
    color: ${stylesVariables.color.primary};
    font-size: 24px;
  }

  p {
    color: red;
  }
`;
