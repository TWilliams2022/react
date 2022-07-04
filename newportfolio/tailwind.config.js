/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      myFont: ["Great Vibes"],
    },
  },
  plugins: [require("daisyui")],
};
