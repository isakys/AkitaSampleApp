// eslint-disable-next-line no-restricted-imports
import { createTheme, Theme } from "@mui/material";

class ThemeClass {
    public static defaultTheme: Theme = createTheme({
        typography: {
            button: {
                textTransform: "none"
            },
        },
        palette: {
            background: {
                paper: "#D9D9D9"
            },
            text: {
                primary: "#000000",
                secondary: "#4d4d4d"
            },
            primary: {
                main: "#007cc2",
                light: "#6cb5e4",
                dark: "#0059a9"
            },
            secondary: {
                main: "#f68712",
                light: "#f4d8b7",
                dark: "#ea881f",
                contrastText: "#ffffff"
            }
        }
    });
}

export type AppTheme = Theme & ThemeClass;

export const AppThemeInstance: AppTheme = {
    ...new ThemeClass(),
    ...ThemeClass.defaultTheme
};
