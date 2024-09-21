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
        'open-sans': ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#4A154B', // Example for the purple sidebar
        secondary: '#350D36', // Example for the darker top bar color
        accent: '#ECB22E', // Yellow highlight
        background: '#F8F8F8', // Lighter background
        message: '#EDEDED', // Light grey for message area
        icon: '#36C5F0', // Light blue for icons
        success: '#2BAC76', // Green for successful action highlights,
        'grayish-blue': 'hsl(208, 11%, 55%)',
        'very-pale-cyan': 'hsl(193, 100%, 96%)',
        'very-dark-cyan': 'hsl(192, 100%, 9%)',
        'pink': 'hsl(322, 100%, 66%)'
      },
    },
  },
  plugins: [],
}
