import * as React from "react";
import { AppointmentsContracts } from "../../../stores/appointments/appointments-contracts";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker, TimePicker } from "@mui/lab";
import { Form, FormikContextType } from "formik";

type FormData = AppointmentsContracts.Appointment | AppointmentsContracts.NewAppointment;

interface Props {
    formikContext: FormikContextType<FormData>;
    appointment?: AppointmentsContracts.Appointment;
}

export const AppointmentFormComponent = React.memo<Props>(props => {
    const { formikContext, appointment } = props;

    const determineInitialValues = (): FormData => {
        if (appointment) {
            return appointment;
        }

        return {
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
    };

    return <Form>
        <Grid container={true} justifyContent="center" alignItems="flex-start" spacing={2}>
            <Grid item={true} xs={12} md={6} container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formikContext.values.firstName}
                        onChange={formikContext.handleChange}
                        disabled={formikContext.isSubmitting}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <TextField
                        id="middleName"
                        name="middleName"
                        label="Middle Name"
                        value={formikContext.values.middleName}
                        onChange={formikContext.handleChange}
                        disabled={formikContext.isSubmitting}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formikContext.values.lastName}
                        onChange={formikContext.handleChange}
                        disabled={formikContext.isSubmitting}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <TextField
                        id="complaint"
                        name="complaint"
                        label="Complaint"
                        value={formikContext.values.complaint}
                        onChange={formikContext.handleChange}
                        disabled={formikContext.isSubmitting}
                    />
                </Grid>
            </Grid>
            <Grid item={true} xs={12} md={6} container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <TextField
                        id="provider"
                        name="provider"
                        label="Provider"
                        value={formikContext.values.provider}
                        onChange={formikContext.handleChange}
                        disabled={formikContext.isSubmitting}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <TextField
                        id="location"
                        name="location"
                        label="Location"
                        value={formikContext.values.location}
                        onChange={formikContext.handleChange}
                        disabled={formikContext.isSubmitting}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="isConfirmed"
                                name="isConfirmed"
                                value={formikContext.values.isConfirmed}
                                onChange={value => formikContext.setFieldValue(formikContext.getFieldProps("isConfirmed").name, value)}
                                disabled={formikContext.isSubmitting}
                            />
                        }
                        label="Is Confirmed"
                    />
                </Grid>
            </Grid>
            <Grid item={true} xs={12} md={6} container={true} spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item={true} xs={12}>
                        <DesktopDatePicker
                            label="Date"
                            inputFormat="MM/dd/yyyy"
                            value={formikContext.values.date}
                            onChange={value => formikContext.setFieldValue(formikContext.getFieldProps("date").name, value)}
                            disabled={formikContext.isSubmitting}
                            renderInput={(params) => <TextField {...params} type="date" id="date" />}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TimePicker
                            label="Start Time"
                            value={formikContext.values.time.start}
                            onChange={value => formikContext.setFieldValue(formikContext.getFieldProps("time.start").name, value)}
                            disabled={formikContext.isSubmitting}
                            renderInput={(params) => <TextField {...params} type="time" id="start" />}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TimePicker
                            label="End Time"
                            value={formikContext.values.time.end}
                            onChange={value => formikContext.setFieldValue(formikContext.getFieldProps("time.end").name, value)}
                            disabled={formikContext.isSubmitting}
                            renderInput={(params) => <TextField {...params} type="time" id="end" />}
                        />
                    </Grid>
                </LocalizationProvider>
            </Grid>
        </Grid>
    </Form>;
});
