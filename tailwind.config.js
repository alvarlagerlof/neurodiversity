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
        "secondary-dark": "#1a1817",
        "button-secondary": "#e9d0c3",
        "button-secondary-dark": "#272321",
        highlight: "rgba(194, 65, 25, 0.2)",
        body: "#191919",
        "body-dark": "#c1c1c1",
        gray: "#AEAEAE",
        white: "#FFFFFF",
        "card-dark": "#343434",
      },
    },
  },
  plugins: [],
};
