import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
	color: {
		grayLight: "#FAFBFC",
		grayBorders: "1px solid #d0d0d0",
		primary: "#007bff",
		white: "#ffffff",
		grayDark: "#333333",
	},
});

export const avatar = style({
	borderRadius: "50%",
	width: "2.5rem",
	height: "2.5rem",
	objectFit: "cover",
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
	backgroundColor: vars.color.white,
	borderBottom: vars.color.grayBorders,
	display: "flex",
	gap: "0.5rem",
	borderRadius: "0.5rem 0.5rem",
	padding: "1rem",
	boxShadow: "4px 4px 10px 0px rgba(173, 172, 172, 0.4)",
});

export const discussion = style({
	borderRadius: "0.5rem",
	margin: "1rem",
	width: "100%",
	minWidth: "17.5rem",
	maxWidth: "25rem",
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

export const comment = style({
	display: "flex",
	padding: "1rem",
	minHeight: "6rem",
	gap: "0.25rem",
	borderBottom: vars.color.grayBorders,
});

export const newCommentToolbar = style({
	justifyContent: "end",
	display: "flex",
	gap: "0.5rem",
	padding: "0.25rem",
});

export const newCommentToolbarButton = style({
	border: "none",
	cursor: "pointer",
	padding: "0.5rem",
	borderRadius: "0.5rem",
	backgroundColor: vars.color.primary,
	color: vars.color.white,
	minWidth: "5rem",
});

export const buttonPrimary = style({});

export const commentText = style({
	fontSize: "0.75rem",
});

export const commentAuthor = style({
	fontSize: "0.8rem",
});

export const commentDate = style({
	fontSize: "0.75rem",
	marginLeft: "0.25rem",
	color: vars.color.grayDark,
});
