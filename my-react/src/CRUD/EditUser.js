import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import MainForm from './MainForm';

const EditUser = () => {
    const { editedData } = useParams();
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", mobile: "", email: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        // console.log()
        // console.log(typeof editedData)
        if (Number(editedData) !== NaN) {
            fetch(`http://localhost:3401/userData/${editedData}`)
                .then((res) => {
                    return res.json();
                }).then((res) => {
                    setCurrentData(res);
                }).catch((err) => {
                    console.log(err.message);
                })
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let a = await fetch(`http://localhost:3401/userData/${editedData}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(currentData)
            })
            navigate('/')
        } catch (error) {
            console.log("ERROR: " + error)
        }
    }

    return (
        <div>
            <MainForm handleSubmit={handleSubmit} currentData={currentData} handleChange={handleChange} />
        </div>
    )
}

export default EditUser;