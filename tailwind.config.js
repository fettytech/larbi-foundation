module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tendoGreen: "#00272B",
        tendoYellow: "#E0FF4F",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
};
