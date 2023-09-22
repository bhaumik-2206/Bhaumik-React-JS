import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/student">Student</NavLink>
        </nav>
    )
}

export default Navbar
