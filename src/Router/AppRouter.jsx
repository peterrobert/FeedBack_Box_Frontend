// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../routes";
import LandingPage from "../Pages/LandingPage";
import DashBoard from "../Pages/DashBoard";
import { LoginPage, SignUpPage } from "../Pages/Auth";
// import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
