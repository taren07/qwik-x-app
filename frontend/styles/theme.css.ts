import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
	color: {
		primary: "#000000",
		primaryLight: "#22211F",
		primaryDisabled: "#363435",
		primaryLighter: "#454344",
		secondary: "#1D1D1D",
		text: "#11181C",
		textGray: "#687076",
		textPlaceholder: "#8890A7",
		border: "#DFE3E6",
		btnBg: "#EDEDED",
		inputBg: "#F1F2F3",
		background: "#F8F8FF",
		error: "#e5484d",
	},
});
