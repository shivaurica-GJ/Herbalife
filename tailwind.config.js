/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // If you want to make Poppins the default sans font:
        // sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
