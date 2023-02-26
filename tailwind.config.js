/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins"],
        "inter": ["Inter"],
      },
      colors: {
        "shockbyte": {
          "lighter": "rgba(255, 255, 255, 0.4)",
          "light": "rgba(255, 255, 255, 0.2)",
          "dark": "#1E1F25",
          "darker": "#131517",
          "primary": "#5051F9",
        },
      },
    },
  },
  plugins: [],
}