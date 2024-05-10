/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				gustavo: ["Gustavo"],
				tartuffo: ["Tartuffo"],
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#180c0e",
			red: "#ff0000",
			brown: {
				dark: "#30171b",
				DEFAULT: "#5d4043",
				light: "#816a6c",
			},
			grey: "#938b8a",
			beige: {
				DEFAULT: "#ebe0d8",
				light: "#faf6f3",
			},
			blue: "#eff1fd",
		},
	},
	plugins: [],
}
