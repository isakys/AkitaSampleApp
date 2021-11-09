import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useFooterStyles } from "./app-layout-footer-styles";

export const Footer = React.memo(() => {
    const classes = useFooterStyles();

    return <Grid container={true} alignItems="center" className={classes.Footer}>
        <Typography variant="caption" color="white">
            Copyright © 2021, Better Day™ Health. All rights reserved.
        </Typography>
    </Grid>
});