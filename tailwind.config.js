/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '425px'},
        'md': {'max': '768px'},
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "var(--max-container-width)",
      },
      backgroundImage: {
        'home': "url('/assets/bg1.png')",
        'game': "url('/assets/bg2.png')",
      }
    },
  },
  plugins: [],
}
