import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useErrorsStyles } from "./errors-styles";

export const Error404Component = React.memo(() => {
    const classes = useErrorsStyles();

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Container}>
        <Typography variant="h1">404</Typography>
    </Grid>;
});
