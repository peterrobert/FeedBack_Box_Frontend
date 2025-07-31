import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
    colors: {
      primary: {
        light: "#ff66e3",
        DEFAULT: "#ff00d4",
        dark: "#cc00a9",
      },
      secondary: {
        light: "#8b5cf6",
        DEFAULT: "#7c3aed",
        dark: "#6d28d9",
      },
      boxShadow: {
        elevation:
          "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [daisyui],
};
