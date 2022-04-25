module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./html/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
