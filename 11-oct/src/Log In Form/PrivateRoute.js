import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const PrivateRoute = ({ children }) => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setEmail(() => {
            let email = localStorage.getItem("email");
            if (email) {
                return email;
            } else {
                navigate("/logIn")
            }
        })
    }, [])

    return (
        email && children
    )
}
export default PrivateRoute;