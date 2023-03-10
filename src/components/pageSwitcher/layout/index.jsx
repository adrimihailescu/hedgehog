import React from "react";
import GlobalStyle, { LayoutWrapper } from "./style";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
