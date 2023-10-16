import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from './Table';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => navigate("/registration")}>Add User</button>
            <Table />
        </>
    )
}

export default Home;