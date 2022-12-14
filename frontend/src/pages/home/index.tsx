import { Box, Button, Grid, Paper, TextField, ToggleButton, ToggleButtonGroup, Typography, Avatar, styled } from '@mui/material'
import React from "react";
import { useNavigate } from 'react-router-dom';

import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';

type LoginType = {
    username: string,
    password: string,
    typeUser: string,
}

export const HomePage: React.FC<{}> = () => {

    const navigate = useNavigate()
    const { getError, getSuccess } = useNotification()

    const [loginData, setLoginData] = React.useState<LoginType>({
        username: "",
        password: "",
        typeUser: "patient",
    })

    const infoLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData).then(() => {
            //getSuccess(JSON.stringify(loginData))
            getSuccess("Iniciaste sesión correctamente!")
            navigate(loginData.typeUser)
        }).catch((error) => {
            getError(error.message)
        })
    }

    const handleChangeUser = (e: React.MouseEvent<HTMLElement>, newAlignment: string,) => {
        setLoginData({ ...loginData, typeUser: newAlignment });
    };


    const BackgroundLogin = styled('div')(({ theme }) => ({
        padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            paddingLeft: 5,
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 150,
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 150,
        },
    }));

    return (

        <Box component="main" sx={{ flexGrow: 1, mt: 8.7, p: 1, }}>
            <Grid container direction="row" justifyContent="space-between" columns={{ xs: 1, sm: 8, md: 12 }}>
                <Grid item xs={2} md={4} sx={{ mt: 5 }} >
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>Iniciar Sesión</Typography>
                            <Avatar alt="Remy Sharp" src="../../src/assets/images/avatar/user.svg" sx={{ width: 65, height: 65, mb: 3 }} />
                            <ToggleButtonGroup color="primary" onChange={handleChangeUser} value={loginData.typeUser} exclusive>
                                <ToggleButton value="patient">Paciente</ToggleButton>
                                <ToggleButton value="doctor">Doctor</ToggleButton>
                                <ToggleButton value="admin">Administrador</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
                            <TextField name="username" onChange={infoLogin} fullWidth label="Usuario" sx={{ mt: 2, mb: 1.5 }} margin="normal" type="text" />
                            <TextField name="password" onChange={infoLogin} fullWidth label="Contraseña" sx={{ mt: 1.5, mb: 1.5 }} margin="normal" type="password" />
                            <Button fullWidth type="submit" variant='contained' sx={{ mt: 1.5, mb: 3 }}>Aceptar</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={8} >
                    <BackgroundLogin>
                        <div className="login"></div>
                    </BackgroundLogin>
                </Grid>
            </Grid>
        </Box>

    );
}