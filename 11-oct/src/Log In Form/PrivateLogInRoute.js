import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const LogInPrivateRoute = ({ children }) => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setEmail(()=>{
            let email = localStorage.getItem("email");
            if(email){
                navigate("/user");
            }else{
                return email;
            }
        })
    })

    return (
        !email && children
    )
}

export default LogInPrivateRoute;