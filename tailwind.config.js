import svgToDataUri from 'mini-svg-data-uri';
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
				},
				['body']: {
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					// backgroundSize: 'contain',
					backgroundPosition: 'center bottom',
					backgroundImage: `url("${svgToDataUri(`<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 400'>
					<defs>
						<linearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'>
							<stop offset='0' stop-color='${theme('colors.gray.500')}' stop-opacity='0' />
							<stop offset='1' stop-color='${theme('colors.gray.500')}' stop-opacity='0.5' />
						</linearGradient>
					</defs>
					<g fill-opacity='0.1'>
						<circle fill='url(#b)' cx='267.5' cy='61' r='300' />
						<circle fill='url(#b)' cx='532.5' cy='61' r='300' />
						<circle fill='url(#b)' cx='400' cy='30' r='300' />
					</g>
				</svg>`)}")`
				}
			});
		})
	]
};
