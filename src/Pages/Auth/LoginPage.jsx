import AuthFormWrapper from "./AuthFormWrapper";
import { SignIn } from "@clerk/react-router";
import AuthFallBack from "./AuthFallBack";

const LoginPage = () => {
  return (
    <AuthFormWrapper title="">
      <SignIn fallback={<AuthFallBack />} signUpUrl="/auth/signup" />
    </AuthFormWrapper>
  );
};

export default LoginPage;
