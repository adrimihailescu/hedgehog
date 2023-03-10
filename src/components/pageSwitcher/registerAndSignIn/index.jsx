import React, { useRef, useState } from "react";
import { BASE_API } from "../../../constants/api";
import { Label, Input, Button, RegisterForm, ButtonWrapper } from "./style";

const validEmail = "eve.holt@reqres.in";
const validPassword = "pistol";
const componentTypes = {
  logIn: "LOG_IN",
  register: "REGISTER",
};

const RegisterAndSignIn = ({ setIsUserSignedIn }) => {
  const [error, setError] = useState(null);
  const [componentType, setComponentType] = useState(componentTypes.register);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleComponentType = () => {
    if (componentType === componentTypes.register) {
      return setComponentType(componentTypes.logIn);
    }
    return setComponentType(componentTypes.register);
  };

  const registerOrSignInUser = async () => {
    let callType;
    if (componentType === componentTypes.register) {
      callType = "register";
    } else {
      callType = "login";
    }

    try {
      const res = await fetch(`${BASE_API}${callType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      setError(null);
      emailRef.current.value = "";
      passwordRef.current.value = "";

      const { token } = await res.json();
      return { status: res.status, token };
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let submitError = [];

    if (emailRef.current.value !== validEmail) {
      submitError.push(`Only valid email is: ${validEmail}`);
    }

    if (passwordRef.current.value !== validPassword) {
      submitError.push(`Only valid password is: ${validPassword}`);
    }

    if (submitError?.length) {
      setError(submitError);
    } else {
      const { status, token } = await registerOrSignInUser();
      if (status === 200 && token !== null) {
        setIsUserSignedIn(true);
        // console.log(status, token);
      }
    }
  };

  return (
    <RegisterForm onSubmit={handleFormSubmit}>
      <Label>
        <span>Email</span>
        <Input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="johnDoe@email.com"
        />
      </Label>
      <Label>
        <span>Password</span>
        <Input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="*******"
        />
      </Label>
      <ButtonWrapper>
        <Button type="submit">
          {componentType === componentTypes.register ? "Register" : "Log in"}
        </Button>
        <Button type="button" onClick={() => handleComponentType()}>
          Go to
          {componentType === componentTypes.register ? " Log in" : " Register"}
        </Button>
      </ButtonWrapper>
      {error && error.map((err, index) => <p key={`err-${index}`}>{err}</p>)}
    </RegisterForm>
  );
};

export default RegisterAndSignIn;
