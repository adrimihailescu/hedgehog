import React, { useState } from "react";
import RegisterAndSignIn from "../registerAndSignIn";

const PageSwitcher = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  if (!isUserSignedIn) {
    return <RegisterAndSignIn setIsUserSignedIn={setIsUserSignedIn} />;
  }

  return <div>Layout page</div>;
};

export default PageSwitcher;
