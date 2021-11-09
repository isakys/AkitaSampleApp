import * as React from "react";
import { AppTheme, AppThemeInstance } from "./app-theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout/app-layout";
import { LoaderView } from "./views/loader/loader-view";
import { UserService } from "./stores/user/user-service";
import { useObservable, useObservableState } from "observable-hooks";
import { UserQuery } from "./stores/user/user-query";

export const App = React.memo(() => {
    // const isUserPendingObservable = useObservable<boolean>(() => UserQuery.SelectIsPending());
    // const isUserPending = useObservableState<boolean>(isUserPendingObservable, true);

    // React.useEffect(() => {
    //     const getUserSubscription = UserService.LoadUser().subscribe();

    //     return () => {
    //         getUserSubscription.unsubscribe();
    //     };
    // }, [])

    // if (isUserPending) {
    //     return <LoaderView />;
    // }

    return <ThemeProvider<AppTheme> theme={AppThemeInstance}>
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    </ThemeProvider>;
});
