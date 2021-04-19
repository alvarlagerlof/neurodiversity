module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Cabin", "sans-serif"],
      content: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#D49DFF",
          dark: "#831DD3",
        },
        secondary: {
          light: "#FFF6E0",
          dark: "#FFDE89",
        },
      },
    },
  },
  plugins: [],
};
