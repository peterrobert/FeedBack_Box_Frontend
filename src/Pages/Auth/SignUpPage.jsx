import AuthFormWrapper from "./AuthFormWrapper";
import { SignUp } from "@clerk/react-router";
import AuthFallBack from "./AuthFallBack";

const SignUpPage = () => {
  return (
    <AuthFormWrapper title="">
      {" "}
      <SignUp fallback={<AuthFallBack />} signInUrl="/auth/login" />{" "}
    </AuthFormWrapper>
  );
};

export default SignUpPage;
