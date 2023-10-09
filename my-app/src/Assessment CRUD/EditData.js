import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from './Form';

const EditData = () => {
    const { editedId } = useParams();
    const [currentData, setCurrentData] = useState({ fname: "", lname: "", email: "", mobile: "", password: "" });
    let navigate = useNavigate();
    console.log(editedId)
    useEffect(async () => {
        let a = await fetch(`http://localhost:3400/userData/${editedId}`);
        let b = await a.json();
        setCurrentData(b);
    }, []);

    const handleEditData =  (e) => {
        e.preventDefault();
        fetch("http://localhost:3400/crud/" + editedId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(currentData)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
        navigate('/');
    }

    return (
        <div>
            <Form currentData={currentData} handleSubmit={handleEditData} />
        </div>
    )
}

export default EditData
