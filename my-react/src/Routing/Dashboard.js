import React from 'react'

const Dashboard = () => {
    console.log("first")
    return (
        <h1>WELCOME {localStorage.getItem('token')}</h1>
    )
}

export default Dashboard;