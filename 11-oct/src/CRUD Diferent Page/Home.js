import React from 'react'
import Table from './Table';
import { useNavigate } from 'react-router-dom';

const Home = ({ setShow }) => {
    const navigate = useNavigate();
    return (
        <div className='text-center'>
            <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => navigate("/addUser")}>Add User</button>
            <Table />
        </div>
    )
}

export default Home;