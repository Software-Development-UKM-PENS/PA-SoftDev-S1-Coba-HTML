/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "curhat.html", "profil.html",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#8566FF",
        secondary: "#212121",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts : true,
    }),
  ],
};
