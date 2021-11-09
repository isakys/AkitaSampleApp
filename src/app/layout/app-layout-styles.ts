import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../app-theme";

export const AppLayoutStyles = (theme: AppTheme) => createStyles({
    Root: {
        minHeight: "100vh",
        width: "100%"
    },
    Content: {
        minHeight: `calc(100vh - ${theme.spacing(20)})`,
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0, 4)
          },
    },
    Content1: {
        width: "100%",
        height: "100%"
    },
});

export const useAppLayoutStyles = makeStyles(AppLayoutStyles);
