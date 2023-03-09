import styled from "styled-components";
import stylesVariables from "../../../../sharedStyles";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  h2 {
    color: ${stylesVariables.color.primary};
    font-size: 24px;
  }

  p {
    color: red;
    margin-top: 10px;
  }
`;
