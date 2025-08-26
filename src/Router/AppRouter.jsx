// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { ROUTES } from "../routes";
import LandingPage from "../Pages/LandingPage";
import DashBoard from "../Pages/DashBoard";
import { ForgotPassword, LoginPage, SignUpPage } from "../Pages/Auth";
import AppNotFound from "../Components/AppNotFound";
import AuthLayout from "../Pages/Auth/AuthLayout";
import ProjectPage from "../Pages/Projects";
import SuggestionPage from "../Pages/Suggestion";
import RoadMapPage from "../Pages/RoadMap";
import ProfilePage from "../Pages/Profile";

function ProtectedRoute({ children }) {
  const currentPath = window.location.pathname + window.location.search;
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl={currentPath} />
      </SignedOut>
    </>
  );
}

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
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

      {/* --- 404 PAGE --- */}
      <Route path="*" element={<AppNotFound />} />
    </Routes>
  );
}
