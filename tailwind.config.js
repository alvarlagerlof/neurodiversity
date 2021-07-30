const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Inter var", ...defaultTheme.fontFamily.sans],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      join: "url('/help-background.svg')",
      "top-bar": "url('/top-border-background.svg')",
    },
    extend: {
      colors: {
        primary: "#860091",
        secondary: "#FFEEE5",
        font: "#3b3b3b",
      },
    },
  },
  plugins: [],
};
