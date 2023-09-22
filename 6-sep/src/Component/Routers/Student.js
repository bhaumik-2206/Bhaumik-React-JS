import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Students = () => {
    return (
        <div>
            <h1>This is Student Page</h1>
            <nav>
                {/* Relative Link */}
                <NavLink to="junior">Junior</NavLink>
                <NavLink to="senior">Senior</NavLink>

                {/* Absolute Link */}
                {/* <NavLink to="/student/junior">Junior</NavLink>
                <NavLink to="/student/senior">Senior</NavLink> */}
            </nav>
            <Outlet />
        </div>
    )
}

export default Students
    ;