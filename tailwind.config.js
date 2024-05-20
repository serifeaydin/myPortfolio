/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector', // Dark mode'u 'class' olarak ayarlayın
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4731D3 70%, #CBF281 30%)',
        'custom-gradient-dark':'linear-gradient(to right, #171043 70%, #1A210B 30%)',
      },
      colors: {
        // Dark mode renkleri burada tanımlanabilir
        'dark-bg': '#1a202c', // Örnek koyu arka plan rengi
        'dark-text': '#cbd5e0', // Örnek koyu mod metin rengi
      },
    },
  },
  plugins: [],
}