import * as React from "react";
import Grid from "@mui/material/Grid";
import { AppointmentsToolbarComponent } from "./appointments-toolbar-component";
import { AppointmentsListComponent } from "./appointments-list-component";
import { Formik } from "formik";
import { AppointmentsContracts } from "../../stores/appointments/appointments-contracts";
import { useAppointmentsStyles } from "./appointments-component-styles";

interface Props {
    appointments: AppointmentsContracts.AppointmentsList;
}

export const AppointmentsComponent = React.memo<Props>(props => {
    const classes = useAppointmentsStyles();
    const { appointments } = props;

    const initialAppointmentValues: AppointmentsContracts.NewAppointment = {
        date: new Date(),
        time: {
            start: new Date(),
            end: new Date(),
        },
        provider: "",
        location: "",
        complaint: "",
        firstName: "",
        middleName: "",
        lastName: "",
        isConfirmed: false,
    };

    return <Grid container={true} className={classes.Container}>
        <Grid item={true} xs={12}>
            <Formik
                initialValues={initialAppointmentValues}
                onSubmit={values => console.log(values)}
            >
                <AppointmentsToolbarComponent appointmentsCount={appointments.length} />
            </Formik>
        </Grid>
        <Grid item={true} xs={12}>
            <AppointmentsListComponent appointments={appointments} />
        </Grid>
    </Grid>;
});
