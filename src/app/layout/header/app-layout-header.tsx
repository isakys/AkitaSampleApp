import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../../../assets/BDH_Logo_Banner_white@0.5x.png";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./app-layout-header-styles";
import { APP_ROUTES } from "../../routes/app-routes";
import { useObservable, useObservableState } from "observable-hooks";
import { UserQuery } from "../../stores/user/user-query";
import { UserService } from "../../stores/user/user-service";

export const Header = React.memo(() => {
    const classes = useHeaderStyles();

    const isAuthenticatedObservable = useObservable<boolean>(() => UserQuery.SelectIsAuthenticated());
    const isAuthenticated = useObservableState<boolean>(isAuthenticatedObservable, true);

    return <Grid container={true} justifyContent="space-between" alignItems="center" className={classes.Header}>
        <Grid item={true}>
            <Link to={APP_ROUTES.Home}>
                <img src={Logo} alt="BDH" className={classes.Logo} />
            </Link>
        </Grid>
        <Grid item={true} xs={6} container={true} justifyContent="flex-end" spacing={2}>
            {
                isAuthenticated ? (
                    <>
                        <Grid item={true}>
                            <Button component={Link} to={APP_ROUTES.Appointments} variant="text" color="inherit">
                                Appointments
                            </Button>
                        </Grid>
                        <Grid item={true}>
                            <Button onClick={() => UserService.LogoutUser()} component={Link} to={APP_ROUTES.Home} variant="outlined" color="inherit">
                                Logout
                            </Button>
                        </Grid>
                    </>
                )
                    : (
                        <Grid item={true}>
                            <Button component={Link} to={APP_ROUTES.Login} variant="outlined" color="inherit">
                                Login
                            </Button>
                        </Grid>
                    )
            }
        </Grid>
    </Grid>
});