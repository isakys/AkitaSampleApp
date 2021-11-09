import * as React from "react";
import { useObservable, useObservableState } from "observable-hooks";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { UserQuery } from "../stores/user/user-query";
import { APP_ROUTES } from "./app-routes";


export const AuthRoute = React.memo<RouteProps>(props => {
    const isAuthenticatedObservable = useObservable<boolean>(() => UserQuery.SelectIsAuthenticated());
    const isAuthenticated = useObservableState<boolean>(isAuthenticatedObservable, true);

    if (isAuthenticated) {
        return <Route {...props} />;
    }

    return <Redirect to={APP_ROUTES.Error401} />;
});