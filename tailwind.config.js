/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        'l': '900px'
      },
      height: {
        'l-main': 'calc(100vh - 10rem)'
      },
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontFamily: {
        barlow: "'Barlow', sans-serif"
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'm': '2.1rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '4.2rem'
      },
      letterSpacing: {
        widest: '0.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      colors: {
        red: 'hsl(0, 100%, 68%)',
        blue: {
          DEFAULT: 'hsl(207, 33%, 95%)',
          100: 'hsl(231, 7%, 65%)',
          200: 'hsl(230, 11%, 40%)',
          300: 'hsl(230, 29%, 20%)'
        }
      },
    },
  },
  plugins: [],
}

