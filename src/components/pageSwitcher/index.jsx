import React, { useState } from "react";
import RegisterAndSignIn from "../registerAndSignIn";
import UsersList from "../usersList";

const PageSwitcher = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  if (isUserSignedIn) {
    return <RegisterAndSignIn setIsUserSignedIn={setIsUserSignedIn} />;
  }

  return <UsersList />;
};

export default PageSwitcher;
