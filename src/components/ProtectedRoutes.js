import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const PrivateRoute = () => {
    const token = cookies.get("TOKEN");
    return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;