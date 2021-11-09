import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../../app-theme";

export const HeaderStyles = (theme: AppTheme) => createStyles({
    Header: {
        backgroundColor: theme.palette.primary.main,
        minHeight: theme.spacing(10),
        padding: theme.spacing(0, 4),
    },
    Logo: {
        height: theme.spacing(8),
        cursor: "pointer"
    }
});

export const useHeaderStyles = makeStyles(HeaderStyles);