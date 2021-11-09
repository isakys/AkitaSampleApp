import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../../app-theme";

export const ErrorsStyles = (theme: AppTheme) => createStyles({
    Container: {
        minHeight: `calc(100vh - ${theme.spacing(20)})`
    },
});

export const useErrorsStyles = makeStyles(ErrorsStyles);
