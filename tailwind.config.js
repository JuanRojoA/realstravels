module.exports = {
  darkMode: "class",
  content: ["./src/index.html", "./src/pages/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
