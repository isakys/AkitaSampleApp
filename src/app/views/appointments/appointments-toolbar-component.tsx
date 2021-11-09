import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { ModalWindowFormBaseComponent } from "../../components/modal-window-form-base/modal-window-form-base-component";
import { useFormikContext } from "formik";
import { AppointmentsContracts } from "../../stores/appointments/appointments-contracts";
import { AppointmentService } from "../../stores/appointments/appointments-entity-service";
import { useAppointmentsStyles } from "./appointments-component-styles";
import { AppointmentFormComponent } from "./appointment/appointment-form-component";

interface Props {
    appointmentsCount: number
}

export const AppointmentsToolbarComponent = React.memo<Props>(props => {
    const classes = useAppointmentsStyles();
    const { appointmentsCount } = props;

    const formikContext = useFormikContext<AppointmentsContracts.Appointment | AppointmentsContracts.NewAppointment>();
    

    const [isAddAppointmentModalWindowOpened, setIsAddAppointmentModalWindowOpened] = React.useState(false);
    const handleOpenAddAppointmentModalWindow = () => setIsAddAppointmentModalWindowOpened(true);
    const handleCloseAddAppointmentModalWindow = () => setIsAddAppointmentModalWindowOpened(false);

    const handleConfirmAddAppointment = (): void => {
        AppointmentService.PostAppointment(formikContext.values as AppointmentsContracts.NewAppointment).subscribe()
        handleCloseAddAppointmentModalWindow();
    };

    return <>
        <ModalWindowFormBaseComponent
            modalTitle="Add New Appointment"
            isModalWindowOpened={isAddAppointmentModalWindowOpened}
            formComponent={<AppointmentFormComponent formikContext={formikContext} />}
            handleCloseModalWindow={handleCloseAddAppointmentModalWindow}
            handleConfirm={handleConfirmAddAppointment}
        />
        <Grid container={true} justifyContent="space-between" alignItems="center" className={classes.Toolbar}>
            <Grid item={true}>
                <Typography variant="h4">Appointments count: {appointmentsCount}</Typography>
            </Grid>
            <Grid item={true}>
                <Button onClick={handleOpenAddAppointmentModalWindow} variant="outlined" startIcon={<AddIcon />}>
                    Appointment
                </Button>
            </Grid>
        </Grid>
    </>;
});