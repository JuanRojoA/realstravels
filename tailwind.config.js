module.exports = {
  mode: "jit",
  content: ["./src/index.html", "./src/pages/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
