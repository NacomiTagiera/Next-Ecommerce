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
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				blink: {
					"0%": { opacity: 0.2 },
					"20%": { opacity: 1 },
					"100% ": { opacity: 0.2 },
				},
			},
			animation: {
				fadeIn: "fadeIn .3s ease-in-out",
				blink: "blink 1.4s both infinite",
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require("@tailwindcss/typography")],
};
