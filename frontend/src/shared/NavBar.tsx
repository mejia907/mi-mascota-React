import { AppBar, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const NavBar = () => {
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography sx={{fontWeight:"bold", fontSize:20}}>Mi Mascota</Typography>
                            </Grid>
                            <Grid item>
                                <Stack spacing={2} direction="row">
                                    <Button variant="text">Nosotros</Button>
                                    <Button variant="text">Contáctanos</Button>
                                    <Button variant="contained">Regístrate</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}