import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboardPage } from "./pages/admin";
import { HomePage } from "./pages/home";
import { RouterLayout } from "./shared/RouterLayout";

export const AppRouter: React.FC<{}> = () => {
    return(
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/admin" element={<AdminDashboardPage/>} />
            </Route>
        </Routes>
    )
}