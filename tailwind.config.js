/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      // Light theme
      lbp: "#ffffff", //  Primary background
      lbs: "#f7f7f8", //  Secondary background
      lbt: "#efeff1", //  Tertiary background
      ltp: "#0e0e10", //  Primary text
      lts: "#53535f", //  Secondary text
      ltt: "#1f1f23", //  Tertiary text
      lbr: "#0000001a", //  Border
      // Dark theme
      dbp: "#18181b", //  Primary background
      dbs: "#0e0e10", //  Secondary background
      dbt: "#1f1f23", //  Tertiary background
      dtp: "#efeff1", //  Primary text
      dts: "#adadb8", //  Secondary text
      dtt: "#dedee3", //  Tertiary text
      dbr: "#ffffff1a", //  Border
      // Generic
      accent: "#29b540", //  Brand accent
      darkaccent: "#106E1F",
      success: "#379634", // Green
      danger: "#FF4000", // Red
      warning: "#F5853F", // Orange
      white: "white", // White
      black: "black", // Black
      transparent: "transparent",
    },
    container: {
      center: true,
    },
    borderRadius: {
      none: "0",
      sm: ".25rem",
      DEFAULT: ".5rem",
      lg: "1rem",
      xl: "2rem",
      full: "9999px",
    },
    extend: {},
  },
}