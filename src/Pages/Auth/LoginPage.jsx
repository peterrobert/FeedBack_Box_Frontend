import React from "react";
import AuthFormWrapper from "./AuthFormWrapper";
import { SignIn } from "@clerk/react-router";

const LoginPage = () => {
  return (
    <AuthFormWrapper title="">
      <SignIn />
    </AuthFormWrapper>
  );
};

export default LoginPage;
