// src/routes.js
export const ROUTES = {
  LANDING_PAGE: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
  PROFILE: (id = ":id") => `/profile/${id}`,
};
