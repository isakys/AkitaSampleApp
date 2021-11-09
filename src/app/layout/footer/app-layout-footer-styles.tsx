import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../../app-theme";

export const FooterStyles = (theme: AppTheme) => createStyles({
    Footer: {
        backgroundColor: theme.palette.primary.main,
        paddingLeft: theme.spacing(4),
        minHeight: theme.spacing(10)
    }
});

export const useFooterStyles = makeStyles(FooterStyles);
