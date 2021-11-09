import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useErrorsStyles } from "./errors-styles";

export const Error401Component = React.memo(() => {
    const classes = useErrorsStyles();

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Container}>
        <Typography variant="h1">401</Typography>
    </Grid>;
});