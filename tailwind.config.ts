import headlessuiPlugin from "@headlessui/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.5rem" }],
			lg: ["1.125rem", { lineHeight: "2rem" }],
			xl: ["1.25rem", { lineHeight: "1.75rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["2rem", { lineHeight: "3rem" }],
			"4xl": ["2.5rem", { lineHeight: "3rem" }],
			"5xl": ["3rem", { lineHeight: "1" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		extend: {
			animation: {
				blink: "blink 1.4s both infinite",
				"fade-in": "fade-in 0.3s ease-in-out",
				jelly: "jelly 0.5s",
			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
			},
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
					"0%": { opacity: "0.2" },
					"20%": { opacity: "1" },
					"100% ": { opacity: "0.2" },
				},
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				jelly: {
					"0%,100%": { transform: "scale(1, 1)" },
					"25%": { transform: "scale(0.95, 1.05)" },
					"50%": { transform: "scale(1.05, 0.95)" },
					"75%": { transform: "scale(0.95, 1.05)" },
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [formsPlugin, typographyPlugin, headlessuiPlugin],
} satisfies Config;
