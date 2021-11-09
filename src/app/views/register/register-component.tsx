import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../routes/app-routes";
import { useRegisterStyles } from "./register-component-styles";
import { UserService } from "../../stores/user/user-service";

export const RegisterComponent = React.memo(() => {
    const classes = useRegisterStyles();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        onSubmit: values => {
            UserService.RegisterUser(values).subscribe();
        },
    });

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Container}>
        <Grid item={true} xs={12} md={6} container={true} justifyContent="center" alignItems="center" className={classes.RegisterWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <Grid item={true} xs={12} container={true} justifyContent="center" alignItems="center" className={classes.TitleContainer}>
                    <Typography variant="h4" color="primary">Welcome to BetterDayHealth</Typography>
                </Grid>
                <Grid item={true} xs={12} container={true} spacing={2}>
                    <Grid item={true} xs={12} container={true} justifyContent="center" alignItems="center">
                        <TextField
                            fullWidth={true}
                            type="firstName"
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            disabled={formik.isSubmitting}
                        />
                    </Grid>
                    <Grid item={true} xs={12} container={true} justifyContent="center" alignItems="center">
                        <TextField
                            fullWidth={true}
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            disabled={formik.isSubmitting}
                        />
                    </Grid>
                    <Grid item={true} xs={12} container={true} justifyContent="center" alignItems="center">
                        <TextField
                            fullWidth={true}
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            disabled={formik.isSubmitting}
                        />
                    </Grid>
                    <Grid item={true} xs={12} container={true} justifyContent="center" alignItems="center">
                        <TextField
                            fullWidth={true}
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            disabled={formik.isSubmitting}
                        />
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} container={true} justifyContent="space-evenly" spacing={2} className={classes.ActionsContainer}>
                    <Grid item={true}>
                        <Button type="submit" variant="contained" color="secondary">Register</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button component={Link} to={APP_ROUTES.Login} variant="outlined" color="secondary">Login</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Grid>;
});

