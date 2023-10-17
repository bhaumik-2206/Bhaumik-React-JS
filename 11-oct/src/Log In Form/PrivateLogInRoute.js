import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const LogInPrivateRoute = ({ children }) => {
    const [id, setId] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setId(()=>{
            let id = localStorage.getItem("id");
            if(id){
                navigate("/user");
            }else{
                return id;
            }
        })
    })

    return (
        !id && children
    )
}

export default LogInPrivateRoute;