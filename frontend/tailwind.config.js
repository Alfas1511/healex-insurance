/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E8F87",
        primaryDark: "#0B6F69",
        primaryLight: "#E6F5F4",
      },
    },
  },
  plugins: [],
}

