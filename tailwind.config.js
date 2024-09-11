/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8B20E", // Custom Primary Color
        secondary: "#9333EA", // Custom Secondary Color
        neutral: "8F8E8D",
        accent: "#F59E0B", // Custom Accent Color
      },
    },
  },
  plugins: [],
};
