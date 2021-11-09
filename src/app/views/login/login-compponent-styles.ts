import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../../app-theme";

export const LoginStyles = (theme: AppTheme) => createStyles({
    Container: {
        minHeight: `calc(100vh - ${theme.spacing(20)})`,
        padding: theme.spacing(4, 0)
    },
    LoginWrapper: {
        minHeight: theme.spacing(60),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.spacing(0.5)
    }
});

export const useLoginStyles = makeStyles(LoginStyles);
