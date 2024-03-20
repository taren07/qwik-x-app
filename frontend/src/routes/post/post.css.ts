import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
	color: {
		grayLight: "#f0f0f0",
		grayBorders: "1px solid #d0d0d0",
		primary: "#007bff",
	},
});

export const discussion = style({
	borderRadius: "0.5rem",
	margin: "1rem",
	width: "100%",
	minWidth: "17.5rem",
	maxWidth: "25rem",
});

export const container = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "16px",
	fontFamily: `'Poppins', sans-serif`,
	height: "100vh",
	width: "100vw",
	backgroundColor: "#ECF0F4",
});

export const discussionHeader = style({
	backgroundColor: vars.color.grayLight,
	borderBottom: vars.color.grayBorders,
	display: "flex",
	gap: "0.5rem",
	borderRadius: "0.5rem 0.5rem 0 0",
	overflow: "hidden",
	padding: "1rem",
	width: "100%",
});

export const discussionHeaderTextareaFocus = style({
	selectors: {
		"&:focus": {
			outline: "none",
			height: "5rem",
			border: `1px solid ${vars.color.primary}`,
		},
	},
});
