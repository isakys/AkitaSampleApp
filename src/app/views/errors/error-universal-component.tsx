import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useErrorsStyles } from "./errors-styles";

interface Props {
    message: string;
}

export const ErrorUniversalComponent = React.memo<Props>(props => {
    const classes = useErrorsStyles();
    const { message } = props;

    return <Grid container={true} justifyContent="center" alignItems="center" className={classes.Container}>
        <Typography variant="h1">{message}</Typography>
    </Grid>;
});
