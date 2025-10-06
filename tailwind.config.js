/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // optional if you’ll use shadcn theme toggle later
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#080808',
        'brand-green': {
          DEFAULT: '#AFFF00',
          light: '#BEF264',
        },
        'brand-gray': {
          light: '#D1D5DB',
          DEFAULT: '#1F1F1F',
          dark: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'green-glow': '0 0 15px 5px rgba(175, 255, 0, 0.3), 0 0 25px 10px rgba(175, 255, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
