import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from "../pages/Auth/Login"
import Profile from '../pages/Auth/Profile';

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <Profile /> : <Navigate to="/login" />;
}

export default ProtectedRoute
