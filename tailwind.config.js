module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Raleway'", "sans-serif"],
        text: ["'Inter'", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#111111"
        }
      }
    },
  },
  plugins: [],
}
