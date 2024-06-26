/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				// Don't need xs since Tailwind uses min-width approach
				// to its media queries.
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				xxl: '1400px',
			},
			container:{
				center:true,
				padding: "0.75rem",
			},
			maxWidth: {
				sm: `${540 / 16}rem`,
				md: `${720 / 16}rem`,
				lg: `${960 / 16}rem`,
				xl: `${1140 / 16}rem`,
				xxl: `${1320 / 16}rem`,
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 100 },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.2s ease-in-out forwards",
			},
		}
	},
	plugins: []
};
