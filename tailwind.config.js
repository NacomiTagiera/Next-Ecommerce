/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-roboto-flex)"],
			},
			colors: {
				pumpkin: {
					DEFAULT: "#ff7d1a",
					50: "#fff7ed",
					100: "#ffeed4",
					200: "#ffd9a8",
					300: "#ffbd70",
					400: "#ff9637",
					500: "#f05b06",
					600: "#c74307",
					700: "#9e350e",
					800: "#7f2f0f",
					900: "#451405",
				},
			},
			keyframes: {
				blink: {
					"0%": { opacity: 0.2 },
					"20%": { opacity: 1 },
					"100% ": { opacity: 0.2 },
				},
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				jelly: {
					"0%,100%": { transform: "scale(1, 1)" },
					"25%": { transform: "scale(0.95, 1.05)" },
					"50%": { transform: "scale(1.05, 0.95)" },
					"75%": { transform: "scale(0.95, 1.05)" },
				},
			},
			animation: {
				blink: "blink 1.4s both infinite",
				fadeIn: "fadeIn .3s ease-in-out",
				jelly: "jelly 0.5s",
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require("@tailwindcss/typography")],
};
