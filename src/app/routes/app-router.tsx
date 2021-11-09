import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AppointmentsView } from "../views/appointments/appointments-view";
import { Error401View, Error404View } from "../views/errors/errors-views";
import { HomeView } from "../views/home/home-view";
import { LoginView } from "../views/login/login-view";
import { RegisterView } from "../views/register/register-view";
import { APP_ROUTES } from "./app-routes";
import { AuthRoute } from "./auth-route-component";

export const AppRouter = React.memo(() => {
    return <Switch>
        <Route exact={true} path={APP_ROUTES.Home} component={HomeView} />
        <Route exact={true} path={APP_ROUTES.Register} component={RegisterView} />
        <Route exact={true} path={APP_ROUTES.Login} component={LoginView} />
        {/* <Route exact={true} path={APP_ROUTES.Appointments} component={AppointmentsView} /> */}
        <AuthRoute exact={true} path={APP_ROUTES.Appointments} component={AppointmentsView} />
        <Route exact={true} path={APP_ROUTES.Error401} component={Error401View} />
        <Route exact={true} path={APP_ROUTES.Error404} component={Error404View} />
    </Switch>;
});