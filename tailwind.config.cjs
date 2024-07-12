/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#8B5D33", // Warm brown color
        bg_light_primary: "#FCE8D7", // Light peach color
        gray: "#C6A78E", // Warm gray color
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #F8D7B5 0.48%, #FCE8D7 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(255, 147, 71, 0.9)"
      },
    },
  },
  plugins: [],
};