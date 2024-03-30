import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				"3xl": "1800px",
			},
			colors: {
				primary: {
					1: "#4201FF",
					2: "#3500D3",
					3: "#190061",
				},
				secondary: "#0C0032",
				dark: {
					1: "#282828",
					2: "#040406",
					3: "#000000",
				},
			},
		},
	},
	plugins: [],
};
export default config;
