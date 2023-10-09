import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import MainForm from './MainForm';

const EditUser = () => {
    const { editedData } = useParams();
    const [currentData, setCurrentData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3401/userData/${editedData}`)
            .then((res) => {
                return res.json();
            }).then((res) => {
                setCurrentData(res);
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentData(pre => ({ ...pre, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3401/userData/${editedData}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(currentData)
        }).then((res) => {
            navigate('/');
        }).catch((err) => {
            console.log("ERROR" + err.message)
        })
    }

    return (
        <div>
            <MainForm handleSubmit={handleSubmit} currentData={currentData} handleChange={handleChange} />
        </div>
    )
}

export default EditUser;