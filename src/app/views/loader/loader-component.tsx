import * as React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useLoaderStyles } from "./loader-styles";

export const LoaderComponent = React.memo(() => {
    const classes = useLoaderStyles();

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Container}>
        <CircularProgress />
    </Grid>;
});
