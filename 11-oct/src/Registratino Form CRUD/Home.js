import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from './Table';
// import Notification from './Notification'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className='bg-blue-500 text-white my-3 rounded-lg' onClick={() => navigate("/registration")}>Add User</button>
            <Table />
            {/* <Notification value={"Data Added Successfull"} /> */}
        </div>
    )
}

export default Home
