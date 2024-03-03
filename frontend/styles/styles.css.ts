import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const gridStyle = style({
	display: "grid",
	position: "relative",
	marginInline: "auto",
	minBlockSize: "100vh",
	placeItems: "center center",
	backgroundColor: vars.color.background,
});
