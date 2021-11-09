import * as React from "react";
import Grid from "@mui/material/Grid";
import { AppointmentsContracts } from "../../stores/appointments/appointments-contracts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { Formik } from "formik";
import { AppointmentTableRowComponent } from "./appointment/appointment-table-row-component";

interface Props {
    appointments: AppointmentsContracts.AppointmentsList
}

export const AppointmentsListComponent = React.memo<Props>(props => {
    const { appointments } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const renderAppointments = (appointments: AppointmentsContracts.AppointmentsList): React.ReactNode => {
        return appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(appointment => <Formik key={appointment.id} initialValues={appointment} onSubmit={values => console.log(values)}>
                <AppointmentTableRowComponent appointment={appointment} />
            </Formik>);
    };


    return <Grid container={true}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Appointment Date</TableCell>
                        <TableCell align="left">Provider</TableCell>
                        <TableCell align="left">Location</TableCell>
                        <TableCell align="left">Reason for Visit</TableCell>
                        <TableCell align="left">Appointment Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderAppointments(appointments)}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={appointments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Grid>;
});
