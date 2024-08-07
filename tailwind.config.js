/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Roboto Serif", "serif"],
      abc2: ["Roboto", "sans-serif"]
    },
    colors: {
      white: "#ffffff",
      skyBlue: "#043166",
      blue: "#1976d2",
      lightBlue: "#00D1FF",
      darkBlue: "#3196F3",
      grey: "#f5f5f5",
    },
    animation: {
      blob: "blob 10s infinite",
      "loop-scroll": "loop-scroll 50s linear infinite"
    },
    keyframes: {
      blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -50px) scale(0.8)" },
        "66%": { transform: "translate(20px, -20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
      },
      "loop-scroll": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-3370px)" }
      },

    },
  },
  plugins: [],
};