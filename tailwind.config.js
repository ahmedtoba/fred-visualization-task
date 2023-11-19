/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#693ef3",
        secondary: "#88b637",
      },
    },
  },
  plugins: [],
};
