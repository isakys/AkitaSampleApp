import * as React from "react";
import { useModalWindowFormBaseComponentStyles } from "./modal-window-form-base-component-styles";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    modalTitle: string;
    isModalWindowOpened: boolean;
    formComponent: JSX.Element;
    handleCloseModalWindow: () => void;
    handleConfirm: () => void;
}

export const ModalWindowFormBaseComponent = React.memo<Props>(props => {
    const classes = useModalWindowFormBaseComponentStyles();
    const { isModalWindowOpened, handleCloseModalWindow, handleConfirm, modalTitle, formComponent } = props;

    return <Modal
        open={isModalWindowOpened}
        onClose={handleCloseModalWindow}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={isModalWindowOpened}>
            <Grid container={true} justifyContent="center" alignItems="center" className={classes.ModalWrapper}>
                <Grid item={true} xs={12} sm={10} md={6} lg={4} container={true} spacing={3} className={classes.Modal}>
                    <Grid item={true} xs={12} container={true} justifyContent="space-between" alignItems="center">
                        <Grid item={true}>
                            <Typography variant="h5">
                                {modalTitle}
                            </Typography>
                        </Grid>
                        <Grid item={true}>
                            <IconButton onClick={handleCloseModalWindow} color="primary">
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={8}>
                        {formComponent}
                    </Grid>
                    <Grid item={true} xs={12} container={true} justifyContent="space-between" alignItems="center">
                        <Grid item={true}>
                            <Button onClick={handleConfirm} variant="contained" color="secondary">Confirm</Button>
                        </Grid>
                        <Grid item={true}>
                            <Button onClick={handleCloseModalWindow} variant="outlined" color="secondary">Cancel</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
    </Modal>;
});
