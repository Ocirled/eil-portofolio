/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'gray': '#9E98B3',
      'light': 'hsl(var(--color-light))',
      'dim': 'hsl(var(--color-dim))',
      'dark': 'hsl(var(--color-dark))',
      'darkNoChange': 'hsl(252, 30%, 10%)',
      'lightNoChange': 'hsl(252, 30%, 95%)',
      'glass': 'rgba(255, 255, 255, 0.45)',
      'darkWithAlpha': '#00000080',
      'primary':'hsl(var(--color-primary))',
      'red': 'hsl(352, 75%, 60%)',
      'purple': 'hsl(252, 75%, 60%)',
      'yellow': 'hsl(52, 75%, 60%)',
      'green': 'hsl(152, 75%, 60%)',
      'blue': 'hsl(202, 75%, 60%)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'normal': '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
      },
      keyframes: {
        shock: {
          '50%': {transform: 'scale(0.8)'},
          '100%': {transform: 'scale(1)'}
        }
      },
      animation: {
        'shock': 'shock .3s linear 1'
      }
    },
  },
  plugins: [],
}

