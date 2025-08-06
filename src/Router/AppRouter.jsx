// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/react-router";
import LandingPage from "../Pages/LandingPage";
import DashBoard from "../Pages/DashBoard";
import { ForgotPassword, LoginPage, SignUpPage } from "../Pages/Auth";
import AppNotFound from "../Components/AppNotFound";
import AuthLayout from "../Pages/Auth/AuthLayout";
import ProjectPage from "../Pages/Projects";
import SuggestionPage from "../Pages/Suggestion";
import RoadMapPage from "../Pages/RoadMap";

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
      <Route path={ROUTES.PROJECTS} element={<ProjectPage />} />
      <Route path={ROUTES.SUGGESTIONS} element={<SuggestionPage />} />
      <Route path={ROUTES.ROADMAP} element={<RoadMapPage />} />
      <Route path={ROUTES.SETTINGS} element={<div>Settings Page</div>} />

      {/* --- 404 PAGE --- */}
      <Route path="*" element={<AppNotFound />} />
    </Routes>
  );
}
