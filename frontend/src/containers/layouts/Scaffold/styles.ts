import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: "fixed",
		overflow: "hidden",
		height: "100vh",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "15em auto",
		gridTemplateRows: "5em auto",
		gap: "1px 1px",
		gridTemplateAreas: '"sidebar header" "sidebar content"',
	},
	header: {
		gridArea: "header",
	},
	content: {
		gridArea: "content",
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
		overflowY: "scroll",
	},
	sidebar: {
		gridArea: "sidebar",
	},
}));
