import { style } from "@vanilla-extract/css";

export const box = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	// height: "100vh",
});

export const form = style({
	margin: "70px auto",
	background: "#2a3644",
	width: "347px",
	padding: "30px",
	borderRadius: "6px",
	alignItems: "center",
});

export const center = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const formTitle = style({
	color: "#f4f4f4",
	textShadow: "1px 1px 0px rgba(0, 0, 0, 0.7)",
	fontWeight: "400",
	marginBottom: "10px",
	fontSize: "20px",
});

export const input = style({
	background: "rgba(0, 0, 0, 0.2)",
	color: "#fff",
	textShadow: "1px 1px 0px rgba(0, 0, 0,0.3)",
	display: "block",
	justifyContent: "center",
	alignItems: "center",
	width: "269px",
	padding: "15px",
	marginBottom: "10px",
	outline: "none",
	borderRadius: "6px",
	transition: "all 0.1s ease-in-out",
	selectors: {
		"&:focus": {
			background: "rgba(0, 0, 0, 0.1)",
			transition: "all 0.1s ease-in-out",
		},
	},
});

export const button = style({
	position: "relative",
	display: "block",
	marginTop: "15px",
	marginBottom: "15px",
	padding: "17px",
	width: "270px",
	fontSize: "1.2em",
	background: "#ab4b47",
	color: "#f4f4f4",
	boxShadow: `2px 2px 2px 2px rgba(0,0,0,0.6)`,
	cursor: "pointer",
	borderRadius: "6px",
	transition: "all 0.1s ease-in-out",
	selectors: {
		"&:active": {
			top: "3px",
			boxShadow: "none",
		},
	},
});

export const errorText = style({
	color: "#dd1f19",
});