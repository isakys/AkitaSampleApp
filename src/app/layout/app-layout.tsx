import * as React from "react";
import Grid from "@mui/material/Grid";
import { useAppLayoutStyles } from "./app-layout-styles";
import { Header } from "./header/app-layout-header";
import { Footer } from "./footer/app-layout-footer";
import { AppRouter } from "../routes/app-router";

export const AppLayout = React.memo(() => {
    const classes = useAppLayoutStyles();

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Root}>
        <Grid item={true} xs={12}>
            <Header />
        </Grid>
        <Grid item={true} xs={12} className={classes.Content} >
            <AppRouter />
        </Grid>
        <Grid item={true} xs={12}>
            <Footer />
        </Grid>
    </Grid>
});