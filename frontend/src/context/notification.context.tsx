import { AlertColor } from "@mui/material";
import React from "react";
import { Notification } from "../components";

type ConetextProps = {
    getError: (message: string) => void,
    getSuccess: (message: string) => void,
}

const NotificationContext = React.createContext<ConetextProps | null>(null)


export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

    const [message, setMessage] = React.useState("")
    const [open, setOpen] = React.useState(false)
    const [severety, setSeverety] = React.useState<AlertColor | undefined>(undefined)

    const handleClose = () => {
        setOpen(false)
    }

    const getError = (message: string) => {
        setSeverety("error")
        setOpen(true)
        setMessage(message)
    }
    const getSuccess = (message: string) => {
        setSeverety("success")
        setOpen(true)
        setMessage(message)
    }
    const value = {
        getError,
        getSuccess
    }
    return (
        <NotificationContext.Provider value={value}>
            <Notification handleClose={handleClose} open={open} message={message} severety={severety} />
            {children}
        </NotificationContext.Provider>
    )
}
export const useNotification = () => {
    const context = React.useContext(NotificationContext)
    if (!context) throw new Error("No existe el contexto de la alerta")
    return context
}