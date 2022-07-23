module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0AC5B3",
        background: "#232426",
        background_100: "#2C2D30",
      },
    },
    fontFamily: {
      sans: ["Lexend Deca"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
