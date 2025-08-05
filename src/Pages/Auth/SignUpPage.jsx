import React from "react";
import AuthFormWrapper from "./AuthFormWrapper";
import { SignUp } from "@clerk/react-router";

const SignUpPage = () => {
  return (
    <AuthFormWrapper title="">
      {" "}
      <SignUp />{" "}
    </AuthFormWrapper>
  );
};

export default SignUpPage;
