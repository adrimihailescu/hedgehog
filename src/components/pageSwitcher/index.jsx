import React, { useState } from "react";
import AdminSection from "./adminSection";
import RegisterAndSignIn from "./registerAndSignIn";
// import UsersList from "../pageSwitcher/adminSection/usersList/index";

const PageSwitcher = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  if (isUserSignedIn) {
    return <RegisterAndSignIn setIsUserSignedIn={setIsUserSignedIn} />;
  }

  return <AdminSection />;
};

export default PageSwitcher;
