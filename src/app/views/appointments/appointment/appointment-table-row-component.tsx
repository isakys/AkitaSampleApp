import * as React from 'react';
import { AppointmentsContracts } from '../../../stores/appointments/appointments-contracts';
import { TableRow, TableCell } from "@mui/material";
import { AppointmentService } from '../../../stores/appointments/appointments-entity-service';
import { ModalWindowFormBaseComponent } from '../../../components/modal-window-form-base/modal-window-form-base-component';
import { AppointmentFormComponent } from './appointment-form-component';
import { ConfirmationModalWindowComponent } from '../../../components/confimation-modal-window/confimation-modal-window-component';
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useFormikContext } from 'formik';
import { useAppointmentsStyles } from '../appointments-component-styles';

interface Props {
    appointment: AppointmentsContracts.Appointment;
}

export const AppointmentTableRowComponent = React.memo<Props>(props => {
    const classes = useAppointmentsStyles();
    const { appointment } = props;
    const formikContext = useFormikContext<AppointmentsContracts.Appointment | AppointmentsContracts.NewAppointment>();

    const [isEditAppointmentModalWindowOpened, setIsEditAppointmentModalWindowOpened] = React.useState(false);
    const handleOpenEditAppointmentModalWindow = () => setIsEditAppointmentModalWindowOpened(true);
    const handleCloseEditAppointmentModalWindow = () => setIsEditAppointmentModalWindowOpened(false);

    const handleConfirmEditAppointment = (): void => {
        console.log(formikContext.values)
        AppointmentService.UpdateAppointment(appointment.id, formikContext.values as AppointmentsContracts.Appointment).subscribe();
        handleCloseEditAppointmentModalWindow();
    };

    const [isDeleteAppointmentModalWindowOpened, setIsDeleteAppointmentModalWindowOpened] = React.useState(false);
    const handleOpenDeleteAppointmentModalWindow = () => setIsDeleteAppointmentModalWindowOpened(true);
    const handleCloseDeleteAppointmentModalWindow = () => setIsDeleteAppointmentModalWindowOpened(false);

    const handleConfirmDeleteAppointment = (): void => {
        AppointmentService.DeleteAppointment(appointment.id).subscribe();
        handleCloseDeleteAppointmentModalWindow();
    };

    return <>
        <ModalWindowFormBaseComponent
            modalTitle="Edit Appointment"
            isModalWindowOpened={isEditAppointmentModalWindowOpened}
            formComponent={<AppointmentFormComponent formikContext={formikContext} />}
            handleCloseModalWindow={handleCloseEditAppointmentModalWindow}
            handleConfirm={handleConfirmEditAppointment}
        />
        <ConfirmationModalWindowComponent
            modalTitle="Delete Appoinment"
            modalDescription="Are you sure about deleting this appointment? This action is irrevertible!"
            isModalWindowOpened={isDeleteAppointmentModalWindowOpened}
            handleCloseModalWindow={handleCloseDeleteAppointmentModalWindow}
            handleConfirm={handleConfirmDeleteAppointment}
        />
        <TableRow>
            <TableCell align="left" className={classes.TableCell}>{appointment.date.toString()}</TableCell>
            <TableCell align="left" className={classes.TableCell}>{appointment.provider}</TableCell>
            <TableCell align="left" className={classes.TableCell}>{appointment.location}</TableCell>
            <TableCell align="left" className={classes.TableCell}>{appointment.complaint}</TableCell>
            <TableCell align="left" className={classes.TableCell}>
                <IconButton onClick={handleOpenEditAppointmentModalWindow} color="primary" className={classes.Button}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={handleOpenDeleteAppointmentModalWindow} color="primary">
                    <DeleteForeverIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    </>;
});
