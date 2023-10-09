import React, { useEffect, useState } from 'react'
import Table from './Table';
import { useNavigate } from 'react-router-dom';

const PrintData = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3400/userData").then((res) => {
            return res.json();
        }).then((resp) => {
            setUserData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const openForm = () => {
        navigate("/addData")
    }



    return (
        <div>
            <button className='btn btn-primary' onClick={openForm}>Add Data</button>
            <Table userData={userData} />
        </div>
    )
}

export default PrintData;