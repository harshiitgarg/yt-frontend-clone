/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color": "#0f0f0f",
        "btn-color": "#3F3F3F",
        "search-color": "#222222",
      },
    },
  },
  plugins: [],
};
