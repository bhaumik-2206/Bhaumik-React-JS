import React, { useEffect, useState } from 'react'
import Table from './Table';
import { useNavigate } from 'react-router-dom';

const PrintData = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3401/userData")
            .then((res) => {
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
            <div className='text-center py-3'>
                <button className='btn btn-primary' onClick={openForm}>Add Data</button>
            </div>
            <Table userData={userData} setUserData={setUserData} />
        </div>
    )
}

export default PrintData;