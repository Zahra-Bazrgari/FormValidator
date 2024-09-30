/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html", "**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "costume-gray": "rgb(249, 249, 249)",
        "costume-md-gray": "rgb(149, 149, 149)",
        "costume-d-gray": "rgb(118, 118, 118)",
        "costume-border-gray": "rgb(202, 202, 202)",
      },
    },
  },
  plugins: [],
};
