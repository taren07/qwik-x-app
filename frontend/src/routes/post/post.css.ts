import { style } from "@vanilla-extract/css";

export const discussion = style({
	borderRadius: "0.5rem",
	margin: "1rem",
	width: "100%",
	minWidth: "17.5rem",
	maxWidth: "25rem",
});

export const bodyStyle = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "16px",
	fontFamily: `'Poppins', sans-serif`,
	height: "100vh",
	width: "100vw",
	backgroundColor: "#ECF0F4",
});