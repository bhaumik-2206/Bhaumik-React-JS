import React, { useEffect, useState } from 'react'
import Table from './Table';
import { useNavigate } from 'react-router-dom';

const PrintData = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (search !== "") {
            timer = setTimeout(async () => {
                let res = await fetch("http://localhost:3401/userData");
                let result = await res.json();
                setUserData(result.filter(ele => ele.fname.toLowerCase().trim().includes(search.toLowerCase().trim()) || ele.lname.toLowerCase().trim().includes(search.toLowerCase().trim()) || (`${ele.fname.trim()} ${ele.lname.trim()}`).toLowerCase().includes(search.toLowerCase().trim().split(" ").filter(Boolean).join(" ")) || (`${ele.lname.trim()} ${ele.fname.trim()}`).toLowerCase().trim().includes(search.toLowerCase().trim().split(" ").filter(Boolean).join(" "))));
            }, 500);
        } else {
            fetch("http://localhost:3401/userData")
                .then(e => e.json())
                .then(result => setUserData(result))
                .catch(e => console.log("ERROR: " + e.message))
        }
        return () => clearTimeout(timer);

    }, [search]);

    const openForm = () => {
        navigate("/addData")
    }

    return (
        <div>
            <div className='text-center py-3'>
                <button className='btn btn-primary' onClick={openForm}>Add Data</button>
            </div>
            <div className="form-group w-50 m-auto py-3">
                <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search For User' />
            </div>
            <Table userData={userData} setUserData={setUserData} search={search} />
        </div>
    )
}

export default PrintData;