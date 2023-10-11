import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const LogInPrivateRoute = ({ children }) => {
    const [token, setToken] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    })

    return (
        token ? navigate("/dashboard") : (children)
    )
}

export default LogInPrivateRoute
