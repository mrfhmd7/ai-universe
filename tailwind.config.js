/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0058ff",

          "secondary": "#0000ff",

          "accent": "#8e5d00",

          "neutral": "#090909",

          "base-100": "#fff9ef",

          "info": "#43caff",

          "success": "#008800",

          "warning": "#fc4900",

          "error": "#ff6d8b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

