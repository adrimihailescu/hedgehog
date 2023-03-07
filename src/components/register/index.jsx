import React from "react";
import { Label, RegisterForm, Input, Button } from "./style";

const Register = () => {
  return (
    <RegisterForm>
      <Label>
        Name
        <Input type="text" />
      </Label>
      <Label>
        Password
        <Input type="text" />
      </Label>
      <Button type="submit">Register</Button>
    </RegisterForm>
  );
};

export default Register;
