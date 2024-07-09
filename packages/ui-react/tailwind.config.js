/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#000',
				white: '#fff',
				neutral: {
					50: '#f9f9f9',
					100: 'rgb(229, 234, 250)',
					200: 'rgb(178, 173, 184)',
				},
				blue: {
					300: 'rgb(116, 192, 252)',
					400: 'rgb(77, 171, 247)',
					500: 'rgb(34, 139, 230)',
					600: 'rgb(25, 113, 194)',
					700: 'rgb(24, 100, 171)',
				},
				warn: {
					400: 'rgb(255, 224, 102)',
					500: 'rgba(250, 176, 5)',
					600: 'rgb(240, 140, 0)',
					700: 'rgb(230, 119, 0)',
				},
			},
			// custom
			transitionProperty: {
				ct: 'color, background, transform',
				ot: 'opacity, transform',
			},
			keyframes: {
            rollDown: {
               '0%': { opacity: '0', transform: 'translateY(-0.5rem)', },
               '100%': { opacity: '1', transform: 'translateY(0)', },
            },
         },
         animation: {
            rollDown: 'rollDown 300ms ease-in-out forwards',
         },
			// additional numeric values
		},
	},
	plugins: [],
};

// TODO: zamienić kolory na HSL
