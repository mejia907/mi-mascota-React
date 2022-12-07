import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

type ThemePro = {
    children: JSX.Element
}

export enum themePalette {
    background = "#f8ffff",
    primary = "#008080",
    //Alert Styles
    error_main = "#f44336",
    success_main = "#66bb6a",
}

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: themePalette.background
        },
        primary: {
            main: themePalette.primary
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    fontWeight: "bold",
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.8em",
                    fontSize: "1em"
                }
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.error_main}`,
                },
                standardSuccess:{
                    border: `1px solid ${themePalette.success_main}`,
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemePro> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}