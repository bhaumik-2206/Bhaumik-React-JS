import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const UserInfo = () => {
    const [data, setData] = useState({})
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3401/userData/${userId}`)
            .then(e => e.json())
            .then(data => setData(data))
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <h1>First Name:-{data.fname}</h1>
            <h1>Last Name:-{data.lname}</h1>
            <h1>Mobile Number:-{data.mobile}</h1>
            <h1>Email:-{data.email}</h1>
            <h1>Password:-{data.password}</h1>
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    )
}

export default UserInfo
