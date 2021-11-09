import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "../../app-theme";

export const AppointmentsStyles = (theme: AppTheme) => createStyles({
    Container: {
        height: "100%",
        padding: theme.spacing(4, 0)
    },
    Toolbar: {
        paddingBottom: theme.spacing(2),
    },
    AppointmentsList: {
        minHeight: `calc(100vh - ${theme.spacing(20)})`
    },
    Button: {
        marginLeft: theme.spacing(2)
    },
    Appointment: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        borderBottom: theme.spacing(2) + "solid" + theme.palette.primary.light
    },
    TableCell: {
        padding: "0, auto",
    }
});

export const useAppointmentsStyles = makeStyles(AppointmentsStyles);
