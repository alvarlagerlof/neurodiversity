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
      join: "url('/backgrounds/join.svg')",
      "join-mobile": "url('/backgrounds/join-mobile.svg')",
      "top-bar": "url('/backgrounds/top-border.svg')",
    },
    extend: {
      colors: {
        primary: "#860091",
        secondary: "#FFEEE5",
        body: "#3b3b3b",
      },
    },
  },
  plugins: [],
};
