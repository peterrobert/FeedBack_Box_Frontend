// src/routes.js
export const ROUTES = {
  LANDING_PAGE: "/",
  LOGIN: "login",
  SIGNUP: "signup",
  FORGOT_PASSWORD: "forgot-password",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
  PROFILE: (id = ":id") => `/profile/${id}`,
};
