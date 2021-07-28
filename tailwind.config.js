module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#860091",
        secondary: "#FFEEE5",
      },
    },
  },
  plugins: [],
};
