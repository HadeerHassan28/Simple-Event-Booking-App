/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        background: "#121212",
        surface: "#1E1E1E",
        text: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
