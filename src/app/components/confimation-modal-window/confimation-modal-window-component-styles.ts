import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../../app-theme";

export const ConfirmationModalWindowComponentStyles = (theme: AppTheme) => createStyles({
    ModalWrapper: {
        height: "100%",
        width: "100%"
    },
    Modal: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        zIndex: 999999,
        borderRadius: theme.spacing(2)
    }
});

export const useConfirmationModalWindowComponentStyles = makeStyles(ConfirmationModalWindowComponentStyles);
