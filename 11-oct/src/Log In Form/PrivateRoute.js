import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const PrivateRoute = ({ children }) => {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setId(() => {
            let id = localStorage.getItem("id");
            if (id) {
                return id;
            } else {
                navigate("/logIn")
            }
        })
    }, [])

    return (
        id && children
    )
}
export default PrivateRoute;