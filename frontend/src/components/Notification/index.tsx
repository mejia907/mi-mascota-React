import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";

type NotificationProps = {
    open: boolean,
    message: string,
    severety: AlertColor | undefined,
    handleClose: () => void
}

export const Notification = ({ open, message, severety, handleClose }: NotificationProps) => {
    return (
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={4000} open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severety}>
                <Typography>{message}</Typography>
            </Alert>
        </Snackbar>
    )
}