/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mini: "440px",
      "1sm": "540px",
      sm: "640px",
      md: "769px",
      hamburger: "901px",
      "2md": "1000px",
      lg: "1025px",
      "2lg": "1085px",
      "3lg": "1135px",
      "1lg": "1260px",
      xl: "1281px",
      "1xl": "1367px",
      "2xl": "1426px",
      "bigscreen": "1600px",
      "widescreen": "1900px",
      "widerscreen": "2200px",
      "widestscreen": "2500px",
    },
    extend: {},
  },
  plugins: [],
};
