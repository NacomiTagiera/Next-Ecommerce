import type { Config } from "tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";

import headlessuiPlugin from "@headlessui/tailwindcss";

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
				"azure-radiance": {
					default: "#3b82f6",
					"50": "#eff5ff",
					"100": "#dbe8fe",
					"200": "#bfd7fe",
					"300": "#93bbfd",
					"400": "#609afa",
					"500": "#2570eb",
					"600": "#1d64d8",
					"700": "#1e55af",
					"800": "#1e478a",
					"900": "#172e54",
				},
				zircon: {
					default: "#f7f9ff",
					"50": "#dbe3fe",
					"100": "#bfcffe",
					"200": "#93b1fd",
					"300": "#6088fa",
					"400": "#3b5ff6",
					"500": "#253eeb",
					"600": "#1d2bd8",
					"700": "#1e25af",
					"800": "#1e268a",
					"900": "#171a54",
				},
				"wild-blue-yonder": {
					default: "#858fbb",
					"50": "#f4f6f9",
					"100": "#eaeff5",
					"200": "#d9e0ec",
					"300": "#c2ccdf",
					"400": "#a8b3d1",
					"500": "#7a7fb1",
					"600": "#686c9a",
					"700": "#565a7d",
					"800": "#494d66",
					"900": "#2b2d3b",
				},
				"aqua-squeeze": {
					default: "#e6f4f1",
					"50": "#d8efea",
					"100": "#b0dfd7",
					"200": "#80c8bd",
					"300": "#56aba1",
					"400": "#3c9088",
					"500": "#2e736e",
					"600": "#285d5a",
					"700": "#244b4a",
					"800": "#21403e",
					"900": "#0f2424",
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
