/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F0',
          dark: '#F0EAE2',
          deeper: '#E2D8CE',
        },
        noir: {
          DEFAULT: '#111111',
          light: '#222222',
        },
        brand: {
          // Bleu lavande forte — jeune et vive
          orange: '#7D8CFF',
          'orange-light': '#A8B0FF',
          'orange-dark': '#5060DD',
          // Vert olive clair — naturel, provençal
          olive: '#8E9B72',
          'olive-light': '#A8B88A',
          'olive-dark': '#6A7550',
          // Jaune soleil — chaud, été
          jaune: '#F6D779',
          // Rose pierre — touche florale douce
          rose: '#D9A7A0',
          'rose-dark': '#C08880',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 9s ease-in-out 1s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.9' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(17,17,17,0.07)',
        'card-hover': '0 10px 44px rgba(17,17,17,0.13)',
        'orange': '0 4px 24px rgba(125,140,255,0.35)',
        'orange-lg': '0 8px 40px rgba(125,140,255,0.45)',
      },
    },
  },
  plugins: [],
}
