/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lt-gray": "#272727",
        "md-gray": "#212121",
        "drk-gray": "#1A1A1A",
        accent: "#25E78A",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%" },
        },
        slideOut: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%" },
        },
      },
      animation: {
        slideIn: "slideIn 2s ease-in-out",
        slideOut: "slideOut 2s ease-in-out",
      },
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1250px",
    },
  },
  plugins: [],
};
