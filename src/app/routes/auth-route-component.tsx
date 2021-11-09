import * as React from "react";
import { useObservable, useObservableState } from "observable-hooks";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { UserQuery } from "../stores/user/user-query";
import { APP_ROUTES } from "./app-routes";


export const AuthRoute = React.memo<RouteProps>(props => {
    const isUserAuthenticatedObservable = useObservable<any>(() => UserQuery.SelectIsAuthenticated());
    const isUserAuthenticated = useObservableState<any | null>(isUserAuthenticatedObservable, null);

    if (isUserAuthenticated) {
        return <Route {...props} />
    }

    return <Redirect to={APP_ROUTES.Error401} />
});