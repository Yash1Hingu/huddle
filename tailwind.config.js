/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#4A154B', // Example for the purple sidebar
        secondary: '#350D36', // Example for the darker top bar color
        accent: '#ECB22E', // Yellow highlight
        background: '#F8F8F8', // Lighter background
        message: '#EDEDED', // Light grey for message area
        icon: '#36C5F0', // Light blue for icons
        success: '#2BAC76', // Green for successful action highlights
      },
    },
  },
  plugins: [],
}
