import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
const LogIn = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(window.location.href);
    // console.log(location.pathname);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/" + location.search)
        navigate("/")
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="userName">UserName:-</label>
                <input type="text" name="userName" id="" />
                <label htmlFor="password">Password:-</label>
                <input type="text" name="password" id="" />
                <button type='submit'>
                    HELLO
                    {/* <Link to={-1}>Submit</Link> */}
                </button>
            </form>
        </div>
    )
}

export default LogIn
