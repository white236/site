/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override Tailwind white/black avec les teintes provençales
        white: '#FAF5EC',   // Lin chaud — remplace le blanc pur (cartes, fonds)
        black: '#2C3A20',   // Garrigue foncée — remplace le noir pur

        // Fonds calcaires chauds
        cream: {
          DEFAULT: '#F5EFE0',  // Calcaire provençal — fond principal
          dark:    '#EAE0CC',  // Section alternée légèrement teintée
          deeper:  '#D8C7B0',  // Beige pierre — bordures, séparateurs
        },

        // Olive / garrigue — remplace le noir
        noir: {
          DEFAULT: '#2C3A20',  // Garrigue profonde (sections sombres + texte)
          light:   '#3F5230',  // Garrigue un peu plus claire (hover)
        },

        brand: {
          // Bleu lavande forte — jeune et vive
          orange:        '#7D8CFF',
          'orange-light':'#A8B0FF',
          'orange-dark': '#5060DD',
          // Vert olive clair — naturel, provençal
          olive:         '#8E9B72',
          'olive-light': '#A8B88A',
          'olive-dark':  '#6A7550',
          // Jaune soleil — chaud, été
          jaune:         '#F6D779',
          // Rose pierre — touche florale douce
          rose:          '#D9A7A0',
          'rose-dark':   '#C08880',
          // Beige pierre — murs provençaux
          beige:         '#D8C7B0',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body:    ['Inter',  'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow':  'float 9s ease-in-out 1s infinite',
        'fade-up':     'fadeUp 0.6s ease-out forwards',
        'pulse-soft':  'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)',    opacity: '1' },
          '50%':      { transform: 'scale(1.04)', opacity: '0.9' },
        },
      },
      boxShadow: {
        // Ombres teintées olive (plus chaudes que le gris)
        'card':       '0 4px 24px rgba(44,58,32,0.09)',
        'card-hover': '0 10px 44px rgba(44,58,32,0.15)',
        'orange':     '0 4px 24px rgba(125,140,255,0.35)',
        'orange-lg':  '0 8px 40px rgba(125,140,255,0.45)',
      },
    },
  },
  plugins: [],
}
