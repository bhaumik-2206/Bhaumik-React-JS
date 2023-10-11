import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3401/userData")
            .then(e => e.json())
            .then(data => setUserData(data))
            .catch(e => console.log(e));
    }, [])

    const showInfo = (id) => {
        navigate(`/userInfo/${id}`);
    }


    return (
        <div><div>
            {userData.length !== 0 ? (
                <table className='table table-hover table-dark fs-5 border-0'>
                    <thead>
                        <tr className='border'>
                            <th>Sr. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((ele, index) => (
                            <tr style={{ cursor: "pointer" }} key={index} onClick={() => showInfo(ele.id)}>
                                <td>{index + 1}</td>
                                <td>{ele.fname}</td>
                                <td>{ele.lname}</td>
                                <td>{ele.mobile}</td>
                                <td>{ele.email}</td>
                                <td>{ele.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>) : (<h1>Data is Empty</h1>)}
        </div>

        </div>
    )
}

export default Home
