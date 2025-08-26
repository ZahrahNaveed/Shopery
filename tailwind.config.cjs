// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B207",
        hardPrimary: "#2C742F",
        dark: "#002603",
        softPrimary: "#84D187",
        warning: "#FF8A00",
        danger: "#EA4B48",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        'fade-up-zoom': {
          '0%': { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-up-zoom': 'fade-up-zoom 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
