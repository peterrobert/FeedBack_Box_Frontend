// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../routes";
import LandingPage from "../Pages/LandingPage";
import DashBoard from "../Pages/DashBoard";
import { ForgotPassword, LoginPage, SignUpPage } from "../Pages/Auth";
import AppNotFound from "../Components/AppNotFound";
import AuthLayout from "../Pages/Auth/AuthLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
      {/* --- AUTH PAGES --- */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
      <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
      {/* --- 404 PAGE --- */}
      <Route path="*" element={<AppNotFound />} />
    </Routes>
  );
}
