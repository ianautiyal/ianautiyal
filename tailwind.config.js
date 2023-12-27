import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export const colors = {
	primary: {
		50: '#fffbeb',
		100: '#fef3c7',
		200: '#fde58a',
		300: '#fbd24e',
		400: '#fabe25',
		500: '#f49d0c',
		600: '#d87607',
		700: '#bc560a',
		800: '#923f0e',
		900: '#78340f',
		950: '#451a03'
	}
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Comic Neue', ...fontFamily.sans],
			serif: ['Cabin Sketch', ...fontFamily.serif]
		},
		extend: {
			colors: colors
		}
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				['*']: {
					letterSpacing: '0.8px',
					WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
				},
				['*:focus']: {
					outline: 'none'
				}
			});
		})
	]
};
