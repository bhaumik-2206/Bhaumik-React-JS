import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")

    useEffect(() => {
        setEmail(localStorage.getItem("email"))
    }, [])

    const handleLogOutPage = async () => {
        let res = await fetch(`http://localhost:3500/registerUser?email=${email}`)
        if (res.ok) {
            if (window.confirm("Are you sure you want to Log Out")) {
                // let a = await fetch(`http://localhost:3500/registerUser/${result[0].id}`, {
                //     method: 'DELETE',
                // })
                // if (a.ok) {
                    console.log("Log Out Successfully");
                    localStorage.removeItem("email");
                    navigate("/logIn");
                // }
            }
        }
        // console.log("LOG OUT SUCCESSFULLY")
    }
    return (
        <>
            <h1 className='text-6xl text-white'>User Page</h1>
            <button className='bg-sky-600' onClick={handleLogOutPage}>Log Out</button>
        </>
    )
}

export default UserPage;