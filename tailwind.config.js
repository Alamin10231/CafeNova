

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffeeLight: "#D7B49E",
        coffeeDark: "#4B2E00",
        
      },
         backgroundImage: {
        coffeegradient:
          // "linear-gradient(90deg, #322621 0%, #1A0F0D 100%)"
          "linear-gradient(to right, #3E2723 0%, #1D110D 100%)"
      },
    },
  },
  plugins: [require("daisyui")],
};
