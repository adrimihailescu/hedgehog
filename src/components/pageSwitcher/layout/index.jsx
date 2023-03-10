import React from "react";
import GlobalStyle, { LayoutWrapper, PageTitle } from "./style";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <PageTitle>Welcome to our platform!</PageTitle>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
