/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Helvetica", "sans"],
      },
      colors: {
        primary: "#8566FF",
        secondary: "#212121",
      },
    },
  },
  plugins: [],
};
