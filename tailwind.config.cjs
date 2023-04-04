/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'off-white': '#D7D9CE',
				'midnight-green': '#13505B',
				'cerulean': '#0C7489',
				'dark-cyan': '#119DA4',
			},
		},
		borderColor: {
			'off-white': '#D7D9CE',
			'midnight-green': '#13505B',
			'cerulean': '#0C7489',
			'dark-cyan': '#119DA4',
		},
	},
	plugins: [],
}
