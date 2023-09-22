import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DifferentPage() {
    let navigate = useNavigate();
    return (
        <>
            <h1>This is Different Page Page</h1>
            <button onClick={() => navigate("/")}>Back</button>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </>
    )
}
