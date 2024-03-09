/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "sidebar-menu-gradient":
          "linear-gradient(0deg, rgba(146,95,226,1) 0%, rgba(147,96,227,1) 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
