import React, { useRef, useState } from "react";
import { Label, RegisterForm, Input, Button } from "./style";

const validEmail = "eve.holt@reqres.in";
const validPassword = "pistol";
const componentTypes = {
  logIn: "LOG_IN",
  register: "REGISTER",
};

const Register = () => {
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

  const registerUser = async () => {
    try {
      const res = await fetch("https://reqres.in/api/register", {
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

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async () => {
    try {
      const res = await fetch("https://reqres.in/api/login", {
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

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let submitError = "";

    if (emailRef.current.value !== validEmail) {
      submitError = `Only valid email is: ${validEmail} | `;
    }

    if (passwordRef.current.value !== validPassword) {
      submitError += ` Only valid password is: ${validPassword}.`;
    }

    if (submitError?.length) {
      setError(submitError);
    } else {
      let userData;
      if (componentType === componentTypes.register) {
        userData = await registerUser();
      } else {
        userData = await signInUser();
      }

      console.log(userData);
    }
  };

  return (
    <>
      <RegisterForm onSubmit={handleFormSubmit}>
        <Label>
          Email
          <Input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="johnDoe@email.com"
          />
        </Label>
        <Label>
          Password
          <Input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="*******"
          />
        </Label>
        <Button type="submit">
          {componentType === componentTypes.register ? "Register" : "Log in"}
        </Button>
        {error && <p>{error}</p>}
      </RegisterForm>
      <Button onClick={() => handleComponentType()}>
        Go to
        {componentType === componentTypes.register ? " Log in" : " Register"}
      </Button>
    </>
  );
};

export default Register;
