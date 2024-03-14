/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {},
      backgroundImage: {
        "sidebar-menu-gradient":
          "linear-gradient(0deg, rgba(146,95,226,1) 0%, rgba(147,96,227,1) 100%)",
        "header-gradient":
          "linear-gradient(99deg, #925FE2 53.12%, #DFCFF7 155.43%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
