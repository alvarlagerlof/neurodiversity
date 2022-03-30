const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      display: ["Inter var", ...defaultTheme.fontFamily.sans],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      join: "url('/backgrounds/join.svg')",
      "join-mobile": "url('/backgrounds/join-mobile.svg')",
      "top-bar": "url('/backgrounds/top-border.svg')",
      discord: "url('/backgrounds/discord.svg')",
    },
    extend: {
      colors: {
        primary: "#860091",
        secondary: "#FFEEE5",
        highlight: "rgba(194, 65, 25, 0.2)",
        body: "#3B3B3B",
        gray: "#AEAEAE",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
