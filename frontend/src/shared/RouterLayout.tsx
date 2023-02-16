import { CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SidebarApp } from "./Sidebar";

export const RouterLayout = () => {
    const location = useLocation()
    return(
        <>
            <CssBaseline />
            <div className={location.pathname !== '/' ? "app" : ""}>
                {location.pathname !== '/' ?
                    <SidebarApp /> 
                : <NavBar /> }
                <Outlet />
            </div>
        </>
    )
}