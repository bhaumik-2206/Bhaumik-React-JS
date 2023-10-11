import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const LogIn = () => {
    const [data, setData] = useState({ userName: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("token", data.userName);
        navigate("/dashboard");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="userName" value={data.userName} onChange={(e) => setData(pre => ({ ...pre, userName: e.target.value }))} required/>
            <input type="password" value={data.password} onChange={(e) => setData(pre => ({ ...pre, password: e.target.value }))} />
            <button type="submit">Log In</button>
        </form>
    )
}

export default LogIn
