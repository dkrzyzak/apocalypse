/** @type {import('tailwindcss').Config}  */
module.exports = {
   theme: {
      colors: {
         white: '#fff',
         black: '#000',
         'hljs-dark': '#0d1117',
         'hljs-dark-solar': '#141b24',
         violet: '#b030b0',
         'pink-transparent': 'rgba(255,0,255,0.5)',
         aqua: '#0e5e71',
         gray: {
            50: 'hsl(265, 55%, 96%)',
            100: 'hsl(265, 19%, 88%)',
            200: 'hsl(265, 7%, 70%)',
            300: 'hsl(265, 6%, 66%)',
            400: 'hsl(265, 4%, 57%)',
            500: 'hsl(265, 3%, 53%)',
            600: 'hsl(265, 4%, 42%)',
            700: 'hsl(265, 4%, 31%)',
            800: 'hsl(276, 5%, 20%)',
            900: 'hsl(280, 5%, 13%)',
         },
         primary: {
            DEFAULT: '#b85cf0',
            '50': '#fbf5ff',
            '100': '#f5e9fe',
            '200': '#edd7fd',
            '300': '#dfb7fb',
            '400': '#cc89f7',
            '500': '#b85cf0',
            '600': '#a53be2',
            '700': '#8e29c7',
            '800': '#7727a2',
            '900': '#602080',
            '950': '#440b60',
         },
         secondary: {
            DEFAULT: '#202040',
            '50': '#f0f4fd',
            '100': '#e5eafa',
            '200': '#cfd9f6',
            '300': '#b2c0ef',
            '400': '#929fe7',
            '500': '#7880dc',
            '600': '#5d5dce',
            '700': '#4e4db5',
            '800': '#414192',
            '900': '#3a3c75',
            '950': '#202040',
         },
         malibu: {
            DEFAULT: '#79c0ff',
            '50': '#eff7ff',
            '100': '#daecff',
            '200': '#bedfff',
            '300': '#79c0ff',
            '400': '#5daefd',
            '500': '#378cfa',
            '600': '#216eef',
            '700': '#1957dc',
            '800': '#1b48b2',
            '900': '#1c408c',
            '950': '#162855',
         },

         success: {
            100: '#a2f0bc',
            500: '#12bd4b',
         },
         error: {
            100: '#f1acc9',
            500: '#a10c4a',
         },
         'green-neon': 'rgba(45, 255, 196, 0.9)',
         // uncomment if needed
         // 'transparent-red': 'rgba(176, 0, 176, 0.24)',
         // 'transparent-blue': 'rgba(0, 147, 176, 0.24)',
         // 'transparent-green': 'rgba(0, 176, 28, 0.24)',
         // 'ultra-transparent': 'rgba(15, 23, 38, 0.08)',
      },
      extend: {
         screens: {
            xs: '480px',
         },
         width: {
            90: '90%',
         },
         keyframes: {
            blink: {
               '0%, 100%': { opacity: '0' },
               '20%': { opacity: '1' },
            },
            bounceSubtle: {
               '0%, 80%, 100%': { transform: 'translateY(0)' },
               '30%': { transform: 'translateY(-10%)' },
            },
            zoomSpin: {
               '0%': { transform: 'rotate(0deg) scale(0.25)' },
               '50%': { transform: 'rotate(180deg) scale(0.5)' },
               '100%': { transform: 'rotate(360deg) scale(1)' },
            },
            marquee: {
               '0%': { transform: 'translateX(0)' },
               '100%': { transform: 'translateX(-100%)' },
            },
            pinkGlow: {
               '0%, 100%': { filter: 'drop-shadow(0 0 5px #9711f2)' },
               '50%': { filter: 'drop-shadow(0 0 30px #9711f2)' },
            
            },
         },
         animation: {
            blink: 'blink 1s ease-in-out infinite',
            zoomSpin: 'zoomSpin 300ms linear forwards',
            marquee: 'marquee 15s linear 250ms infinite',
            bounceSubtle: 'bounceSubtle 1s ease-in-out infinite',
            pinkGlow: 'pinkGlow 3s ease-in-out infinite',
         },
         transitionTimingFunction: {
            'spring': `linear(
               0, 0.007, 0.029 2.2%, 0.118 4.7%, 0.625 14.4%, 0.826 19%, 0.902, 0.962,
               1.008 26.1%, 1.041 28.7%, 1.064 32.1%, 1.07 36%, 1.061 40.5%, 1.015 53.4%,
               0.999 61.6%, 0.995 71.2%, 1
            );`
         },
         backgroundImage: {
            'gradient-dark': `linear-gradient(to bottom, #3739b782, transparent)`,
            'gradient-unicorn': 'linear-gradient(135deg, #13B9B6, #7F34BD)',
            'radial-blue': 'radial-gradient(120% 115% at 10% 45%, rgba(0, 147, 176, 0.24) 0%, rgba(15, 23, 38, 0.08) 50%)',
            'radial-red': 'radial-gradient(120% 115% at 10% 45%, rgba(176, 0, 176, 0.24) 0%, rgba(15, 23, 38, 0.08) 50%)',
            'radial-green': 'radial-gradient(120% 115% at 10% 45%, rgba(0, 176, 28, 0.24) 0%, rgba(15, 23, 38, 0.08) 50%)',
            'text-overlay': 'linear-gradient(180deg, rgba(17, 17, 17, 0), rgba(17, 17, 17, 0.8) 10%, rgb(17, 17, 17) 40%)',
            grid: `url('/svg/grid.svg')`,
         },
         boxShadow: {
            dark: '2px 2px 4px 1px theme("colors.hljs-dark")',
            pink: `0px 0px 10px theme('colors.pink-transparent')`,
            green: `0px 0px 10px 3px theme('colors.green-neon')`,
         },
         fontFamily: {
            mono: [`var(--font-mono), monospace`],
            sans: [`var(--font-sans), sans-serif`],
         },
      },
   },
   plugins: [
      plugin(({ addUtilities }) => {
         addUtilities({
            '.text-overlay': {
               position: 'relative',
               zIndex: '2',
            },
            '.text-overlay::before': {
               content: '""',
               position: 'absolute',
               width: '100%',
               height: '100%',
               background:
                  'linear-gradient(180deg, rgba(17, 17, 17, 0), rgba(17, 17, 17, 0.8) 10%, rgb(17, 17, 17) 40%)',
               top: '-10px',
               left: '0',
               zIndex: '-1',
            },
         });
      }),
   ],
}