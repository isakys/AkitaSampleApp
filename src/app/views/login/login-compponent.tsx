import * as React from "react";
import { useLoginStyles } from "./login-compponent-styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../routes/app-routes";
import { UserService } from "../../stores/user/user-service";

export const LoginComponent = React.memo(() => {
    const classes = useLoginStyles();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => {
            UserService.LoginUser(values).subscribe();
        },
    });

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Container}>
        <Grid item={true} xs={12} md={6} container={true} justifyContent="center" alignItems="center" className={classes.LoginWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <Grid item={true} xs={12} container={true} justifyContent="center" alignItems="center">
                    <Typography variant="h4" color="primary">Welcome to BetterDayHealth</Typography>
                </Grid>
                <Grid item={true} xs={12} container={true} spacing={2}>
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
                <Grid item={true} xs={12} container={true} justifyContent="space-evenly" spacing={2}>
                    <Grid item={true}>
                        <Button type="submit" variant="contained" color="secondary">Login</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button component={Link} to={APP_ROUTES.Register} variant="outlined" color="secondary">Register</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Grid>;
});