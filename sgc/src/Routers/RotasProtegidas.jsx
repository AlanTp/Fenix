import React from "react";
import { Navigate } from "react-router-dom";

export default function RotaProtegida({ children }) {
    const token = localStorage.getItem("token");
    if (!token) {
        // se não houver token, redireciona pro login
        return <Navigate to="/" replace />;
    }
    return children;
}