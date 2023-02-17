/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#20262E",
        darkPurple: "#150050",
        customPurple: "#3F0071",
        customSalmon: "#FB2576",
      },
    },
  },
  plugins: [],
};
