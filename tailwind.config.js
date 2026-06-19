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
          DEFAULT: '#FAF7F2',
          dark: '#F0E8D8',
          deeper: '#E8DCC8',
        },
        noir: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
        },
        brand: {
          // Bleu lavande remplace l'orange partout (les classes tailwind gardent le même nom)
          orange: '#7B9DE4',
          'orange-light': '#A8C2EE',
          'orange-dark': '#5878C0',
          olive: '#6B7A50',
          'olive-light': '#8FA06B',
          'olive-dark': '#4A5537',
          jaune: '#E8DEBC',  // sable chaud, accent discret
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
        'card': '0 4px 24px rgba(26,26,26,0.07)',
        'card-hover': '0 10px 44px rgba(26,26,26,0.13)',
        'orange': '0 4px 24px rgba(123,157,228,0.35)',
        'orange-lg': '0 8px 40px rgba(123,157,228,0.45)',
      },
    },
  },
  plugins: [],
}
