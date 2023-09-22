import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function Users() {
    const [user, setUser] = useSearchParams();
    let bool = user.get("filter") === "active";
    console.log(bool)
    return (
        <>
            <h1>This is User Page</h1>
            <Outlet />
            <div>
                <button onClick={() => setUser({ filter: "active" })}>Show Active User</button>
                <button onClick={() => setUser({})}>Show All User</button>
            </div>
            {
                bool ? (<h1>Active Users</h1>) : (<h1>All Users</h1>)
            }
        </>
    )
}
