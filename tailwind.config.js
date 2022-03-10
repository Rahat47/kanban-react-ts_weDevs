module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Raleway'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#111111"
        }
      },
      keyframes: {
        bg_move: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        }
      },
      animation: {
        "bg_move": "bg_move 8s ease infinite"
      },
    },
  },
  plugins: [],
}
