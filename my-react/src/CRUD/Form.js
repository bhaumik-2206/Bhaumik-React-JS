import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import MainForm from './MainForm';

const Form = () => {
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", mobile: "", email: "", password: "" })
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3401/userData", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(currentData)
        }).then((res) => {
            navigate('/');
        }).catch((err) => {
            console.log("ERROR" + err.message)
        })
    }



    return (
        <MainForm handleSubmit={handleSubmit} currentData={currentData} handleChange={handleChange} />
    )
}

export default Form
