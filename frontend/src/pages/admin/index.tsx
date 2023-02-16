import { Box } from "@mui/material"
import { Header } from "../../components/Header"

export const AdminDashboardPage = () => {
    return(
        <Box m="20px">
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
                <Header title="Dashboard" subtitle="Bienvenido"></Header>
            </Box>
        </Box>
    )
}