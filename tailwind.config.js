module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Cabin", "sans-serif"],
      content: ["Inter", "sans-serif"],
    },
  },
  colors: {},

  variants: {
    extend: {},
  },
  plugins: [],
};
