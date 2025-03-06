/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      minHeight: {
        screen: "100dvh",
      },
      fontFamily: {
        neuemontreal: ["PPNeueMontreal", "sans-serif"],
      },
      screens: {
        "3xs": "360px",
        "2xs": "390px",
        xs: "414px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightcrew: {
          primary: "#007AFF",
          "primary-content": "#F9FAFB",
          secondary: "#C2DFFF",
          "secondary-content": "#041326",
          accent: "#1E88E5",
          "accent-content": "#F9FAFB",
          neutral: "#90A1B4",
          "neutral-content": "#F9FAFB",
          "base-100": "#F9FAFB",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "base-content": "#041326",
          info: "#53B0E9",
          "info-content": "#F9FAFB",
          success: "#28C76F",
          "success-content": "#F9FAFB",
          warning: "#FFB547",
          "warning-content": "#F9FAFB",
          error: "#FF5A5F",
          "error-content": "#F9FAFB",
        },
        darkcrew: {
          primary: "#4AAFFF",
          "primary-content": "#0B1120",
          secondary: "#2B4C68",
          "secondary-content": "#F5F7FA",
          accent: "#216BA5",
          "accent-content": "#0B1120",
          neutral: "#7A8CA2",
          "neutral-content": "#F5F7FA",
          "base-50": "#0B1120",
          "base-100": "#121828",
          "base-200": "#1C2537",
          "base-300": "#2E3A4A",
          "base-content": "#F5F7FA",
          info: "#2A6D9E",
          "info-content": "#0B1120",
          success: "#3FBD76",
          "success-content": "#0B1120",
          warning: "#FFA63E",
          "warning-content": "#0B1120",
          error: "#FF6D7A",
          "error-content": "#0B1120",
        },
      },
    ],
    darkTheme: "darkcrew",
  },
};
