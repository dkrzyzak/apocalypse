/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        neutral: {
          50: '#f9f9f9',
        },
        blue: {
          300: 'rgb(116, 192, 252)',
          400: 'rgb(77, 171, 247)',
          500: 'rgb(34, 139, 230)',
          600: 'rgb(25, 113, 194)',
          700: 'rgb(24, 100, 171)',
        },
        
      }
    },
    transitionProperty: {
      ct: 'color, background, transform',
      ot: 'opacity, transform',
    },
  },
  plugins: [],
}

// TODO: zamienić kolory na HSL
