/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#d8b4fe", // tím nhạt
          DEFAULT: "#8b5cf6", // tím chính
          dark: "#5b21b6", // tím đậm
        },
      },
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(to right, #7e22ce, #9333ea, #a855f7, #c084fc)",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
}
