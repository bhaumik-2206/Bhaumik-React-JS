import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const PrivateRoute = ({ children }) => {
    const [token, setToken] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    })
    return (
        token ? children : navigate("/logIn")
    )
}

export default PrivateRoute
